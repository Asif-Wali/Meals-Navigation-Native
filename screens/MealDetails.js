import {useLayoutEffect} from "react"
import { Image, Text, View, ScrollView, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealInfo from "../components/MealInfo";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";
function MealDetails({ route, navigation }) {
  const mealId = route.params.MealId;
  const SelectedMeal = MEALS.find((meal) => meal.id === mealId);

  function HandlePress(){
    console.log("Pressed by Header Right Button")
  }

  useLayoutEffect(()=>{
    navigation.setOptions(
      {
        headerRight: ()=>{
          return<IconButton onPress={HandlePress}/>
        }
      }
    )
  },[]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: SelectedMeal.imageUrl }} />
      <Text style={styles.title}>{SelectedMeal.title}</Text>
      <MealInfo
        duration={SelectedMeal.duration}
        complexity={SelectedMeal.complexity}
        affordability={SelectedMeal.affordability}
        detailText={styles.detailText}
      />
      <View style={styles.listContainerOuter}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={SelectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={SelectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listContainerOuter: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});
export default MealDetails;
