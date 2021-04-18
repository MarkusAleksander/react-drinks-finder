import React, { useContext, useEffect } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";

import Layout from "./hoc/Layout/Layout";
// import DrinksFinder from "./containers/DrinksFinder/DrinksFinder";
import DrinksBuilder from "./containers/DrinksBuilder/DrinksBuilder";
import Auth from "./containers/Auth/Auth";

import { IngredientContext } from "./context/ingredients-context";

const App = () => {

  const ingContext = useContext(IngredientContext);

  useEffect(() => {
    console.log("use effect");
    ingContext.getIngredients();
  });

  let routes = (
    <Switch>
      <Route path="/auth" component={Auth} />
      {/* <Route path="/drinks-builder" component={DrinksBuilder} /> */}
      <Route path="/" exact component={DrinksBuilder} />
      <Redirect to="/" />
    </Switch>
  )

  return (
    <Layout>{routes}</Layout>
  );
}

export default withRouter(App);
