import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import sportsReducer from './src/store/reducers/sports';
import { SafeAreaView, Text } from 'react-native';
import LoginScreen from './src/screen/user/LoginScreen';

const rootReducer = combineReducers({
  sports: sportsReducer
});
const store = createStore(rootReducer);

const App = () => {
  return (<Provider store={store}>
     <SafeAreaView>
       <LoginScreen />
     </SafeAreaView>
  </Provider>);
};

export default App;