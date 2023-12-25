'use client';

import React from 'react';
import { ThemeProvider as NextJSThemeProvider } from 'next-themes';
import { ThemeProviderProps } from 'next-themes/dist/types';

const ThemeProvider = ({ children, ...rest }: ThemeProviderProps) => (
	<NextJSThemeProvider {...rest}>{children}</NextJSThemeProvider>
);

export default ThemeProvider;
