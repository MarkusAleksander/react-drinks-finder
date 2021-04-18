import React from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";

import Layout from "./hoc/Layout/Layout";
// import DrinksFinder from "./containers/DrinksFinder/DrinksFinder";
import DrinksBuilder from "./containers/DrinksBuilder/DrinksBuilder";
import Auth from "./containers/Auth/Auth";

import IngredientContextProvider from "./context/ingredients-context";

const App = () => {

	let routes = (
		<Switch>
			<Route path="/auth" component={Auth} />
			{/* <Route path="/drinks-builder" component={DrinksBuilder} /> */}
			<Route path="/" exact component={DrinksBuilder} />
			<Redirect to="/" />
		</Switch>
	)

	// const clearError = () => {
	// 	// clear();
	// } 

	return (
		<IngredientContextProvider>
			{/* {error && <Modal onclick={() => clearError()} >{error}</Modal>} */}
			<Layout>{routes}</Layout>
		</IngredientContextProvider>

	);
}

export default withRouter(App);
