import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
} from 'react-native';
import { useState, useLayoutEffect, useContext } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

// import auth from '@react-native-firebase/auth';

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const user = useContext(UserContext);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: { backgroundColor: '#246A73' },
      headerTintColor: 'white',
      headerTitleAlign: 'center',
    });
  }, [navigation]);

  const register = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((authUser) => {
        updateProfile(authUser.user, {
          displayName: name,
        });
      })
      .then(() => {
        navigation.replace('List');
        console.log('User account created & signed in!');
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
          alert('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
          alert('That email address is invalid!');
        }
        console.error(error);
        global.currentUser = auth.currentUser.displayName;
      });

    // createUserWithEmailAndPassword(auth, email, password)
    //   .then((authUser) => {
    //     updateProfile(authUser.user, {
    //       displayName: name,
    //     });
    //   })
    //   .catch((err) => {
    //     alert(err.message);
    //   });
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text>Create an account</Text>
      {/* <Text>{user}</Text> */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Full Name"
          type="text"
          value={name}
          onChangeText={(text) => setName(text)}
          style={styles.inputStyle}
        />
        <TextInput
          placeholder="Email"
          type="email"
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
      <View style={[styles.buttonContainer, styles.button]}>
        <Button title="register" onPress={register} color="#368F8B" />
      </View>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

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
