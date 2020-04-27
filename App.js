import React, { Component } from 'react';
import { View, Text,StyleSheet,SafeAreaView,ScrollView} from 'react-native';
import { colors } from './Styles';
import HotelView from './Screens/HotelView';

export default class App extends Component {
 
  render() {
    return (
      <ScrollView style={styles.cont}>
        <HotelView/>
       </ScrollView>
    );
  }
}
const styles=StyleSheet.create({
  cont:{
    flex:1,
    backgroundColor: colors.darkbg,
    
  }
})