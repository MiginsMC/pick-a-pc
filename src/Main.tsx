import { Switch, Route } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import Quiz from './pages/Quiz';

function Main() {
	return (
		<div>
			<Switch>
				<Route exact path="/" component={Home}></Route>
				<Route exact path="/quiz" component={Quiz}></Route>
				{/* <Route exact path="/find" component={}></Route> */}
			</Switch>
		</div>
	);
}

export default Main;
