import { useSelector } from "react-redux";
import MealsList from "../components/MealList/MealsList";
import { MEALS } from "../data/dummy-data";
import { View, Text, StyleSheet } from "react-native";
function Liked() {
  const likedMealIds= useSelector((state)=>state.likedMeals.ids)
  const likedMeals = MEALS.filter((meal) =>
    likedMealIds.includes(meal.id)
  );

  if (likedMeals.length === 0) {
    return (
      <View style={styles.msgContainer}>
        <Text style={styles.msgText}>You don't have any liked meals yet.!</Text>
      </View>
    );
  }
  return <MealsList items={likedMeals} />;
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
export default Liked;
