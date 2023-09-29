import Header from '@/components/Header';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	metadataBase: new URL('https://password-generator-k8pai.vercel.app'),
	title: 'PassHasher | k8pai',
	description:
		'A password generator tool that allows users to generate random passwords of varying strengths.',
	authors: {
		name: 'k8pai | Sudarsan K Pai',
		url: 'https://k8pai.dev',
	},
	keywords: ['password', 'generator', 'strength', 'random', 'security'],
	appLinks: {
		android: {
			package: '',
			app_name: 'passHasher',
			url: 'https://password-generator-k8pai.vercel.app',
		},
		web: {
			url: 'https://password-generator-k8pai.vercel.app',
		},
	},
	creator: 'k8pai',
	publisher: 'k8pai',
	viewport: { width: 'device-width', initialScale: 1 },
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${inter.className} min-h-screen flex flex-col`}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
