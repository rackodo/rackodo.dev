// app/layout.tsx
import Topbar from "@/components/topbar";

import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
	title: "bash elliott",
	description: "bash elliott writes code"
};

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<>
		<Analytics />
		<html lang="en">
			<head>
				<link
					href="https://iosevka-webfonts.github.io/iosevka/Iosevka.css"
					rel="stylesheet"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
			</head>
			<body className="flex min-h-dvh flex-col">
				<Topbar />
				{children}
			</body>
		</html>
		</>
	);
}
