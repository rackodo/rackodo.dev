import PageWrapper from "@/components/PageWrapper";
import Plink from "@/components/Plink";

import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Portfolio and Projects - rkdo",
	description: "Programming and web development projects by Bash Elliott.",
	keywords: ["programming", "javascript", "react", "for hire", "typescript"],
	openGraph: {
		url: "https://rackodo.dev/portfolio",
		type: "website",
		title: "Portfolio and Projects - rkdo",
		description: "Programming and web development projects by Bash Elliott."
	},
	twitter: {
		card: "summary",
		title: "Portfolio and Projects - rkdo",
		description:
			"Programming and web development projects by Bash Elliott.",
		creator: "@rackodo",
		site: "@rackodo"
	},
	alternates: { canonical: "https://rackodo.dev/portfolio" }
};

export default function Portfolio() {
	return (
		<PageWrapper
			title="portfolio"
			titleClass="text-green-600 dark:text-green-500"
			subtitle="What I've worked on."
		>
			<p>
				Hey! This page isn't quite ready yet. If you're interested in
				what projects I've had, you can check out my{" "}
				<Plink href="https://github.com/rackodo">GitHub</Plink>{" "}
				directly.
			</p>
		</PageWrapper>
	);
}
