import { auth } from '../firebase';
import { useState, useLayoutEffect } from 'react';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import {
  StyleSheet,
  KeyboardAvoidingView,
  View,
  Button,
  TextInput,
} from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //   useEffect(() => {
  //     const unsubscribe = onAuthStateChanged(auth, (authUser) => {
  //       if (authUser) {
  //         navigation.replace('List');
  //       } else {
  //         navigation.replace('LoginScreen');
  //       }
  //     });
  //     return unsubscribe;
  //   }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: { backgroundColor: '#246A73' },
      headerTintColor: 'white',
      headerTitleAlign: 'center',
    });
  }, [navigation]);

  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => navigation.replace('List'))
      .catch((err) => alert(err));
    global.currentUser = auth.currentUser.displayName;
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          type="email"
          autofocus
          value={email}
          onChangeText={(email) => setEmail(email)}
          style={styles.inputStyle}
        />
        <TextInput
          placeholder="Password"
          type="password"
          secureTextEntry
          value={password}
          onChangeText={(password) => setPassword(password)}
          style={styles.inputStyle}
        />
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title="Log in" onPress={signIn} color="#368F8B" />
        </View>
        <View style={styles.button}>
          <Button
            color="#554971"
            title="Register"
            onPress={() => navigation.navigate('RegisterScreen')}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDF6F9',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    height: '100%',
  },
  inputContainer: {},
  inputStyle: {
    height: 40,
    width: '70vw',
    borderWidth: 1,
    borderRadius: 3,
    boverlayColor: 'grey',
    margin: 2,
    backgroundColor: 'white',
    paddingLeft: 8,
  },
  buttonContainer: {
    marginTop: 9,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '70vw',
  },
  button: {
    width: '30vw',
    marginHorizontal: 3,
  },
});
