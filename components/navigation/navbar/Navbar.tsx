import React from 'react';
import Groups from './components/groups/index';

const Navbar = () => {
	const buttonOnClickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		console.log('clicked');
	};
	return (
		<nav className="fixed w-full z-20 py-[0.405rem] flex bg-navbar-light dark:bg-navbar-dark text-primary-light dark:text-primary-dark h-fit">
			<div className="flex justify-between w-full items-center align-middle">
				<div>
					<Groups.BrowseGroup />
				</div>
				<div>
					<Groups.SearchGroup />
				</div>
				<div>
					<Groups.AccountGroup />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
