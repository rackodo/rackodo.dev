// app/blog/page.tsx
import { getAllPosts } from "@/lib/posts";

import Link from "next/link";

export default function BlogPage() {
	const posts = getAllPosts();

	return (
		<main className="mx-auto max-w-2xl p-6">
			<h1 className="mb-6 text-3xl font-bold">Blog</h1>

			<ul className="space-y-4">
				{posts
					.sort((post1: any, post2: any) =>
						post2.date > post1.date ? 1 : -1
					)
					.map((post: any) => (
						<li key={post.slug}>
							<Link href={`/blog/${post.slug}`}>
								<div className="flex flex-row items-center justify-between">
									<div>
										<h2 className="text-xl font-semibold">
											{post.title}
										</h2>
										<p className="text-gray-500">
											{post.description}
										</p>
									</div>
									<p className="inline text-gray-500">
										{post.date}
									</p>
								</div>
							</Link>
						</li>
					))}
			</ul>
		</main>
	);
}
