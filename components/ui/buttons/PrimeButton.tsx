'use client';

import { DEFAULT_REACT_ICON_SIZE, Crown } from '../react-icons';
import { CustomReactIconButtonProps } from './type';

export const PrimeButton = ({ buttonProps, iconProps, children }: CustomReactIconButtonProps) => {
	return (
		<>
			<button {...buttonProps}>
				<Crown size={DEFAULT_REACT_ICON_SIZE} {...iconProps} />
				{children}
			</button>
		</>
	);
};
