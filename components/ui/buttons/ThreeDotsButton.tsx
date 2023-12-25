'use client';
import { DEFAULT_REACT_ICON_SIZE } from '../react-icons';
import { ThreeDots } from '../react-icons';
import { CustomReactIconButtonProps } from './type';

export const ThreeDotsButton = ({
	buttonProps,
	iconProps,
	children,
}: CustomReactIconButtonProps) => {
	return (
		<div>
			<button {...buttonProps}>
				<ThreeDots size={DEFAULT_REACT_ICON_SIZE} {...iconProps} />
				{children}
			</button>
		</div>
	);
};
