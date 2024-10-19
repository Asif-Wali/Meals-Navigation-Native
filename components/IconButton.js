import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
function IconButton({onPress, color, name}) {
  return (
    <Pressable>
      <Ionicons name={name} size={28} color={color} onPress={onPress} />
    </Pressable>
  );
}
export default IconButton;
