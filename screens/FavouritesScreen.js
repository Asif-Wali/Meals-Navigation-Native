import { useContext } from "react";
import MealsList from "../components/MealList/MealsList";
import { FavouritesContext } from "../store/context/favourites-Context";
import { MEALS } from "../data/dummy-data";
import { View, Text, StyleSheet } from "react-native";
function Favourites() {
  const favouriteCtx = useContext(FavouritesContext);
  const favouriteMeals = MEALS.filter((meal) =>
    favouriteCtx.ids.includes(meal.id)
  );

  if (favouriteMeals.length === 0) {
    return (
      <View style={styles.msgContainer}>
        <Text style={styles.msgText}>You don't have any favourite meals yet.!</Text>
      </View>
    );
  }
  return <MealsList items={favouriteMeals} />;
}
const styles=StyleSheet.create({
    msgContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    msgText: {
        fontSize:17,
        fontWeight:'bold',
        color: "white"
    }
})
export default Favourites;
