'use client';

import { DEFAULT_REACT_ICON_SIZE, Privacy } from '../react-icons';
import { CustomReactIconButtonProps } from './type';

export const PrivacyButton = ({ buttonProps, iconProps, children }: CustomReactIconButtonProps) => {
	return (
		<>
			<button {...buttonProps}>
				<Privacy size={DEFAULT_REACT_ICON_SIZE} {...iconProps} />
				{children}
			</button>
		</>
	);
};
