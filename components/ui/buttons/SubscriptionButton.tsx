'use client';

import { DEFAULT_REACT_ICON_SIZE, Subscription } from '../react-icons';
import { CustomReactIconButtonProps } from './type';

export const SubscriptionButton = ({
	buttonProps,
	iconProps,
	children,
}: CustomReactIconButtonProps) => {
	return (
		<>
			<button {...buttonProps}>
				<Subscription size={DEFAULT_REACT_ICON_SIZE} {...iconProps} />
				{children}
			</button>
		</>
	);
};
