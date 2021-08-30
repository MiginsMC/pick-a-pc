import React, { useState, FormEvent } from 'react';
import QUESTIONS from '../../util/questions';

function Quiz() {
	const [place, setPlace] = useState(0);
	const [startedQuiz, setStartedQuiz] = useState(false);
	const question = QUESTIONS[place].question;
	const help = QUESTIONS[place].help || undefined;
	const options = QUESTIONS[place].options;

	const optionsFormatted = options.map(e => (
		<p>
			<button type="submit" name={e.option}>
				{e.option}
			</button>
		</p>
	));

	function handleSubmit(event: FormEvent) {}

	return (
		<div>
			Quiz bro <br />
			<p>{question}</p>
			<form name="pickAPC" onSubmit={handleSubmit}>
				{options}
			</form>
			<button type="button">Bad ram</button> OR{' '}
			<button type="button">Good ram</button>
		</div>
	);
}

export default Quiz;
