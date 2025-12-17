const Hero = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="animate-pan flex flex-[100%] flex-col items-center justify-center gap-5 bg-(image:--bgPattern) bg-size-[200%_200%] p-[20px] lg:flex-row lg:gap-10 lg:p-[200px]">
			{children}
		</div>
	);
};

export default Hero;
