'use client';

import { SignUp } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
import { useTheme } from 'next-themes';

export default function Page() {
	const { theme } = useTheme();
	const appearance =
		theme === 'dark'
			? {
					baseTheme: dark,
				}
			: {};
	return (
		<div className="flex justify-center items-center w-full h-full">
			<SignUp appearance={appearance} />
		</div>
	);
}
