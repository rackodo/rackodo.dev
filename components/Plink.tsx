import Link from "next/link";

export default function Plink({
	href,
	children
}: {
	href: string | object;
	children: React.ReactNode;
}) {
	return (
		<Link className="underline" href={href} target="_blank">
			{children}
		</Link>
	);
}
