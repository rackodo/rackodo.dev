import PageWrapper from "@/components/PageWrapper";

import { getAllPosts } from "@/lib/posts";

import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Blog | Rackodo",
	description: "Bash's blog.",
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
		url: "https://rackodo.dev/blog",
		type: "website",
		title: "Blog | Rackodo",
		description: "Bash's blog.",
		images: "https://rackodo.dev/banner.png"
	},
	twitter: {
		card: "summary",
		title: "Blog | Rackodo",
		description: "Bash's blog.",
		images: "https://rackodo.dev/banner.png",
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
						<Link
							href={`/blog/${post.slug}`}
							key={post.slug}
							className="flex items-center justify-between"
						>
							<h2 className="text-2xl font-bold">{post.title}</h2>
							<p className="text-neutral-500">{post.date}</p>
						</Link>
					))}
			</div>
		</PageWrapper>
	);
}
