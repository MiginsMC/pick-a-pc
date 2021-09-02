import { Switch, Route } from 'react-router-dom';
import React from 'react';
import Home from './pages/home/Home';
import QuizPage from './pages/quiz/QuizPage';

function Main() {
	return (
		<div>
			<Switch>
				<Route exact path="/" component={Home}></Route>
				<Route exact path="/quiz" component={QuizPage}></Route>
				{/* <Route exact path="/find" component={}></Route> */}
			</Switch>
		</div>
	);
}

export default Main;
