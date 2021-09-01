import React from 'react';
import { TagTypes } from '../../util/constants';

interface QuizResultProps {
	results: TagTypes[],
}

function QuizResult({ results }: QuizResultProps) {
	return <div>{results}</div>;
}

export default QuizResult;
