import React, { useContext } from "react";

import IngredientItem from "./../IngredientItem/IngredientItem";

import { IngredientContext } from "./../../../context/ingredients-context";

// const ingredientReducer = (currentIngredients, action) => {
//     switch (action.type) {
//         case "SET":
//             return action.ingredients;
//         case "ADD":
//             return [...currentIngredients, action.ingredients];
//         case "DELETE":
//             return currentIngredients.filter(ingredient => ingredient.id !== action.id);
//         default:
//             throw new Error("Should not get here");
//     }
// }

const IngredientsList = (props) => {

    // const [ingredients, dispatchIngredients] = useReducer(ingredientReducer, []);

    const ingredients = useContext(IngredientContext);

    return (
        <ul className="ingredients-list">
            {
                ingredients.ingredients && ingredients.ingredients.map((ingredient) => {
                    return (
                        <li
                            key={ingredient.id}
                        >
                            <IngredientItem ingredient={ingredient} onclick={props.onclick} />
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default IngredientsList;