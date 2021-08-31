import React, { useState, FormEvent } from 'react';
import QUESTIONS from '../../util/questions';

interface QuizProps {
	place: number;
}

function Quiz({ place }: QuizProps) {
	const question = QUESTIONS[place]?.question;
	const help = QUESTIONS[place]?.help || undefined;
	const options = QUESTIONS[place]?.options;

	const optionsFormatted = options?.map(e => (
		<button type="submit" name={e.option}>
			{e.option}
		</button>
	));

	return (
		<div>
			<p>{question}</p>
			{help ?? ''}
			<p>{optionsFormatted}</p>
		</div>
	);
}

export default Quiz;
