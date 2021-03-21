import React from 'react';
import {StyleSheet, Pressable, Text} from 'react-native';

const Button = props => {
  return (
    <Pressable style={styles.button} onPress={props.onPress}>
      <Text style={styles.loginText}>{props.title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  loginText: {
    color: '#fff',
    fontWeight: '800',
    fontSize: 16,
    lineHeight: 17,
    justifyContent: 'center',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#7000FF',
    borderRadius: 30,
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    width: 150,
    height: 50,
    marginVertical: 20,
  },
});

export default Button;
