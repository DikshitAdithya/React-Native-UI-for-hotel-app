import React, { Component } from 'react';
import { View, Text, StyleSheet,StatusBar } from 'react-native';
import { colors } from '../../Styles';
import Header from './Components/Header';
import BookMark from './Components/BookMark';
import About from './Components/About';
import Stat from './Components/Stat';
import Amint from './Components/Amint';
import Address from './Components/Address';

export default class index extends Component {
  render() {
    return (
      <View style={styles.cont}>
            <StatusBar barStyle = 'light-content'/>
          <Header/>     
          <View>
                      
              <BookMark/> 
              <About/>
              <Stat/>
              <Amint/>
              <Address/>

           
          </View>
      </View>
    );
  }
}
const styles=StyleSheet.create({
    cont:{
        flex:1,
        backgroundColor:colors.darkbg,
    }
})
