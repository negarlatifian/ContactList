import { StyleSheet, Text, View, Button, Pressable } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { customers } from "../../customers";

const List = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>List</Text>
      {customers.map((x, k) => (
        <Pressable
          key={k}
          onPress={() => navigation.navigate("Customer", { index: { k } })}
        >
          <Text>
            {x.name.first} {x.name.last}
          </Text>
        </Pressable>
      ))}
      <Button
        title="Go to Customer"
        onPress={() => navigation.navigate("Customer")}
      />
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
