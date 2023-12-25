'use client';

import React, { ComponentProps } from 'react';

type SearchBarProps = ComponentProps<'input'>;

const SearchBar = ({ ...rest }: SearchBarProps) => {
	return (
		<>
			<input placeholder="Search" {...rest} />
		</>
	);
};

export default SearchBar;
