import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import { dark, neobrutalism } from '@clerk/themes';
import ThemeProvider from '@/components/ThemeProvider';
import { useTheme } from 'next-themes';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'StreamVibe',
	description: 'StreamVibe is a global streaming platform',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<ClerkProvider>
			<html lang="en" suppressHydrationWarning={true}>
				<body className={inter.className} suppressHydrationWarning={true}>
					<ThemeProvider attribute="class" defaultTheme="dark" storageKey="streamVibe-theme">
						{children}
					</ThemeProvider>
				</body>
			</html>
		</ClerkProvider>
	);
}
