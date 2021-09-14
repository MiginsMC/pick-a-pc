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
		setQuizResults(results => [
			...results,
			options[parseInt((event.target as HTMLButtonElement).name)].tag,
		]);
		// place starts at 0 so must add 1
		if (place + 1 < QUESTIONS.length) {
			setPlace(place + 1);
		} else {
			setPlace(-1);
		}
	}

	useEffect(() => {
		if (place === -1) {
			onFinish(quizResults);
		}
	}, [quizResults, place, onFinish]);

	return (
		<div className="quiz">
			<div className="question">{question}</div>
			{help ? <div className="help">{help}</div> : ''}
			<br />
			<div className="options">{optionsFormatted}</div>
		</div>
	);
}

export default Quiz;
