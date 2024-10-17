import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTitle from "../components/CategoryGridTile";
import { useNavigation } from "@react-navigation/native";

function CategoriesScreen({ navigation }) {

    
  function renderCategoryItem(itemData) {
    function pressHandler() {
      navigation.navigate("MealsOverView", {categoryId: itemData.item.id});
    }
    return (
      <CategoryGridTitle
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryItem}
      numColumns={2}
    />
  );
}
export default CategoriesScreen;
