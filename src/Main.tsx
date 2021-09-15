import { Switch, Route } from 'react-router-dom';
import React from 'react';
import Home from './pages/home/Home';
import QuizPage from './pages/quiz/QuizPage';
import Find from './pages/find/Find';
import Faq from './pages/faq/Faq';

function Main() {
	return (
		<div>
			<Switch>
				<Route exact path="/" component={Home}></Route>
				<Route exact path="/quiz" component={QuizPage}></Route>
				<Route exact path="/find" component={Find}></Route>
				<Route exact path="/faq" component={Faq}></Route>
			</Switch>
		</div>
	);
}

export default Main;
