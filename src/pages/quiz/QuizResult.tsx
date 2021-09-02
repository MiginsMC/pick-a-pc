import React, { useEffect, useState } from 'react';
import { TagTypes, Computer } from '../../util/constants';
import { findMatch } from '../../util/functions';

interface QuizResultProps {
	results: TagTypes[];
}

function QuizResult({ results }: QuizResultProps) {
	const [computers, setComputers] = useState<JSX.Element[]>();
	// TODO: more appropriate name?

	useEffect(() => {
		setComputers(
			findMatch(results)?.map(e => (
				<div key={e.name}>
					<a href={e.link}>{e.name}</a>
				</div>
			))
		);
	}, [results]);

	return <div>{computers ? computers[0] : 'none found LOL'}</div>;

	// TODO: Percentage of tags that the computer matches. i.e. how well this computer fits
}

export default QuizResult;
