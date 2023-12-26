'use client';

import { DEFAULT_REACT_ICON_SIZE, Logout } from '../react-icons';
import { LogoutButtonProps } from './type';
import { useRouter } from 'next/navigation';
import { useClerk } from '@clerk/nextjs';

export const LogoutButton = ({ buttonProps, iconProps, children }: LogoutButtonProps) => {
	const router = useRouter();
	const { signOut } = useClerk();
	return (
		<>
			<button
				{...buttonProps}
				onClick={() => signOut(() => router.push('/'))}
				className="flex items-center align-middle justify-left w-full pr-10 rounded-md pl-2 hover:bg-button-hover-secondary-light dark:hover:bg-button-hover-secondary-dark mt-1 mb-3 py-1"
			>
				<Logout size={DEFAULT_REACT_ICON_SIZE} {...iconProps} />
				{children}
			</button>
		</>
	);
};
