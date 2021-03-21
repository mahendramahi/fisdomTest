import React, {useEffect} from 'react';
import {
  FlatList,
  StyleSheet,
  SafeAreaView,
  Pressable,
  Text,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import UsersCell from '../../components/UsersCell';
import config from '../../config';
import {selectAuthUser} from '../../state/AuthState';

const Home = ({navigation}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    navigation.setOptions({
      headerRight: showRightButton,
    });
  }, []);

  const showRightButton = () => {
    return (
      <Pressable
        style={styles.rightButton}
        onPress={() => {
          navigation.navigate(config.routes.SONGS);
        }}>
        <Text>Next</Text>
      </Pressable>
    );
  };

  const authData = useSelector(selectAuthUser);
  useEffect(() => {
    callUserListApi();
  }, []);

  const callUserListApi = () => {
    authData.usersList?.length > 0
      ? null
      : dispatch({type: 'GET_USERS_LIST', payload: ''});
  };
  const keyExtractor = (item, index) => `${item.trackNumber}${index}`;
  const renderItem = ({item}) => {
    return <UsersCell UserInfo={item} />;
  };
  return (
    <SafeAreaView style={styles.contentView}>
      <FlatList
        data={authData.usersList}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contentView: {flex: 1},
  rightButton: {right: 15},
});

export default Home;
