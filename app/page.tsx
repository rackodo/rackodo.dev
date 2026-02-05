import PageWrapper from "@/components/PageWrapper";

import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Web Development and Programming - rkdo",
	description: "Bash Elliott's personal website, portfolio and blog.",
	keywords: ["programming", "javascript", "react", "for hire", "typescript"],
	openGraph: {
		url: "https://rackodo.dev",
		type: "website",
		title: "Web Development and Programming - rkdo",
		description: "Bash Elliott's personal website, portfolio and blog."
	},
	twitter: {
		card: "summary",
		title: "Web Development and Programming - rkdo",
		description: "Bash Elliott's personal website, portfolio and blog.",
		creator: "@rackodo",
		site: "@rackodo"
	},
	alternates: { canonical: "https://rackodo.dev" }
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
