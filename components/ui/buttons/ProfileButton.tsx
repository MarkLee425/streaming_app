'use client';
import { DEFAULT_REACT_ICON_SIZE, Profile } from '../react-icons';
import { CustomReactIconButtonProps } from './type';

export const ProfileButton = ({ buttonProps, iconProps, children }: CustomReactIconButtonProps) => {
	return (
		<>
			<button {...buttonProps}>
				<Profile size={DEFAULT_REACT_ICON_SIZE} {...iconProps} />
				{children}
			</button>
		</>
	);
};
