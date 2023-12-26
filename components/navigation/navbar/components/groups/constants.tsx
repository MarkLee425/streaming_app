import { ChannelButton } from '@/components/ui/buttons/ChannelButton';
import { DashboardButton } from '@/components/ui/buttons/DashboardButton';
import { LanguageButton } from '@/components/ui/buttons/LanguageButton';
import { LoginButton } from '@/components/ui/buttons/LoginButton';
import { LogoutButton } from '@/components/ui/buttons/LogoutButton';
import { PrivacyButton } from '@/components/ui/buttons/PrivacyButton';
import { ProducerButton } from '@/components/ui/buttons/ProducerButton';
import { SafetyButton } from '@/components/ui/buttons/Safety';
import { SettingButton } from '@/components/ui/buttons/SettingButton';
import { SubscriptionButton } from '@/components/ui/buttons/SubscriptionButton';
import { ThemeButton } from '@/components/ui/buttons/ThemeButton';
import { WalletButton } from '@/components/ui/buttons/WalletButton';
import { UserButton } from '@clerk/nextjs';

export const POPUP_LIST_PUBLIC_ITEMS = [
	<LanguageButton
		key={'language'}
		buttonProps={{
			className:
				'flex items-center align-middle justify-left w-full pr-10 rounded-md pl-2 hover:bg-button-hover-secondary-light dark:hover:bg-button-hover-secondary-dark mt-1 mb-3 py-1',
		}}
	>
		<p className="ml-2">Language</p>
	</LanguageButton>,
	<ThemeButton
		key={'theme'}
		buttonProps={{
			className:
				'flex items-center align-middle justify-left w-full pr-10 rounded-md pl-2 hover:bg-button-hover-secondary-light dark:hover:bg-button-hover-secondary-dark mt-1 mb-3 py-1',
		}}
	>
		<p className="ml-2">Switch Theme</p>
	</ThemeButton>,
	<LoginButton
		key={'login'}
		linkProps={{
			href: '/sign-in',
		}}
	>
		<p className="ml-2">Login</p>
	</LoginButton>,
];
export const POPUP_LIST_ADMIN_ITEMS = [
	[<UserButton key={'profile'} />],
	[
		<ChannelButton
			key={'channel'}
			buttonProps={{
				className:
					'flex items-center align-middle justify-left w-full pr-10 rounded-md pl-2 hover:bg-button-hover-secondary-light dark:hover:bg-button-hover-secondary-dark py-1',
			}}
		>
			<p className="ml-2">Channel</p>
		</ChannelButton>,
		<ProducerButton
			key={'producer'}
			buttonProps={{
				className:
					'flex items-center align-middle justify-left w-full pr-10 rounded-md pl-2 hover:bg-button-hover-secondary-light dark:hover:bg-button-hover-secondary-dark py-1',
			}}
		>
			<p className="ml-2">Video Producer</p>
		</ProducerButton>,
		<DashboardButton
			key={'dashboard'}
			buttonProps={{
				className:
					'flex items-center align-middle justify-left w-full pr-10 rounded-md pl-2 hover:bg-button-hover-secondary-light dark:hover:bg-button-hover-secondary-dark py-1',
			}}
		>
			<p className="ml-2">Creater Dashboard</p>
		</DashboardButton>,
		<PrivacyButton
			key={'privacy'}
			buttonProps={{
				className:
					'flex items-center align-middle justify-left w-full pr-10 rounded-md pl-2 hover:bg-button-hover-secondary-light dark:hover:bg-button-hover-secondary-dark py-1',
			}}
		>
			<p className="ml-2">Privacy Center</p>
		</PrivacyButton>,
		<SafetyButton
			key={'safety'}
			buttonProps={{
				className:
					'flex items-center align-middle justify-left w-full pr-10 rounded-md pl-2 hover:bg-button-hover-secondary-light dark:hover:bg-button-hover-secondary-dark py-1',
			}}
		>
			<p className="ml-2">Safety</p>
		</SafetyButton>,
	],
	[
		<SubscriptionButton
			key={'subscription'}
			buttonProps={{
				className:
					'flex items-center align-middle justify-left w-full pr-10 rounded-md pl-2 hover:bg-button-hover-secondary-light dark:hover:bg-button-hover-secondary-dark py-1',
			}}
		>
			<p className="ml-2">Subscription</p>
		</SubscriptionButton>,
		<WalletButton
			key={'wallet'}
			buttonProps={{
				className:
					'flex items-center align-middle justify-left w-full pr-10 rounded-md pl-2 hover:bg-button-hover-secondary-light dark:hover:bg-button-hover-secondary-dark py-1',
			}}
		>
			<p className="ml-2">Wallet</p>
		</WalletButton>,
	],
	[
		<SettingButton
			key={'setting'}
			buttonProps={{
				className:
					'flex items-center align-middle justify-left w-full pr-10 rounded-md pl-2 hover:bg-button-hover-secondary-light dark:hover:bg-button-hover-secondary-dark py-1',
			}}
		>
			<p className="ml-2">Setting</p>
		</SettingButton>,
		<LanguageButton
			key={'language'}
			buttonProps={{
				className:
					'flex items-center align-middle justify-left w-full pr-10 rounded-md pl-2 hover:bg-button-hover-secondary-light dark:hover:bg-button-hover-secondary-dark py-1',
			}}
		>
			<p className="ml-2">Language</p>
		</LanguageButton>,
		<ThemeButton
			key={'theme'}
			buttonProps={{
				className:
					'flex items-center align-middle justify-left w-full pr-10 rounded-md pl-2 hover:bg-button-hover-secondary-light dark:hover:bg-button-hover-secondary-dark py-1',
			}}
		>
			<p className="ml-2">Switch Theme</p>
		</ThemeButton>,
	],
	[
		<LogoutButton key={'logout'}>
			<p className="ml-2">Logout</p>
		</LogoutButton>,
	],
];
