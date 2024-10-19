import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CategoriesScreen from "./screens/CategoriesScreen";
import Meals from "./screens/MealsOverViewScreen";
import MealDetails from "./screens/MealDetails";
import Favourites from "./screens/FavouritesScreen";
import { Ionicons } from "@expo/vector-icons";
import FavouritesContextProvider from "./store/context/favourites-Context";
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
export default function App() {
  function DrawerNavigator() {
    return (
      <Drawer.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#351401" },
          headerTintColor: "white",
          sceneContainerStyle: { backgroundColor: "#3f2f25" },
          drawerContentStyle: { backgroundColor: "#351401" },
          drawerInactiveTintColor: "white",
          drawerActiveTintColor: "#351401",
          drawerActiveBackgroundColor: "#e4baa1",
        }}
      >
        <Drawer.Screen
          name="Categories"
          component={CategoriesScreen}
          options={{
            title: "All Categories",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="list" color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="Favourites"
          component={Favourites}
          options={{
            title: "Favourites",
            drawerIcon: ({ color, size }) => (
              <Ionicons name="star" color={color} size={size} />
            ),
          }}
        />
      </Drawer.Navigator>
    );
  }

  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <FavouritesContextProvider>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#351401" },
              headerTintColor: "white",
              contentStyle: { backgroundColor: "#3f2f25" },
            }}
          >
            <Stack.Screen
              name="DrawerScreen"
              component={DrawerNavigator}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MealsOverView"
              component={Meals}
              //  options={({route, navigation})=>{
              //   const catId=route.params.categoryId;
              //   return {
              //     title: catId,
              //   }
              // }}
            />
            <Stack.Screen
              name="MealDetails"
              component={MealDetails}
              options={{ title: "About the Meal" }}
            />
          </Stack.Navigator>
        </FavouritesContextProvider>
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
