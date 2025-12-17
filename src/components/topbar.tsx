const Topbar = () => {
	return (
		<nav className="bg-background2 fixed top-0 left-0 flex w-screen justify-between px-4 py-2 text-2xl lg:px-50">
			<div>
				<a target="_blank" href="/" rel="noreferrer">
					rkdo
				</a>
			</div>
			<div className="flex gap-5">
				<a
					target="_blank"
					href="https://github.com/rackodo"
					rel="noreferrer"
				>
					gh
				</a>
				<a
					target="_blank"
					href="mailto:rackodo.business@gmail.com"
					rel="noreferrer"
				>
					mail
				</a>
			</div>
		</nav>
	);
};

export default Topbar;
