'use client';

import Buttons from '@/components/ui/buttons';
import React, { useState } from 'react';
import Link from 'next/link';
import { LanguageButton } from '@/components/ui/buttons/LanguageButton';
import { ThemeButton } from '@/components/ui/buttons/ThemeButton';
import Popup from '@/components/ui/pop-up/Popup';
import { LoginButton } from '@/components/ui/buttons/LoginButton';
import { cn } from '@/lib/utils/cn';

const POPUP_LIST_ITEMS = [
	<LanguageButton
		key={'language'}
		buttonProps={{
			className:
				'flex items-center align-middle justify-left w-full pr-10 rounded-md pl-2 hover:bg-button-hover-secondary-light dark:hover:bg-button-hover-secondary-dark mt-1 mb-3 py-1',
		}}
	>
		<p className="ml-2">Language</p>
	</LanguageButton>,
	<ThemeButton
		key={'theme'}
		buttonProps={{
			className:
				'flex items-center align-middle justify-left w-full pr-10 rounded-md pl-2 hover:bg-button-hover-secondary-light dark:hover:bg-button-hover-secondary-dark mt-1 mb-3 py-1',
		}}
	>
		<p className="ml-2">Switch Theme</p>
	</ThemeButton>,
	<LoginButton
		key={'login'}
		linkProps={{
			href: '/sign-in',
		}}
	>
		<p className="ml-2">Login</p>
	</LoginButton>,
];

const AccountGroup = () => {
	const [anchor, setAnchor] = useState<null | HTMLElement>(null);
	const open = Boolean(anchor);
	const id = open ? 'simple-popup' : undefined;
	const buttonOnClickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault();
		setAnchor(anchor ? null : e.currentTarget);
	};
	const clickAwayHandler = (e: MouseEvent | TouchEvent) => {
		e.preventDefault();
		setAnchor(null);
	};
	return (
		<div className="flex items-center align-middle justify-center h-full">
			<div className="w-fit flex px-2">
				<Link
					href={'/sign-in'}
					className="bg-button-secondary-light dark:bg-button-secondary-dark px-[0.65rem] py-[0.34rem] rounded-[0.25rem] text-[0.80rem] tracking-tight font-[650] text-primary-light dark:text-primary-dark"
				>
					<p>Login</p>
				</Link>
			</div>
			<div className="w-fit flex ml-1 text-white">
				<Link
					href={'/sign-up'}
					className="bg-button-primary hover:bg-button-hover-primary px-[0.65rem] py-[0.34rem] rounded-[0.25rem] text-[0.80rem] tracking-tight font-[650]"
				>
					<p>Sign Up</p>
				</Link>
			</div>
			<div className="w-fit flex px-2">
				<Buttons.ProfileButton
					buttonProps={{
						className:
							'btn p-1 rounded-[0.25rem] hover:bg-button-hover-secondary-light dark:hover:bg-button-hover-secondary-dark',
						onClick: buttonOnClickHandler,
					}}
					iconProps={{}}
				/>
			</div>
			<Popup anchor={anchor} clickAwayHandler={clickAwayHandler}>
				<ul className="w-fit flex flex-col px-2 gap-y-1 text-sm">
					{POPUP_LIST_ITEMS.map((item, i) => (
						<li
							key={i}
							className={cn('flex border-solid border-gray-700', {
								'border-b border-popup-light dark:border-popup-dark':
									i != POPUP_LIST_ITEMS.length - 1,
								'mt-2': i === 0,
							})}
						>
							{item}
						</li>
					))}
				</ul>
			</Popup>
		</div>
	);
};

export default AccountGroup;
