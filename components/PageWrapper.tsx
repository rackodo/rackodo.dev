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
			<main className="mx-auto flex w-full max-w-2xl flex-col">
				<div className="mb-3">
					<h1 className="text-3xl font-bold">
						rkdo.
						<span className={titleClass ?? "text-current"}>
							{title.toLowerCase()}
						</span>
					</h1>
					<p>{subtitle}</p>
					<hr className="mt-3" />
				</div>
				{children}
			</main>
		</div>
	);
}
