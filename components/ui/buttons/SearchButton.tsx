'use client';
import { DEFAULT_REACT_ICON_SIZE, Search } from '../react-icons';
import { CustomReactIconButtonProps } from './type';

export const SearchButton = ({ buttonProps, iconProps, children }: CustomReactIconButtonProps) => {
	return (
		<>
			<button {...buttonProps}>
				<Search size={DEFAULT_REACT_ICON_SIZE} {...iconProps} />
				{children}
			</button>
		</>
	);
};
