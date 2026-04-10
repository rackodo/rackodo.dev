import Plink from "./Plink";

export default function EndOfPage() {
	return (
		<footer className="mt-10 px-5 py-5">
			<div className="mx-auto flex w-full max-w-2xl items-center justify-center">
				<p className="text-neutral-500">
					Made for fun using{" "}
					<Plink href="https://nextjs.org">NextJS</Plink> and{" "}
					<Plink href="https://tailwindcss.com">TailwindCSS</Plink>. Follow me on <a rel="me" href="https://mastodon.social/@rkdo">Mastodon</a>!
				</p>
			</div>
		</footer>
	);
}
