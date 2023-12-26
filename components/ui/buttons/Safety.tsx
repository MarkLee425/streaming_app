'use client';

import { DEFAULT_REACT_ICON_SIZE, Safety } from '../react-icons';
import { CustomReactIconButtonProps } from './type';

export const SafetyButton = ({ buttonProps, iconProps, children }: CustomReactIconButtonProps) => {
	return (
		<>
			<button {...buttonProps}>
				<Safety size={DEFAULT_REACT_ICON_SIZE} {...iconProps} />
				{children}
			</button>
		</>
	);
};
