'use client';

import styled from '@emotion/styled';
import { ClickAwayListener } from '@mui/base';
import React from 'react';
import { Unstable_Popup as BasePopup } from '@mui/base/Unstable_Popup';

type PopupProps = {
	anchor: null | HTMLElement;
	clickAwayHandler: (event: MouseEvent | TouchEvent) => void;
	children: React.ReactNode;
};

// Tailwind will handle everything
const PopupBody = styled('div')(() => '');

const Popup = ({ anchor, clickAwayHandler, children }: PopupProps) => {
	const open = Boolean(anchor);
	const id = open ? 'simple-popup' : undefined;
	return (
		<>
			<ClickAwayListener onClickAway={clickAwayHandler}>
				<BasePopup
					id={id}
					open={open}
					anchor={anchor}
					disableBackdropClick
					className="flex z-30 pr-3"
				>
					<PopupBody className="flex z-30 dark:bg-navbar-dark rounded-md shadow-md shadow-black">
						{children}
					</PopupBody>
				</BasePopup>
			</ClickAwayListener>
		</>
	);
};

export default Popup;
