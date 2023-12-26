'use client';

import { DEFAULT_REACT_ICON_SIZE, Dashboard } from '../react-icons';
import { CustomReactIconButtonProps } from './type';

export const DashboardButton = ({
	buttonProps,
	iconProps,
	children,
}: CustomReactIconButtonProps) => {
	return (
		<>
			<button {...buttonProps}>
				<Dashboard size={DEFAULT_REACT_ICON_SIZE} {...iconProps} />
				{children}
			</button>
		</>
	);
};
