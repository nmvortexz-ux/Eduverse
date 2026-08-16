import { currentUser } from '@clerk/nextjs/server';
import { prisma } from './prisma';

/**
 * Syncs the currently authenticated Clerk user into Neon DB via an upsert.
 * Safe to call on every authenticated request — a no-op if user already exists.
 * Returns the synced User record, or null if no authenticated user.
 */
export async function syncUser() {
  const clerkUser = await currentUser();
  if (!clerkUser) return null;

  const email = clerkUser.emailAddresses[0]?.emailAddress ?? '';
  const name = [clerkUser.firstName, clerkUser.lastName]
    .filter(Boolean)
    .join(' ') || clerkUser.username || null;

  const user = await prisma.user.upsert({
    where: { id: clerkUser.id },
    update: {
      email,
      name,
      imageUrl: clerkUser.imageUrl ?? null,
    },
    create: {
      id: clerkUser.id,
      email,
      name,
      imageUrl: clerkUser.imageUrl ?? null,
    },
  });

  return user;
}
