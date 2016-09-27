import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import BudgetsContainer from './containers/BudgetsContainer';
import About from './components/About';
import BudgetDetailContainer from './containers/BudgetDetailContainer';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={BudgetsContainer} />
		<Route path="/about" component={About} />
		<Route path="/:index" component={BudgetDetailContainer} />
	</Route>
);
