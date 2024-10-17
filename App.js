import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "./screens/CategoriesScreen";
import Meals from "./screens/MealsOverViewScreen";
import MealDetails from "./screens/MealDetails";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#351401" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#3f2f25" },
          }}
        >
          <Stack.Screen
            name="MealsCategories"
            component={CategoriesScreen}
            options={{ title: "All Categories" }}
          />
          <Stack.Screen name="MealsOverView" component={Meals}
          //  options={({route, navigation})=>{
          //   const catId=route.params.categoryId;
          //   return {
          //     title: catId,
          //   }
          // }} 
          />
          <Stack.Screen name="MealDetails" component={MealDetails}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

// this is a way of styling a single screen of the app
//  <Stack.Screen name="MealsCategories" component={CategoriesScreen}  options={{title:"All Categories",
//             headerStyle:{backgroundColor: "#351401"},
//             headerTintColor: "white",
//             contentStyle: {backgroundColor:  "#3f2f25"}
//           }}/>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderWidht: 1,
    borderColor: "red",
  },
});
