import React, { useEffect, useState } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";

import Layout from "./hoc/Layout/Layout";
// import DrinksFinder from "./containers/DrinksFinder/DrinksFinder";
import DrinksBuilder from "./containers/DrinksBuilder/DrinksBuilder";
import Auth from "./containers/Auth/Auth";

import IngredientContextProvider, { IngredientContext } from "./context/ingredients-context";

// import useHttp from "./hooks/http";

import Modal from "./components/UI/Modal/Modal";

// import ENDPOINTS from "./config/urls";

const App = () => {

	// const [ingredients, setIngredient] = useState([]);

	// const {sendRequest, clear, isLoading, error, responseData } = useHttp();

	// useEffect(() => {
	// 	sendRequest(ENDPOINTS.INGREDIENTS.GET, "GET", null, "GET_INGREDIENTS");
	// }, [sendRequest]);

	// useEffect(() => {
	// 	const ingredients = [];

	// 	for(let ingredient in responseData) {
	// 		ingredients.push({
	// 			id: ingredient,
	// 			...responseData[ingredient]
	// 		})
	// 	}

	// 	console.log(ingredients);

	// 	setIngredient(() => ingredients);
	// }, [responseData]);

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
