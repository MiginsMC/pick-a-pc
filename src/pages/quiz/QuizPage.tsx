import React, { FormEvent, useState } from 'react';
import QUESTIONS from '../../util/questions';
import Quiz from './Quiz';
import QuizStart from './QuizStart';

function QuizPage() {
	const [place, setPlace] = useState(0);
	const [startedQuiz, setStartedQuiz] = useState();

	function handleSubmit(event: FormEvent) {
		event.preventDefault();
		setPlace(place + 1);
	}
	return (
		<div>
			{startedQuiz ? (
				<form name="pickAPC" onSubmit={handleSubmit}>
					<Quiz place={place} />
				</form>
			) : (
				<QuizStart />
			)}
		</div>
	);
}

export default QuizPage;
