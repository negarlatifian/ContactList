import { StyleSheet, Text, View, Button, Pressable } from 'react-native';
import { customers } from './customers';

const List = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>List</Text>
      {customers.map((x, k) => (
        <Pressable
          key={k}
          onPress={() => navigation.navigate('Customer', { index: { k } })}
        >
          <Text>
            {x.name.first} {x.name.last}
          </Text>
        </Pressable>
      ))}
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
