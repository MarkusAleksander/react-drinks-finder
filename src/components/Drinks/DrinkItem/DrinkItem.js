import React from "react";

// * Components
import Card from "./../../UI/Card/Card";
import IngredientsList from "./../../Ingredients/IngredientsList/IngredientsList";

const DrinkItem = props => {
    return (
        <Card>
            <div className="drink-recipe-item">
                <p>{props.drink.title}</p>
            </div>
            <div className="drink-recipe-ingredients">
                <IngredientsList ingredients={props.drink.ingredients} />
            </div>
            <div className="drink-recipe-description">
                <p>{props.drink.description}</p>
            </div>
            {
                props.onclick ? <div><span onClick={() => { props.onclick(props.drink.drink_id) }}>{props.onclickText ? props.onclickText : null}</span></div> : null
            }
        </Card>
    )
}

export default DrinkItem;