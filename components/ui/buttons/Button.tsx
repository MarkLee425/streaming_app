'use client';

import Image from 'next/image';
import React from 'react';
import { ButtonProps } from './type';

const Button = ({ imageProps, buttonProps, children }: ButtonProps) => {
	return (
		<>
			<button {...buttonProps}>
				{children}
				{imageProps && <Image {...imageProps} alt="image" />}
			</button>
		</>
	);
};

export default Button;
