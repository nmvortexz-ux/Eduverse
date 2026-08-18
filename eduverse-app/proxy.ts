import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

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

export default clerkMiddleware(
  async (auth, req) => {
    try {
      if (!isPublicRoute(req)) {
        await auth.protect();
      }
    } catch (err) {
      console.error("Clerk Middleware Error:", err);
    }
  },
  {
    publishableKey,
    secretKey: process.env.CLERK_SECRET_KEY,
  }
);

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
    "/__clerk/:path*",
  ],
};
