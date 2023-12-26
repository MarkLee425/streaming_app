'use client';

import { DEFAULT_REACT_ICON_SIZE, Setting } from '../react-icons';
import { CustomReactIconButtonProps } from './type';

export const SettingButton = ({ buttonProps, iconProps, children }: CustomReactIconButtonProps) => {
	return (
		<>
			<button {...buttonProps}>
				<Setting size={DEFAULT_REACT_ICON_SIZE} {...iconProps} />
				{children}
			</button>
		</>
	);
};
