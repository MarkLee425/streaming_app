import { authMiddleware, redirectToSignIn } from '@clerk/nextjs';
import createMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server';

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware

export default authMiddleware({
	afterAuth(auth, req) {
		// Handle users who aren't authenticated
		if (!auth.userId && !auth.isPublicRoute) {
			return redirectToSignIn({ returnBackUrl: req.url });
		}
		// Redirect logged in users to organization selection page if they are not active in an organization
		if (auth.userId && !auth.orgId && req.nextUrl.pathname !== '/') {
			const home = new URL('/', req.url);
			return NextResponse.redirect(home);
		}
		// If the user is logged in and trying to access a protected route, allow them to access route
		if (auth.userId && !auth.isPublicRoute) {
			return NextResponse.next();
		}
		// Allow users visiting public routes to access them
		return NextResponse.next();
	},
	publicRoutes: ['((?!^/admin/).*)'],
});

export const config = {
	matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
