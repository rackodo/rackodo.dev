import Plink from "./Plink";
import Link from "next/link";

export default function EndOfPage() {
	return (
		<div className="mt-10 px-5 py-5">
			<div className="mx-auto flex w-full max-w-2xl items-center justify-center">
				<p className="text-neutral-500">
					Made for fun using{" "}
					<Plink href="https://nextjs.org">NextJS</Plink> and{" "}
					<Plink href="https://tailwindcss.com">TailwindCSS</Plink>.
				</p>
			</div>
		</div>
	);
}
