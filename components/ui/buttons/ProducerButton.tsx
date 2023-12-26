'use client';

import { DEFAULT_REACT_ICON_SIZE, Film } from '../react-icons';
import { CustomReactIconButtonProps } from './type';

export const ProducerButton = ({
	buttonProps,
	iconProps,
	children,
}: CustomReactIconButtonProps) => {
	return (
		<>
			<button {...buttonProps}>
				<Film size={DEFAULT_REACT_ICON_SIZE} {...iconProps} />
				{children}
			</button>
		</>
	);
};
