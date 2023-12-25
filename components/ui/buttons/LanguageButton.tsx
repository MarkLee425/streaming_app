'use client';
import { DEFAULT_REACT_ICON_SIZE, Language } from '../react-icons';
import { CustomReactIconButtonProps } from './type';

export const LanguageButton = ({
	buttonProps,
	iconProps,
	children,
}: CustomReactIconButtonProps) => {
	return (
		<>
			<button {...buttonProps}>
				<Language size={DEFAULT_REACT_ICON_SIZE} {...iconProps} />
				{children}
			</button>
		</>
	);
};
