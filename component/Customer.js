import { StyleSheet, Text, View, Button } from 'react-native';
import { customers } from './customers';

const Customer = ({ navigation, route }) => {
  const index = route.params.index.k;
  const customer = customers[index];

  return (
    <View style={styles.container}>
      <Text>Customer</Text>
      <Text>
        Name: {customer.name.first} {customer.name.last}
      </Text>
      <Text testID="customerEmail">Email: {customer.email}</Text>
      <Text>Country: {customer.location.country}</Text>

      <Button title="Go to List" onPress={() => navigation.navigate('List')} />
    </View>
  );
};

export default Customer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
