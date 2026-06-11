export default function PageWrapper({
	title,
	titleClass,
	subtitle,
	children
}: Readonly<{
	title: string;
	titleClass: string | null | undefined;
	subtitle: string;
	children: React.ReactNode;
}>) {
	return (
		<div className="flex min-h-full flex-1 px-5">
			<div className="mx-auto flex w-full max-w-2xl flex-col">
				<header className="mb-3">
					<hgroup className="flex flex-col">
						<h1 className="text-3xl font-bold">
							<span className={titleClass ?? "text-current"}>
								{title.toLowerCase()}
							</span>
							.page
						</h1>
						<p>{subtitle}</p>
					</hgroup>
					<hr className="mt-3" />
				</header>
				<main>{children}</main>
			</div>
		</div>
	);
}
