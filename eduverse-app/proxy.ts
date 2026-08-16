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

export default clerkMiddleware(async (auth, req) => {
  if (!isPublicRoute(req)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
    "/__clerk/:path*",
  ],
};
