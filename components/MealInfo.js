import { View, Text, StyleSheet } from "react-native";
function MealInfo({duration,complexity, affordability, incomingStyle, detailText}){
return <View style={[styles.details, incomingStyle]}>
<Text style={[styles.detailItem, detailText]}>{duration}m</Text>
<Text style={[styles.detailItem, detailText]}>{complexity.toUpperCase()}</Text>
<Text style={[styles.detailItem, detailText]}>{affordability.toUpperCase()}</Text>
</View>
}
const styles = StyleSheet.create({
    details: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: 8,
      },
      detailItem: {
        marginHorizontal: 4,
        fontSize: 12,
      },
})
export default MealInfo;