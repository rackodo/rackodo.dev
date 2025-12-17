// app/page.tsx
export default function Home() {
	return (
		<>
			<nav>
				<div className="left">
					<a target="_blank" href="/" rel="noreferrer">
						rkdo
					</a>
				</div>
				<div className="right">
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

			{/* custom element is fine in React */}
			<hero>
				<div className="hello">
					<h1>
						<b className="name">bash elliott</b> writes code.
					</h1>
					<p>sometimes it even works on the first try.</p>
				</div>

				<div className="bigContainer">
					<a
						className="bigButton"
						target="_blank"
						href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
						rel="noreferrer"
					>
						say hello
					</a>
				</div>
			</hero>
		</>
	);
}
