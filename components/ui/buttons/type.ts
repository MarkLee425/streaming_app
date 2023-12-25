import { ImageProps } from 'next/image';
import { LinkProps } from 'next/link';
import { ComponentProps, HTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';

export type ButtonProps = {
	imageProps?: ImageProps;
	buttonProps?: ComponentProps<'button'>;
	children?: React.ReactNode;
};

export type CustomReactIconButtonProps = Omit<ButtonProps, 'imageProps'> & {
	iconProps?: IconBaseProps;
};

export type LoginButtonProps = Omit<CustomReactIconButtonProps, 'buttonProps'> & {
	linkProps: LinkProps;
};
