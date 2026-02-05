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
		<div className="flex min-h-full flex-1 px-5">
			<main className="mx-auto flex w-full max-w-2xl flex-col">
				<div className="mb-3">
					<hgroup>
						<div className="flex items-center justify-between">
							<h1 className="text-3xl font-bold">{post.title}</h1>
							<p className="text-neutral-500">{post.date}</p>
						</div>
						<h2>{post.description}</h2>
					</hgroup>
					<hr className="mt-3" />
				</div>
				<div
					dangerouslySetInnerHTML={{ __html: post.contentHtml }}
					className="prose dark:prose-invert"
				/>
			</main>
		</div>
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

	return {
		title: post.title,
		description: post.description,
		date: post.date
	};
}
