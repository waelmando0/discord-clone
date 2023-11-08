import './globals.css';
import type { Metadata } from 'next';
import { fontMono, fontSans } from '@/lib/fonts';
import { ClerkProvider } from '@clerk/nextjs';

import { cn } from '@/lib/utils';
import { siteConfig } from '@/config/site';
import { ThemeProvider } from '@/components/providers/theme-provider';

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
				<body
					className={cn(
						'min-h-screen bg-background antialiased dark:bg-[#313338]',
						fontSans.variable
					)}
				>
					<div className='relative flex min-h-screen flex-col'>
						<main className='flex-1'>
							<ThemeProvider
								attribute='class'
								defaultTheme='dark'
								enableSystem={false}
							>
								{children}
							</ThemeProvider>
						</main>
					</div>
				</body>
			</html>
		</ClerkProvider>
	);
}
