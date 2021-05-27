import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';


const LoginScreen = props => {

    const liveSports = useSelector(state => state.sports.sports);
    console.log(liveSports)
    return <View> 
               {/* <Text>{liveSports}</Text> */}
    </View>
};

export default LoginScreen;