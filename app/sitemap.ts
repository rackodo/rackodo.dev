import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: 'https://rackodo.dev',
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 1,
		},
		{
			url: 'https://rackodo.dev/portfolio',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8
		},
		{
			url: 'https://rackodo.dev/blog',
			lastModified: new Date(),
			changeFrequency: 'daily',
			priority: 0.7
		}
	]
}