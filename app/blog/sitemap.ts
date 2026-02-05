import { getAllPosts } from "@/lib/posts";

import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	// Google's limit is 50,000 URLs per sitemap
	const posts = await getAllPosts();

	const entries: MetadataRoute.Sitemap = posts.map((post: any) => ({
		url: `https://rackodo.dev/blog/${post.slug}`,
		lastModified: new Date(post.date)
	}));

	return [...entries];
}

export const revalidate = 86400;
