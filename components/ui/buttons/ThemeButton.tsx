'use client';

import { useTheme } from 'next-themes';
import { MouseEventHandler } from 'react';
import { LightMode, DarkMode } from '../react-icons';
import { DEFAULT_REACT_ICON_SIZE } from '../react-icons';
import { CustomReactIconButtonProps } from './type';

export const ThemeButton = ({ buttonProps, iconProps, children }: CustomReactIconButtonProps) => {
	const { theme, setTheme } = useTheme();
	const switchTheme: MouseEventHandler<HTMLButtonElement> = () =>
		setTheme(theme == 'light' ? 'dark' : 'light');

	return (
		<div>
			<button onClick={switchTheme} {...buttonProps}>
				{theme === 'dark' ? (
					<LightMode size={DEFAULT_REACT_ICON_SIZE} {...iconProps} />
				) : (
					<DarkMode size={DEFAULT_REACT_ICON_SIZE} {...iconProps} />
				)}
				{children}
			</button>
		</div>
	);
};
