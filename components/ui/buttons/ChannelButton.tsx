'use client';

import { DEFAULT_REACT_ICON_SIZE, Channel } from '../react-icons';
import { CustomReactIconButtonProps } from './type';

export const ChannelButton = ({ buttonProps, iconProps, children }: CustomReactIconButtonProps) => {
	return (
		<>
			<button {...buttonProps}>
				<Channel size={DEFAULT_REACT_ICON_SIZE} {...iconProps} />
				{children}
			</button>
		</>
	);
};
