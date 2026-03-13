import PageWrapper from "@/components/PageWrapper";
import Plink from "@/components/Plink";

import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Details - rkdo",
	description: "Programming and web development projects by Bash Elliott.",
	keywords: ["programming", "javascript", "react", "for hire", "typescript"],
	openGraph: {
		url: "https://rackodo.dev/details",
		type: "website",
		title: "Details - rkdo",
		description: "Programming and web development projects by Bash Elliott."
	},
	twitter: {
		card: "summary",
		title: "Details - rkdo",
		description:
			"Programming and web development projects by Bash Elliott.",
		creator: "@rackodo",
		site: "@rackodo"
	},
	alternates: { canonical: "https://rackodo.dev/details" }
};

export default function Details() {
	return (
		<PageWrapper
			title="details"
			titleClass="text-orange-600 dark:text-orange-500"
			subtitle="Hi Shubha."
		>
			<h1 style={{fontSize: '2rem', fontWeight: 'bold'}}>Author</h1>
			<p>Bash Elliott</p>
			<h1 style={{fontSize: '2rem', fontWeight: 'bold'}}>Resources Owned By</h1>
			<p>Bash Elliott</p>
			<h1 style={{fontSize: '2rem', fontWeight: 'bold'}}>Approved by</h1>
			<p>Bash Elliott</p>
			<h1 style={{fontSize: '2rem', fontWeight: 'bold'}}>Webmaster</h1>
			<p>Bash Elliott</p>
		</PageWrapper>
	);
}
