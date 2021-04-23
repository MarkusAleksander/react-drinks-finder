import React, { useContext } from "react";

// * Components
import IngredientItem from "./../IngredientItem/IngredientItem";

// * UI Components
import Typography from "@material-ui/core/Typography";

// * Contexts
import { IngredientContext } from "./../../../context/ingredients-context";

const IngredientsList = props => {

    const ingredientsContext = useContext(IngredientContext);

    return (
        <>
            {
                ingredientsContext.isLoading && (!props.ingredients || !props.ingredients.length)
                    ? <Typography variant={"body1"}>Loading Ingredients...</Typography>
                    : <>
                        {ingredientsContext.isLoading && <Typography variant={"body1"}>Updating Ingredients...</Typography>}
                        <ul className="ingredients-list">
                            {props.ingredients && props.ingredients.map((ingredient_data) => {
                                // * loop over each ingredient and pass down the ingredient data
                                return (
                                    <li
                                        key={ingredient_data.ingredient_id}
                                    >
                                        <IngredientItem
                                            ingredient={ingredient_data}
                                            onclick={props.onclick}
                                            onclickText={props.onclickText}
                                        />
                                    </li>
                                )
                            })}
                        </ul>
                    </>
            }
        </>
    )
}

export default IngredientsList;