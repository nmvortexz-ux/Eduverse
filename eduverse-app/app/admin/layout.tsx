import type { ReactNode } from 'react';
import { redirect } from 'next/navigation';
import { isAdmin } from '@/lib/authz';

/**
 * Server-side authorization gate for the entire /admin route segment.
 *
 * Runs on the server before any admin UI is rendered. Signed-in non-admins
 * (i.e. ordinary students) and unauthenticated visitors are redirected away,
 * so the client admin bundle and its data are never served to them.
 *
 * Defense-in-depth: the server actions in ./actions.ts independently re-check
 * admin status, because Server Actions are dispatched by action id and are not
 * protected by this layout guard on their own.
 */
export default async function AdminLayout({ children }: { children: ReactNode }) {
  if (!(await isAdmin())) {
    redirect('/');
  }
  return <>{children}</>;
}
