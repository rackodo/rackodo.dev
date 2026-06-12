import type { Metadata } from "next";
import { Quantico } from "next/font/google";

import "./globals.css";

import EndOfPage from "@/components/EndOfPage";
import TopBar from "@/components/TopBar";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const quantico = Quantico({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Bash Elliott | Rackodo",
	description:
		"I was given access to a computer when I was 10. Now I write code for a living."
};

export default function RootLayout({
	children
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en">
			<head>
				<meta name="apple-mobile-web-app-title" content="Rackodo" />
			</head>
			<body
				className={`${quantico.className} flex min-h-screen flex-col antialiased`}
			>
				<TopBar />
				{children}
				<EndOfPage />
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	);
}
