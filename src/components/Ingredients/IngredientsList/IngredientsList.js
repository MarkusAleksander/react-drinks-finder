import React from "react";

import IngredientItem from "./../IngredientItem/IngredientItem";

import Button from "./../../UI/Button/Button";

const IngredientsList = (props) => {

    return (
        <>
            <ul className="ingredients-list">
                {props.ingredients && props.ingredients.map((ingredient) => {
                    return (
                        <li
                            key={ingredient.id}
                        >
                            <IngredientItem ingredient={ingredient} onclick={props.onclick} />
                            <Button onclick={() => props.removeIngredient(ingredient.id)}>Remove</Button>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default IngredientsList;