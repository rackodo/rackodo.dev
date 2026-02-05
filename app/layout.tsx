import type { Metadata } from "next";
import { Quantico } from "next/font/google";

import "./globals.css";

import EndOfPage from "@/components/EndOfPage";
import TopBar from "@/components/TopBar";

import { Analytics } from "@vercel/analytics/next";

const quantico = Quantico({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Bash Elliott",
	description:
		"Entry-level software developer with a strong interest in web development and programming."
};

export default function RootLayout({
	children
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en">
			<body className={`${quantico.className} antialiased`}>
				<div className="flex min-h-screen flex-col">
					<TopBar />
					{children}
					<EndOfPage />
					<Analytics />
				</div>
			</body>
		</html>
	);
}
