import PageWrapper from "@/components/PageWrapper";

import Link from "next/link";

export default async function NotFound() {
	return (
		<PageWrapper
			title="404"
			titleClass="text-pink-500"
			subtitle="Think you got turned around somewhere."
		>
			<Link href="/">Let's get you back on track.</Link>
		</PageWrapper>
	);
}
