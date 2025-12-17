const LinkButton = ({
	href,
	children
}: {
	href: string;
	children: React.ReactNode;
}) => {
	return (
		<a
			className="bg-background2 border-background hover:bg-text hover:text-background2 duration-150ms block w-full border-5 px-[50px] py-[10px] transition-colors"
			target="_blank"
			href={href}
			rel="noreferrer"
		>
			{children}
		</a>
	);
};

export default LinkButton;
