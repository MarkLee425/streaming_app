'use client';

import Buttons from '@/components/ui/buttons';
import React, { ComponentProps, useEffect, useState } from 'react';
import SearchBar from '../SearchBar';
import { IconBaseProps } from 'react-icons';
import { cn } from '@/lib/utils/cn';

type ButtonProps = ComponentProps<'button'>;
type IconProps = IconBaseProps;
type SearchBarProps = ComponentProps<'input'>;

type SearchGroupProps = {
	searchBarProps?: SearchBarProps;
	searchButton?: {
		buttonProps?: ButtonProps;
		iconProps?: IconProps;
	};
};

const SearchGroup = ({ searchBarProps, searchButton }: SearchGroupProps) => {
	const [searchValue, setSearchValue] = useState('');
	const isDisabled = searchValue === '';
	const searchValueOnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value);
	};
	useEffect(() => console.log(searchValue), [searchValue]);
	return (
		<div className="w-full flex align-middle justify-center items-center">
			<SearchBar
				onChange={searchValueOnChangeHandler}
				placeholder="Search"
				className="py-[0.45rem] px-2 rounded-l-md bg-transparent outline-none border border-solid text-sm border-gray-500 hover:border-gray-500 hover:border-2 focus:border-purple-500 focus:border-4"
				size={44}
			/>
			<Buttons.SearchButton
				iconProps={{
					className: 'text-gray-100 font-extralight stroke-[2.5]',
					size: 22,
				}}
				buttonProps={{
					className: cn(
						'bg-[#2E2E2E] hover:bg-[#323232] py-2 pr-[0.45rem] pl-[0.36rem] rounded-r-md',
						{
							'cursor-not-allowed': isDisabled,
						},
					),
					disabled: isDisabled,
				}}
			/>
		</div>
	);
};

export default SearchGroup;
