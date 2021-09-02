import { TagTypes } from './constants';
import COMPUTERS from './computers';

// tag input is list of tags
export function findMatch(tags: TagTypes[]) {
	// Define variable to store number of Tag matches
	let matches: Array<{
		place: number;
		matches: number;
	}> = [];
	for (let computer in COMPUTERS) {
		// computer represents its key within COMPUTERS
		let index = parseInt(computer); // Initially a string, convert to integer to use as key elsewhere
		matches.push({
			place: index,
			matches: 0,
		});
		for (let tag of COMPUTERS[index].tags) {
			// Loops through each tag of each computer
			if (tags.includes(tag)) {
				matches[index] = {
					place: index,
					matches: matches[index].matches + 1,
				};
			}
		}
	}
	// Sort matches in descending order
	const sortedMatches = matches.sort((a, b) => {
		// TODO: Enforce required tags (laptop, desktop, etc - might have to rework tag types)
		if (a.matches < b.matches) return 1; // Sort b before a as b is greater
		if (a.matches > b.matches) return -1; // Sort a before b as a is greater
		return 0; // Otherwise must be equal
	});
	const topMatches = sortedMatches.filter(
		e => e.place === sortedMatches[0].place
	); // Top matches
	return COMPUTERS.filter(e =>
		topMatches.map(e => e.place).includes(COMPUTERS.indexOf(e))
	);
	// Map topMatches to their indexes and only return computers whose index is contains within topMatches
}
