import {createSlice} from '@reduxjs/toolkit';

const saveAuthUser = (state, action) => {
  console.log('state ==>', action);
  state.token = action.payload.token;
};

const saveUsersList = (state, action) => {
  console.log('state =saveUsersList=>', action);
  state.usersList = action.payload.data;
};

// REDUCER
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {},
    usersList: [],
    token: '',
  },
  reducers: {
    saveUser: saveAuthUser,
    usersList: saveUsersList,
  },
});

// ACTIONS
const {saveUser, usersList} = authSlice.actions;

// SELECTOR
const selectAuthUser = ({auth}) => auth;

const authSliceReducer = authSlice.reducer;

export {authSliceReducer, saveUser, usersList, selectAuthUser};
