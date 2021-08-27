import { useState } from 'react';
import COMPUTERS from '../../util/computers';

function Quiz() {
	const [place, setPlace] = useState(0);

	function handleSubmit(event: React.FormEvent) {}

	return (
		<div>
			Quiz bro <br />
			<form name="pickAPC" onSubmit={handleSubmit}>
				{}
			</form>
			<button type="button">Bad ram</button> OR{' '}
			<button type="button">Good ram</button>
		</div>
	);
}

export default Quiz;
