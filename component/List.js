import { StyleSheet, Text, View, Button, Pressable } from 'react-native';
import { customers } from './../customers';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { useLayoutEffect } from 'react';

const List = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: { backgroundColor: '#246A73' },
      headerTintColor: 'white',
      headerTitleAlign: 'center',
    });
  }, [navigation]);

  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        navigation.replace('LoginScreen');
      })
      .catch((err) => alert(err.message));
  };

  const userData = {
    displayName: auth.currentUser.displayName,
    email: auth.currentUser.email,
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome {userData.displayName}!</Text>
      {customers.map((x, k) => (
        <Pressable
          key={k}
          onPress={() => navigation.navigate('Customer', { index: { k } })}
          style={styles.namesContainer}
        >
          <Text style={styles.names}>
            {x.name.first} {x.name.last}
          </Text>
        </Pressable>
      ))}
      <View style={styles.buttonContainer}>
        <Button title="Sign out" color="#554971" onPress={signOutUser} />
      </View>
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDF6F9',
    alignItems: 'center',
  },
  namesContainer: {
    margin: 2,
    backgroundColor: '#368F8B',
    width: '80%',
    paddingVertical: 10,
    borderRadius: 5,
    fontSize: 13,
  },
  names: {
    color: 'white',
    textAlign: 'center',
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 8,
  },
  buttonContainer: {
    margin: 10,
  },
});
