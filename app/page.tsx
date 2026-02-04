import Link from "next/link";

export default function Home() {
	return (
		<main className="mx-auto max-w-2xl p-6">
			<h1 className="mb-6 text-3xl font-bold">Rackodo</h1>

			<p>I'm a bash</p>
			<Link href="/blog">Cast my spells.</Link>
		</main>
	);
}
