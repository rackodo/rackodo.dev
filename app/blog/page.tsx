import PageWrapper from "@/components/PageWrapper";

import { getAllPosts } from "@/lib/posts";

import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Personal Blog - rkdo",
	description: "Personal blog written and maintained by Bash Elliott.",
	keywords: ["programming", "javascript", "react", "for hire", "typescript"],
	openGraph: {
		url: "https://rackodo.dev/blog",
		type: "website",
		title: "Personal Blog - rkdo",
		description: "Personal blog written and maintained by Bash Elliott."
	},
	twitter: {
		card: "summary",
		title: "Personal Blog - rkdo",
		description: "Personal blog written and maintained by Bash Elliott.",
		creator: "@rackodo",
		site: "@rackodo"
	},
	alternates: { canonical: "https://rackodo.dev/blog" }
};

export default function Blog() {
	const posts = getAllPosts();

	return (
		<PageWrapper
			title="Blog"
			titleClass="text-blue-500"
			subtitle="The Chronicles and Musings of Bash"
		>
			<div className="flex flex-col gap-5">
				{posts
					.sort((post1: any, post2: any) =>
						post2.date < post1.date ? -1 : 1
					)
					.map((post: any) => (
						<Link href={`/blog/${post.slug}`} key={post.slug}>
							<div className="flex items-center justify-between">
								<h2 className="text-2xl font-bold">
									{post.title}
								</h2>
								<p className="text-neutral-500">{post.date}</p>
							</div>
							<p>{post.description}</p>
						</Link>
					))}
			</div>
		</PageWrapper>
	);
}
