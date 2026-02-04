import Link from "next/link";

export default function TopBar() {
	return (
		<div className="border-b-5 border-b-neutral-600 bg-neutral-800">
			<div className="mx-auto flex max-w-2xl items-baseline justify-between px-6 py-3">
				<Link href="/" className="pr-3 text-xl font-bold">
					Rackodo
				</Link>
				<div className="flex gap-5">
					<Link href="/blog">Blog</Link>
					<Link href="/portfolio">Portfolio</Link>
					<Link href="mailto:rackodo.business@gmail.com">
						Contact
					</Link>
				</div>
			</div>
		</div>
	);
}
