import { StyleSheet, Text, View, Button } from 'react-native';
import { customers } from './../customers';
import { useLayoutEffect } from 'react';

const Customer = ({ navigation, route }) => {
  const index = route.params.index.k;
  const customer = customers[index];

  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: { backgroundColor: '#246A73' },
      headerTintColor: 'white',
      headerTitleAlign: 'center',
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.textStyle}>
          <b>Name</b>: {customer.name.first} {customer.name.last}
        </Text>
        <Text style={styles.textStyle}>
          <b>Email</b>: {customer.email}
        </Text>
        <Text style={styles.textStyle}>
          <b>Country</b>: {customer.location.country}
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          color="#554971"
          title="Go to List"
          onPress={() => navigation.navigate('List')}
        />
      </View>
    </View>
  );
};

export default Customer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDF6F9',
    alignItems: 'center',
    padding: 10,
    // justifyContent: 'center',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 5,
  },
  textStyle: {
    padding: 10,
    fontSize: 18,
  },
  buttonContainer: {
    marginTop: 10,
    justifyContent: 'center',
    // width: '100%',
  },
});
