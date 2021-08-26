import { TagTypes } from './constants';
import COMPUTERS from './computers';

// tag input is list of tags
function findMatch(tags: TagTypes[]) {
	// Define variable to store number of Tag matches
	let matches: {
		place: number;
		matches: number;
	}[];
	for (let computer in COMPUTERS) {
		// computer represents its key within COMPUTERS
		let place = parseInt(computer); // Initially a string, convert to integer to use as key elsewhere
		for (let tag of COMPUTERS[place].tags) { // Loops through each tag of each computer
			if (tags.includes(tag))
				matches[place] = {
					place,
					matches: matches[place].matches++,
				};
		}
	}
	// Sort matches in descending order
	const sortedMatches = matches.sort((a, b) => {
		if (a.matches < b.matches) return 1; // Sort b before a as b is greater
		if (a.matches > b.matches) return -1; // Sort a before b as a is greater
		return 0; // Otherwise must be equal
	});

	return COMPUTERS[sortedMatches[0].place];
}
