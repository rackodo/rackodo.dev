import PageWrapper from "@/components/PageWrapper";
import Plink from "@/components/Plink";

import { Metadata } from "next";

export const metadata: Metadata = {
	title: "rkdo.blog",
	description: "Bash Elliott's Portfolio."
};

export default function Portfolio() {
	return (
		<PageWrapper
			title="github"
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
