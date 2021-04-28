import React, { useContext } from "react";

// * UI Components
import Typography from "@material-ui/core/Typography";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon';

import DeleteIcon from '@material-ui/icons/Delete';

// * Contexts
import { IngredientContext } from "./../../../context/ingredients-context";


const IngredientItem = props => {
    const ingredientContext = useContext(IngredientContext);

    // * determine ingredient name from passed ingredient id
    const ing_data = ingredientContext.ingredients.find(ing => ing.ingredient_id === props.ingredient.ingredient_id);

    return (
        <>
            {
                // * if no data found, render nothing
                ing_data ?
                    <>
                        <ListItem
                            button
                            onClick={() => props.onRemove(props.ingredient.ingredient_id)}
                            key={props.ingredient.ingredient_id}
                        >
                            <ListItemIcon>
                                <DeleteIcon />
                            </ListItemIcon>
                                <ListItemText primary={(props.ingredient.quantity && props.ingredient.measurement ?
                                    `${props.ingredient.quantity}${props.ingredient.measurement} ` : "").concat(ing_data.ingredient)}
                                />
                            </ListItem>
                    </>
                    : <Typography variant={"body1"}>Ingredient not found!</Typography>
            }
        </>
    )
}

export default IngredientItem;