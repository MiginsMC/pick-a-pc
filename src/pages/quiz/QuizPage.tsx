import React, { useState } from 'react';
import { Tags, TagTypes } from '../../util/constants';
import Quiz from './Quiz';
import QuizResult from './QuizResult';
import QuizStart from './QuizStart';

function QuizPage() {
	const [startedQuiz, setStartedQuiz] = useState(true);
	// TODO: Start page
	const [quizResults, setQuizResults] = useState<TagTypes[]>();

	return (
		<div>
			{startedQuiz ? (
				quizResults ? (
					<QuizResult results={quizResults} />
				) : (
					<Quiz onFinish={results => setQuizResults(results)} />
				)
			) : (
				<QuizStart />
			)}
		</div>
	);
}

export default QuizPage;
