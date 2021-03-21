import * as React from 'react';
import {StackActions} from '@react-navigation/native';

export const navigationRef = React.createRef();

export function push(...args) {
  navigationRef.current?.dispatch(StackActions.push(...args));
}

export function replace(...args) {
  navigationRef.current?.dispatch(StackActions.replace(...args));
}

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}

export function goBack() {
  navigationRef.current?.goBack();
}

export function reset(name, params) {
  navigationRef.current?.reset(name, params);
}

export function resetToMain(param) {
  navigationRef.current?.reset(param);
}
