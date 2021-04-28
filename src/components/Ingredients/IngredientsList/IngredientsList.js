import React, { useContext } from "react";

// * Components
import IngredientItem from "./../IngredientItem/IngredientItem";

// * UI Components
import Typography from "@material-ui/core/Typography";
import List from '@material-ui/core/List';


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
                        <List className="ingredients-list">
                            {props.ingredients && props.ingredients.map((ingredient_data) => {
                                // * loop over each ingredient and pass down the ingredient data
                                return (
                                    <IngredientItem
                                        onRemove={props.onRemove}
                                        key={ingredient_data.ingredient_id}
                                        ingredient={ingredient_data}
                                    ></IngredientItem>
                                )
                            })}
                        </List>
                    </>
            }
        </>
    )
}

export default IngredientsList;