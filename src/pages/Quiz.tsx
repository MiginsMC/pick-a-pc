import React, { useState, FormEvent } from 'react';
import QUESTIONS from '../util/questions';

function Quiz() {
	const [place, setPlace] = useState(0);
	const [startedQuiz, setStartedQuiz] = useState(false);
	const question = QUESTIONS[place]?.question;
	const help = QUESTIONS[place]?.help || undefined;
	const options = QUESTIONS[place]?.options;

	const optionsFormatted = options?.map(e => (
		<button type="submit" name={e.option}>
			{e.option}
		</button>
	));

	function handleSubmit(event: FormEvent) {
		event.preventDefault();
		setPlace(place + 1);
	}

	return (
		<div>
			<p>{question}</p>
			{help ?? ''}
			<form name="pickAPC" onSubmit={handleSubmit}>
				<p>{optionsFormatted}</p>
			</form>
		</div>
	);
}

export default Quiz;
