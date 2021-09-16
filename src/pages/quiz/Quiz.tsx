import React, { useState, MouseEvent, useEffect } from 'react';
import { TagTypes } from '../../util/constants';
import QUESTIONS from '../../util/questions';
import '../../styles/quiz.css';

interface QuizProps {
	onFinish?: (results: TagTypes[]) => void;
}

function Quiz({ onFinish = () => {} }: QuizProps) {
	const [place, setPlace] = useState(0);
	const question = QUESTIONS[place]?.question;
	const help = QUESTIONS[place]?.help || undefined;
	const options = QUESTIONS[place]?.options;

	const [quizResults, setQuizResults] = useState<TagTypes[]>([]);
	const [ready, setReady] = useState<boolean>(false);
	const [canDisplayNext, setCanDisplayNext] = useState<boolean>();

	const optionsFormatted = options?.map(e => (
		<button
			type="button"
			name={options.indexOf(e).toString() ?? '-1'}
			onClick={handleClick}
			key={options.indexOf(e).toString()}
		>
			{e.option}
		</button>
	));

	function handleClick(event: MouseEvent) {
		event.preventDefault();
		const tag = options[parseInt((event.target as HTMLButtonElement).name)].tag;
		if (tag !== undefined) setQuizResults(results => [...results, tag]); // Because 0 is apparently falsy... 
		// place starts at 0 so must add 1
		if (place + 1 < QUESTIONS.length) {
			setReady(true);
		} else {
			setPlace(-1);
		}
	}

	useEffect(() => {
		if (place === -1) {
			onFinish(quizResults);
		}
	}, [quizResults, place, onFinish]);

	useEffect(() => { // Because react :/
		if (ready === true) {
			const nextPlace = (p: number): number => {
				const canDisplay = QUESTIONS[p + 1]?.canDisplay?.(quizResults);
				return (canDisplay === undefined || canDisplay === true) ? p + 1 : nextPlace(p + 1);
				
			};
			setPlace(nextPlace(place)); // yay recursion
		}
		return () => {
			setReady(false);
		};
	}, [ready, quizResults, place]);

	return (
		<div className="quiz">
			<div className="question">
				{question}{' '}
				{help ? (
					<span className="mark">
						🛈<span className="help">{help}</span>
					</span>
				) : (
					''
				)}
			</div>

			<br />
			<div className="options">{optionsFormatted}</div>
		</div>
	);
}

export default Quiz;
