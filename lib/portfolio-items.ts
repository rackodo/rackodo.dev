import fs from "fs";
import path from "path";

const portfolioPath = path.join(process.cwd(), "content/portfolio.json")

export function getPortfolioItems() {
	const portfolioJson = fs.readFileSync(portfolioPath, "utf8");

	return JSON.parse(portfolioJson);
}