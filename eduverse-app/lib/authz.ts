import { currentUser } from '@clerk/nextjs/server';

/**
 * Server-side authorization helpers for EduVerse.
 *
 * There is no `role` column in the database (see prisma/schema.prisma), so admin
 * status is resolved from Clerk instead. A user is an admin if ANY of these hold:
 *
 *   1. Clerk publicMetadata.role === 'admin'   (set per-user in the Clerk dashboard)
 *   2. Their Clerk user id is listed in ADMIN_USER_IDS   (comma-separated env var)
 *   3. Their primary email is listed in ADMIN_EMAILS      (comma-separated env var)
 *
 * Fails CLOSED: any missing configuration, unauthenticated request, or error
 * resolves to "not an admin".
 *
 * NOTE: To grant yourself access, add your Clerk user id to ADMIN_USER_IDS in
 * eduverse-app/.env (e.g. ADMIN_USER_IDS="user_2abc...") and restart the dev
 * server, or set publicMetadata { "role": "admin" } on your user in Clerk.
 */

function parseList(value: string | undefined): string[] {
  return (value ?? '')
    .split(',')
    .map((s) => s.trim().toLowerCase())
    .filter(Boolean);
}

/** Returns true when the current Clerk-authenticated user is an EduVerse admin. */
export async function isAdmin(): Promise<boolean> {
  try {
    const user = await currentUser();
    if (!user) return false;

    const role = (user.publicMetadata as { role?: unknown } | null)?.role;
    if (typeof role === 'string' && role.toLowerCase() === 'admin') return true;

    const adminIds = parseList(process.env.ADMIN_USER_IDS);
    if (adminIds.includes(user.id.toLowerCase())) return true;

    const adminEmails = parseList(process.env.ADMIN_EMAILS);
    if (adminEmails.length > 0) {
      const email = user.emailAddresses?.[0]?.emailAddress?.toLowerCase();
      if (email && adminEmails.includes(email)) return true;
    }

    return false;
  } catch {
    // Fail closed on any Clerk/network error.
    return false;
  }
}

/** Throws when the current user is not an admin. Use to gate server actions. */
export async function requireAdmin(): Promise<void> {
  if (!(await isAdmin())) {
    throw new Error('FORBIDDEN: admin access required');
  }
}
