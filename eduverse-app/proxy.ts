import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse, type NextRequest } from "next/server";

/**
 * EduVerse Deny-By-Default Edge Security Gateway
 *
 * Exposes ONLY explicitly allowlisted read-only public pages & non-sensitive endpoints.
 * All state-mutating API routes (/api/quiz/submit, /api/admin/*) and private routes
 * are strictly protected and require valid Clerk authentication.
 */

// Allowlist ONLY public navigation pages & non-sensitive read APIs
const isPublicRoute = createRouteMatcher([
  "/",
  "/select(.*)",
  "/configure(.*)",
  "/quiz(.*)",
  "/boss-fight(.*)",
  "/results(.*)",
  "/dashboard(.*)",
  "/leaderboard(.*)",
  "/terms(.*)",
  "/privacy(.*)",
  "/sign-in(.*)",
  "/sign-up(.*)",
  // Strictly allowlisted non-sensitive read-only APIs
  "/api/questions(.*)",
  "/api/meta(.*)",
  "/api/leaderboard(.*)",
  "/api/stats(.*)",
]);

const publishableKey =
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY ||
  "pk_live_Y2xlcmsuZWR1c3RkLm1lJA";

const clerkHandler = clerkMiddleware(
  async (auth, req) => {
    // Deny-by-default: Protect all routes not explicitly in the public allowlist
    if (!isPublicRoute(req)) {
      await auth.protect();
    }
  },
  {
    publishableKey,
    ...(process.env.CLERK_SECRET_KEY ? { secretKey: process.env.CLERK_SECRET_KEY } : {}),
  }
);

export default async function middleware(req: NextRequest, evt: any) {
  try {
    return await clerkHandler(req, evt);
  } catch (error) {
    console.error("Clerk Edge Middleware Access Intercepted:", error);

    // Fail-open ONLY for explicitly allowlisted public routes
    if (isPublicRoute(req)) {
      return NextResponse.next();
    }

    // For protected API endpoints, return JSON 401 instead of HTML redirect
    if (req.nextUrl.pathname.startsWith('/api/')) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized: Authentication required to perform this action.' },
        { status: 401 }
      );
    }

    // For private pages, redirect to sign-in with return URL
    const signInUrl = new URL('/sign-in', req.url);
    signInUrl.searchParams.set('redirect_url', req.url);
    return NextResponse.redirect(signInUrl);
  }
}

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
    "/__clerk/:path*",
  ],
};
