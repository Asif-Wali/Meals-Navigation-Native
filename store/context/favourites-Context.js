import { useState, createContext } from "react";

export const FavouritesContext = createContext({
  ids: [],
  addFavourite: (id) => {},
  removeFavourite: (id) => {},
});

function FavouritesContextProvider({ children }) {
  const [favouriteMealsIds, setFavouriteMealIds] = useState([]);

  function addFavourite(id) {
    setFavouriteMealIds((prevstate) => [id, ...prevstate]);
  }
  function removeFavourite(id) {
    setFavouriteMealIds((prevState) =>
      prevState.filter((mealId) => mealId !== id)
    );
  }
  const value={
    ids: favouriteMealsIds,
    addFavourite: addFavourite,
    removeFavourite: removeFavourite,
  }

  return <FavouritesContext.Provider value={value}>{children}</FavouritesContext.Provider>;
}

export default FavouritesContextProvider;
