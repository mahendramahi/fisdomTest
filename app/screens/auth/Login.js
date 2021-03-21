import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, TextInput} from 'react-native';
import {useDispatch} from 'react-redux';
import {Button} from '../../components';
import config from '../../config';

const Login = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={'Enter Email'}
        keyboardType={'email-address'}
        onChangeText={val => setEmail(val)}
      />
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        keyboardType={'default'}
        inp
        placeholder={'Enter password'}
        onChangeText={val => setPassword(val)}
      />

      <Button
        onPress={() => {
          dispatch({
            type: 'POST_LOGIN',
            payload: {email: email, password: password},
          });
        }}
        title={'Login'}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 20,
  },
  input: {
    width: '100%',
    borderColor: config.colors.black,
    borderWidth: 1.5,
    height: 40,
    padding: 10,
    marginTop: 20,
  },
});
export default Login;
