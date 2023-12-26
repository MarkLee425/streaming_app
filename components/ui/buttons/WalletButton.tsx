'use client';

import { DEFAULT_REACT_ICON_SIZE, Wallet } from '../react-icons';
import { CustomReactIconButtonProps } from './type';

export const WalletButton = ({ buttonProps, iconProps, children }: CustomReactIconButtonProps) => {
	return (
		<>
			<button {...buttonProps}>
				<Wallet size={DEFAULT_REACT_ICON_SIZE} {...iconProps} />
				{children}
			</button>
		</>
	);
};
