import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse, type NextRequest } from "next/server";

// Define public routes explicitly to allow frictionless access for students
const isPublicRoute = createRouteMatcher([
  "/",
  "/select(.*)",
  "/configure(.*)",
  "/quiz(.*)",
  "/results(.*)",
  "/dashboard(.*)",
  "/leaderboard(.*)",
  "/terms(.*)",
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/api/(.*)",
]);

const publishableKey =
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY ||
  "pk_live_Y2xlcmsuZWR1c3RkLm1lJA";

const clerkHandler = clerkMiddleware(
  async (auth, req) => {
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
    // Fail-open for public routes to prevent 500 crashes
    console.error("Clerk Edge Middleware Handled Exception:", error);
    return NextResponse.next();
  }
}

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
    "/__clerk/:path*",
  ],
};
