'use client';

import { DEFAULT_REACT_ICON_SIZE, Message } from '../react-icons';
import { CustomReactIconButtonProps } from './type';

export const MessageButton = ({ buttonProps, iconProps, children }: CustomReactIconButtonProps) => {
	return (
		<>
			<button {...buttonProps}>
				<Message size={DEFAULT_REACT_ICON_SIZE} {...iconProps} />
				{children}
			</button>
		</>
	);
};
