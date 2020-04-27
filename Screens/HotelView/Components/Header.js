import React, { Component } from 'react';
import { View, Text, StyleSheet ,Image} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {gc, gs} from '../../../Styles';
import BookMark from './BookMark';
export default class Header extends Component {
  render() {
    return (
      <View>
        <Image source={require('../../../images/hotel1.jpg')} 
        style={{width:'100%',height:300}}
        />
        <View style={styles.topbutton}>
          <Icon name="close"  size={25} color='#fff'/>
          
          <View style={gs.rowCent}>
          <Icon name="save"  size={25} color='#fff'/>
          <Icon name="sharealt"  size={25} color='#fff'/>
          <Entypo name="dots-three-vertical" size={24} color='#fff'/>
          </View>
        
        </View>
      </View>
    );
  }
}
const styles=StyleSheet.create({
    topbutton:{
        ...gs.rowBetween,
        position:'absolute',
        top:24,
        left:12,
        right:12,
        
    }
})


