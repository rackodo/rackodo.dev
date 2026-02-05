import PageWrapper from "@/components/PageWrapper";

import { Metadata } from "next";

export const metadata: Metadata = {
	title: "rkdo.readme",
	description:
		"Entry-level software developer with a strong interest in web development and programming."
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
