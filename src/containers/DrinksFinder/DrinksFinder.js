import Auxillary from "../../hoc/Auxillary/Auxillary";

import Column from "../../components/UI/Column/Column";

import DrinkRecipes from "../../components/Drinks/DrinkRecipes";
import Ingredients from "../../components/Ingredients/IngredientsList/IngredientsList";

const DrinksFinder = () => {
    return (
        <Auxillary>
            <Column>
                <DrinkRecipes />
            </Column>
            <Column>
                <Ingredients />
            </Column>
        </Auxillary>
    )
}

export default DrinksFinder;