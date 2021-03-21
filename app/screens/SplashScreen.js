import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {selectAuthUser} from '../state/AuthState';

const SplashScreen = () => {
  const navigation = useNavigation();
  const authUser = useSelector(selectAuthUser);

  React.useEffect(() => {
    setTimeout(() => {
      console.log('authUser==>', authUser);
      authUser.token?.length > 0
        ? navigation.reset({
            index: 0,
            routes: [{name: 'Main'}],
          })
        : navigation.reset({
            index: 0,
            routes: [{name: 'Auth'}],
          });
    }, 2000);
  }, []);
  return (
    <View style={styles.main}>
      <Text style={styles.logo}>Demo App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  logo: {
    textAlign: 'center',
    fontSize: 20,
  },
});
export default SplashScreen;
