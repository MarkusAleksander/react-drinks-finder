import React from "react";

export const IngredientContext = React.createContext({
    ingredients: [],
    // getIngredients: () => { }
});

// const IngredientContextProvider = props => {
//     const [ingredients, setIngredients] = useState([]);

//     const getIngredientsHandler = () => {
//         console.log("Setting ingredients");
//         setIngredients({ id: "blah", ingredient: "Vodka" });
//     }

//     return (
//         <IngredientContext.Provider value={{ getIngredients: getIngredientsHandler, ingredients: ingredients }}>
//             {props.children}
//         </IngredientContext.Provider>
//     )
// }

// export default IngredientContextProvider