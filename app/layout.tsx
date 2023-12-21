import './globals.css';
import type { Metadata } from 'next';
import { fontMono, fontSans } from '@/lib/fonts';
import { ClerkProvider } from '@clerk/nextjs';

import { cn } from '@/lib/utils';
import { siteConfig } from '@/config/site';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { ModalProvider } from '@/components/providers/modal-provider';
import { SocketProvider } from '@/components/providers/socket-provider';
import { QueryProvider } from '@/components/providers/query-provider';

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	keywords: siteConfig.keywords,
	authors: [
		{
			name: 'wael mando',
			url: 'https://twitter.com/waelmando0',
		},
	],
	creator: 'waelmando',
	icons: {
		icon: '/favicon.ico',
		shortcut: '/favicon-16x16.png',
		apple: '/apple-touch-icon.png',
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<ClerkProvider>
			<html lang='en' suppressHydrationWarning>
				<body className={cn(fontSans.variable, 'bg-white dark:bg-[#313338]')}>
					<ThemeProvider
						attribute='class'
						defaultTheme='dark'
						enableSystem={false}
					>
						<SocketProvider>
							<ModalProvider />
							<QueryProvider>{children}</QueryProvider>
						</SocketProvider>
					</ThemeProvider>
				</body>
			</html>
		</ClerkProvider>
	);
}
