// app/blog/[slug]/page.tsx
import { getAllPosts, getPostBySlug } from "@/lib/posts";

import { notFound } from "next/navigation";

export async function generateStaticParams() {
	const posts = getAllPosts();
	return posts.map((post: any) => ({ slug: post.slug }));
}

export default async function BlogPost({
	params
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	const post = await getPostBySlug(slug);

	if (!post) notFound();

	return (
		<main className="mx-auto max-w-2xl p-6">
			<div className="mb-5 flex flex-row items-center justify-between">
				<h1 className="text-3xl font-bold">{post.title}</h1>
				<p className="inline text-gray-500">{post.date}</p>
			</div>
			<div
				dangerouslySetInnerHTML={{ __html: post.contentHtml }}
				className="prose prose-invert"
			/>
		</main>
	);
}

export async function generateMetadata({
	params
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;

	if (!slug) {
		notFound();
	}

	const post = await getPostBySlug(slug);

	if (!post) return { title: "Post Not Found" };

	return { title: post.title, description: post.description };
}
