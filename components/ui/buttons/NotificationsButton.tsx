'use client';

import { DEFAULT_REACT_ICON_SIZE, Notifications } from '../react-icons';
import { CustomReactIconButtonProps } from './type';

export const NotificationsButton = ({
	buttonProps,
	iconProps,
	children,
}: CustomReactIconButtonProps) => {
	return (
		<>
			<button {...buttonProps}>
				<Notifications size={DEFAULT_REACT_ICON_SIZE} {...iconProps} />
				{children}
			</button>
		</>
	);
};
