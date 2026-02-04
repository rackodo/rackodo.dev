// lib/posts.ts
import fs from "fs";
import path from "path";

import matter from "gray-matter";
import rehypeHighlight from "rehype-highlight";
import rehypeStringify from "rehype-stringify";
import { remark } from "remark";
import remarkRehype from "remark-rehype";

const postsDirectory = path.join(process.cwd(), "content/blog");

export function getAllPosts() {
	const files = fs.readdirSync(postsDirectory);

	return files.map((file) => {
		const slug = file.replace(/\.md$/, "");
		const fullPath = path.join(postsDirectory, file);
		const fileContents = fs.readFileSync(fullPath, "utf8");

		const { data } = matter(fileContents);

		return { slug, ...data };
	});
}

export async function getPostBySlug(slug: string) {
	const fullPath = path.join(postsDirectory, `${slug}.md`);
	const fileContents = fs.readFileSync(fullPath, "utf8");

	const { data, content } = matter(fileContents);

	const processedContent = await remark()
		.use(remarkRehype)
		.use(rehypeHighlight)
		.use(rehypeStringify)
		.process(content);

	return {
		slug,
		contentHtml: processedContent.toString(),
		...(data as { title: string; date: string; description: string })
	};
}
