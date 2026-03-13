import Link from "next/link";

export default function TopBar() {
	return (
		<nav className="sticky top-0 mb-5 flex border-b-5 bg-neutral-100 px-5 py-4 text-black dark:bg-neutral-700 dark:text-white">
			<div className="mx-auto flex w-full max-w-2xl items-center justify-between">
				<Link href="/" className="text-2xl font-bold">
					rkdo
				</Link>
				<div className="flex gap-4">
					<Link href="/portfolio">Portfolio</Link>
					<Link href="/blog">Blog</Link>
					<Link href="mailto:rackodo.business@gmail.com">
						Contact
					</Link>
				</div>
			</div>
		</nav>
	);
}
