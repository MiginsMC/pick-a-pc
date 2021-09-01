import React, { FormEvent, useState } from 'react';
import { TagTypes } from '../../util/constants';
import QUESTIONS from '../../util/questions';
import Quiz from './Quiz';
import QuizResult from './QuizResult';
import QuizStart from './QuizStart';

function QuizPage() {
	const [startedQuiz, setStartedQuiz] = useState();
	const [quizResults, setQuizResults] = useState<TagTypes[]>();

	function handleFinish(results: TagTypes[]) {
		setQuizResults(results);
	}

	return (
		<div>
			{startedQuiz ? (
				quizResults ? (
					<QuizResult results={quizResults} />
				) : (
					<Quiz onFinish={handleFinish} />
				)
			) : (
				<QuizStart />
			)}
		</div>
	);
}

export default QuizPage;
