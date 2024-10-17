import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
function IconButton({onPress}) {
  return (
    <Pressable>
      <Ionicons name="star" size={24} color={"white"} onPress={onPress} />
    </Pressable>
  );
}
export default IconButton;
