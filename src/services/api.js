// ===== Development Data Set ===== //
let dbURL;

process.env.REACT_APP_LOCATION === "local"
  ? (dbURL = "http://localhost:3004")
  : (dbURL = "https://my-json-server.typicode.com/jmbodnar/recipes-db");

console.log("Using data from " + dbURL);

// ===== Get Requests ===== //

//  ----- Get All The Things ----- //
/**
 * Get all data from the database
 * @return {Array} All of the data from the recipes database
 */
export async function getAllData() {
  try {
    return await (await fetch(`${dbURL}/db`)).json();
  } catch (error) {
    console.error(error);
  }
}

/**
 * Get all recipes data from the database
 * @return {Array} All of the recipe data from the recipes database
 */
export async function getAllRecipes() {
  try {
    return await (await fetch(`${dbURL}/recipes`)).json();
  } catch (error) {
    console.error(error);
  }
}

/**
 * Get all the comments data from the database
 * @return {Array} All of the comments data from the recipes database
 */
export async function getAllComments() {
  try {
    return await (await fetch(`${dbURL}/comments`)).json();
  } catch (error) {
    console.error(error);
  }
}

/**
 * Get all the users data from the database
 * @return {Array} All of the users data from the recipes database
 */
export async function getAllUsers() {
  try {
    return await (await fetch(`${dbURL}/users`)).json();
  } catch (error) {
    console.error(error);
  }
}

/**
 * Get all the categories data from the database
 * @return {Array} All categories data from the recipes database
 */
export async function getAllCategories() {
  try {
    return await (await fetch(`${dbURL}/categories`)).json();
  } catch (error) {
    console.error(error);
  }
}

// ----- Get One of the Things ----- //

/**
 *
 * Get the data for one recipe
 * @param {String} recipeId The _id of a single recipe
 * @returns {Array} An aray with a single recipe object
 */
export async function getOneRecipe(recipeId) {
  try {
    return await (await fetch(`${dbURL}/recipes?_id=${recipeId}`)).json();
  } catch (error) {
    console.error(error);
  }
}
