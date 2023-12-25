'use client';
import Link from 'next/link';
import { DEFAULT_REACT_ICON_SIZE, Login } from '../react-icons';
import { LoginButtonProps } from './type';

export const LoginButton = ({ linkProps, iconProps, children }: LoginButtonProps) => {
	return (
		<>
			<Link
				{...linkProps}
				className="flex items-center align-middle justify-left w-full pr-10 rounded-md pl-2 hover:bg-button-hover-secondary-light dark:hover:bg-button-hover-secondary-dark mt-1 mb-3 py-1"
			>
				<Login size={DEFAULT_REACT_ICON_SIZE} {...iconProps} />
				{children}
			</Link>
		</>
	);
};
