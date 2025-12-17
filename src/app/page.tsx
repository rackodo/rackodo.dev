import Hero from "@/components/hero";
import LinkButton from "@/components/linkbutton";

// app/page.tsx
export default function Home() {
	return (
		<Hero>
			<div className="flex w-full flex-[100%] flex-col items-start justify-end lg:justify-center">
				<h1 className="text-4xl">
					<span className="inline-block font-bold before:relative before:top-[5px] before:left-[60px] before:block before:text-[0.4em] before:font-normal before:content-['(rackodo)']">
						bash elliott
					</span>{" "}
					writes code.
				</h1>
				<p className="text-xl">
					sometimes it even works on the first try.
				</p>
			</div>

			<div className="flex w-full flex-[100%] flex-col items-center justify-start text-center text-xl lg:justify-center">
				<LinkButton href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
					say hello
				</LinkButton>
			</div>
		</Hero>
	);
}
