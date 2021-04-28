import React, { useContext, useState } from "react";

// * Components
import Input from "./../../UI/Input/Input";

// * Contexts
import { IngredientContext } from "./../../../context/ingredients-context";

const IngredientSelector = props => {
    // * selected ingredient state
    const [selectedIngredient, setSelectedIngredient] = useState("");

    // * ingredient context
    const ingredientContext = useContext(IngredientContext);

    // * handle selecting ingredient in form
    const onSelectIngredient = (e) => {
        setSelectedIngredient(e.target.value);
        props.onSelectIngredient({ ingredient_id: e.target.value });
    }

    // * remove items that shouldn't be shown
    const filteredIngredients = ingredientContext.ingredients.filter(ing => props.excludeIdList ? !props.excludeIdList.includes(ing.ingredient_id) : true);

    // * prepare ingredient select options
    const selectOptions = [
        {
            displayValue: "Select Ingredient",
            value: "",
            selected: true,
        },
        ...filteredIngredients.map((ingredient => {
            return {
                displayValue: ingredient.ingredient,
                value: ingredient.ingredient_id,
                selected: selectedIngredient === ingredient.ingredient_id
            }
        }))
    ];
    return (
        <Input
            elementType="select"
            name="ingredients"
            value={selectedIngredient}
            changed={onSelectIngredient}
            options={selectOptions}
        />
    )
}

export default IngredientSelector;