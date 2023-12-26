'use client';

import Buttons from '@/components/ui/buttons';
import React from 'react';
import Link from 'next/link';

const BrowseGroup = () => {
	return (
		<div className="flex items-center align-middle justify-center h-full">
			<div className="w-fit flex px-2">
				<Buttons.Button
					imageProps={{
						width: 32,
						height: 32,
						src: '/penguin.png',
						loading: 'lazy',
						alt: 'icon',
					}}
					buttonProps={{
						className: 'btn',
					}}
				/>
			</div>
			<div className="flex mx-[1.2rem] max-[800px]:hidden">
				<Link
					href="/browse"
					className="text-primary-light dark:text-primary-dark hover:text-purple-400 font-sans font-semibold text-lg tracking-tight"
				>
					<p className="ml-1">Browse</p>
				</Link>
			</div>
			<div className="w-fit flex align-middle h-full ml-[0.9rem] rounded-sm">
				<Buttons.ThreeDotsButton
					buttonProps={{
						className: 'flex align-middle hover:bg-[#3F3F3F] rounded-[0.200rem] p-0.5',
					}}
				/>
			</div>
		</div>
	);
};

export default BrowseGroup;
