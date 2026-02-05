import PageWrapper from "@/components/PageWrapper";

import { getAllPosts } from "@/lib/posts";

import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "rkdo.blog",
	description: "Bash Elliott's Blog."
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
