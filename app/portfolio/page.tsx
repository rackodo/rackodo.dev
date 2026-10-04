import PageWrapper from "@/components/PageWrapper";
import Plink from "@/components/Plink";
import { getPortfolioItems } from "@/lib/portfolio-items";

import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
	title: "Portfolio and Projects | Rackodo",
	description: "Programming and web development projects.",
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
		url: "https://rackodo.dev/portfolio",
		siteName: "Rackodo",
		type: "website",
		title: "Portfolio and Projects",
		description: "Programming and web development projects.",
		images: "https://rackodo.dev/banner.png"
	},
	twitter: {
		card: "summary_large_image",
		title: "Portfolio and Projects | Rackodo",
		description: "Programming and web development projects.",
		images: "https://rackodo.dev/banner.png",
		creator: "@rackodo",
		site: "@rackodo"
	},
	alternates: { canonical: "https://rackodo.dev/portfolio" }
};

export default function Portfolio() {
	const items = getPortfolioItems();

	return (
		<PageWrapper
			title="portfolio"
			titleClass="text-green-600 dark:text-green-500"
			subtitle="What I've worked on."
		>
			<div className="grid gap-2 sm:grid-cols-2 grid-cols-1">
				{items.map((item : Object) => {
					return (
						<div key={item.name} className="bg-gray-200 dark:bg-gray-800">
							<Image width={600} height={315} alt="" src={item.image} />
							<div className="p-2">
								<p className="font-bold text-xl">{item.name}</p>
								<p>{item.description}</p>
							</div>
							<div className="grid gap-2 grid-cols-2">
								<Link className="p-2 bg-gray-300 dark:bg-gray-700" href={item.url} target="_blank">Visit Site</Link>
								<Link className="p-2 bg-gray-300 dark:bg-gray-700" href={item.repo} target="_blank">View Source Code</Link>
							</div>
						</div>
					)
				})}
			</div>
		</PageWrapper>
	);
}
