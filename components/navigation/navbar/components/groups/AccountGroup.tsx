'use client';

import Buttons from '@/components/ui/buttons';
import React, { useState } from 'react';
import Link from 'next/link';
import Popup from '@/components/ui/pop-up/Popup';
import { cn } from '@/lib/utils/cn';
import { POPUP_LIST_ADMIN_ITEMS, POPUP_LIST_PUBLIC_ITEMS } from './constants';
import { PrimeButton } from '@/components/ui/buttons/PrimeButton';
import { MessageButton } from '@/components/ui/buttons/MessageButton';
import { NotificationsButton } from '@/components/ui/buttons/NotificationsButton';

const AccountGroup = ({ isLogin = false }: { isLogin: boolean }) => {
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
			{isLogin ? (
				<>
					<div className="w-fit flex p-2 hover:bg-button-hover-secondary-light dark:hover:bg-button-hover-secondary-dark rounded-full">
						<PrimeButton />
					</div>
					<div className="w-fit flex p-2 hover:bg-button-hover-secondary-light dark:hover:bg-button-hover-secondary-dark rounded-full">
						<NotificationsButton />
					</div>
					<div className="w-fit flex p-2 hover:bg-button-hover-secondary-light dark:hover:bg-button-hover-secondary-dark rounded-full mr-2">
						<MessageButton />
					</div>
				</>
			) : (
				<>
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
				</>
			)}

			<div className="w-fit flex px-2">
				<Buttons.ProfileButton
					buttonProps={{
						className: cn('btn p-1 mr-2', {
							'rounded-[0.25rem] hover:bg-button-hover-secondary-light dark:hover:bg-button-hover-secondary-dark':
								!isLogin,
							'rounded-full bg-[#5DF4FE] text-black': isLogin,
						}),
						onClick: buttonOnClickHandler,
					}}
					iconProps={{}}
				/>
			</div>
			<Popup anchor={anchor} clickAwayHandler={clickAwayHandler}>
				{!isLogin ? (
					<ul className="w-fit flex flex-col px-2 gap-y-1 text-sm">
						{POPUP_LIST_PUBLIC_ITEMS.map((item, i) => (
							<li
								key={i}
								className={cn(
									'flex border-solid border-b border-popup-light dark:border-popup-dark',
									{
										'border-b border-popup-light dark:border-popup-dark':
											i != POPUP_LIST_PUBLIC_ITEMS.length - 1,
										'mt-2': i === 0,
									},
								)}
							>
								{item}
							</li>
						))}
					</ul>
				) : (
					<ul className="w-fit flex flex-col px-2 text-sm">
						{POPUP_LIST_ADMIN_ITEMS.map((item, i) => (
							<li
								key={i}
								className="flex flex-col border-solid border-b border-popup-light dark:border-popup-dark py-2"
							>
								{item.map((each) => (
									<>
										<li
											className={cn('flex py-[0.08rem]', {
												'justify-center mt-2 pb-2': i === 0,
											})}
										>
											{each}
										</li>
									</>
								))}
							</li>
						))}
					</ul>
				)}
			</Popup>
		</div>
	);
};

export default AccountGroup;
