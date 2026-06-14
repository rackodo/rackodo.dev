import PageWrapper from "@/components/PageWrapper";

import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Bash Elliott | Rackodo",
	description:
		"I was given access to a computer when I was 10. Now I write code for a living.",
	keywords: [
		"programming",
		"javascript",
		"react",
		"for hire",
		"typescript",
		"bash elliott",
		"rackodo",
		"australia",
		"sydney"
	],
	openGraph: {
		url: "https://rackodo.dev",
		siteName: "Rackodo",
		type: "website",
		title: "Bash Elliott, Web Developer and Programmer",
		description:
			"I was given access to a computer when I was 10. Now I write code for a living.",
		images: "https://rackodo.dev/banner.png"
	},
	twitter: {
		card: "summary_large_image",
		title: "Bash Elliott | Rackodo",
		description:
			"I was given access to a computer when I was 10. Now I write code for a living.",
		images: "https://rackodo.dev/banner.png",
		creator: "@rackodo",
		site: "@rackodo"
	},
	alternates: { canonical: "https://rackodo.dev" },
	other: { me: "https://tilde.zone/@rackodo" }
};

export default function Home() {
	return (
		<PageWrapper
			title="readme"
			titleClass="text-red-500"
			subtitle="Hello World."
		>
			<p>
				My name is Bash. I'm an entry-level software developer based in
				Sydney, Australia focusing on web development and programming.
			</p>
			<br />
			<p>
				More information here soon! This website is in active
				development.
			</p>
		</PageWrapper>
	);
}
