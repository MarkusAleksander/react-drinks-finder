const FIREBASE_ENDPOINT = "https://react-drinks-finder-default-rtdb.europe-west1.firebasedatabase.app/";

const ENDPOINTS = {
    INGREDIENTS: {
        GET: `${FIREBASE_ENDPOINT}ingredients.json`,
        POST: `${FIREBASE_ENDPOINT}ingredients.json`,
        DELETE: `${FIREBASE_ENDPOINT}ingredients/`,
    },
    DRINKS: {
        GET: `${FIREBASE_ENDPOINT}drinks.json`,
        POST: `${FIREBASE_ENDPOINT}drinks.json`,
        DELETE: `${FIREBASE_ENDPOINT}drinks/`,
    }
}

export default ENDPOINTS;