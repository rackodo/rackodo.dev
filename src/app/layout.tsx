// app/layout.tsx
import "@/styles/globals.css";
import "@/styles/styles.css";

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
		<html lang="en">
			<head>
				<link
					href="https://iosevka-webfonts.github.io/iosevka/Iosevka.css"
					rel="stylesheet"
				/>
			</head>
			<body>{children}</body>
		</html>
	);
}
