import React from "react";

// * Components
import SimpleCard from "../../UI/SimpleCard/SimpleCard";
import IngredientsList from "./../../Ingredients/IngredientsList/IngredientsList";

const DrinkItem = props => {
    return (
        <SimpleCard
            headline={props.drink.title}
            description={props.drink.description}
            removeAction={props.onRemove ? () => {props.onRemove(props.drink.drink_id)} : null}   
        >
            <IngredientsList ingredients={props.drink.ingredients} />
        </SimpleCard>
    )
}

export default DrinkItem;