import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
	title: 'Leave Management System',
	description: '...',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className=''>{children}</body>
		</html>
	);
}
