import React, { useEffect, useState } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";

import Layout from "./hoc/Layout/Layout";
// import DrinksFinder from "./containers/DrinksFinder/DrinksFinder";
import DrinksBuilder from "./containers/DrinksBuilder/DrinksBuilder";
import Auth from "./containers/Auth/Auth";

import { IngredientContext } from "./context/ingredients-context";

import useHttp from "./hooks/http";

import URL_CONFIG from "./config/urls";

const App = () => {

  const [ingredients, setIngredient] = useState([]);

  const {sendRequest, clear, isLoading, error, responseData } = useHttp();

  useEffect(() => {
    console.log("use effect");
    sendRequest(URL_CONFIG.INGREDIENTS.GET, "GET", null, "GET_INGREDIENTS");
  }, [sendRequest]);

  useEffect(() => {
    console.log("setting data");

    const ingredients = [];

    for(let ingredient in responseData) {
      ingredients.push({
        id: ingredient,
        ...responseData[ingredient]
      }
      )
    }

    console.log(ingredients);

    setIngredient(() => ingredients);
  }, [responseData]);

  let routes = (
    <Switch>
      <Route path="/auth" component={Auth} />
      {/* <Route path="/drinks-builder" component={DrinksBuilder} /> */}
      <Route path="/" exact component={DrinksBuilder} />
      <Redirect to="/" />
    </Switch>
  )

  return (
    <IngredientContext.Provider value={{ingredients: ingredients}}>
      <Layout>{routes}</Layout>
    </IngredientContext.Provider>
  );
}

export default withRouter(App);
