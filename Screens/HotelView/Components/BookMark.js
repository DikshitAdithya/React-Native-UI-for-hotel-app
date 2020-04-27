import React, { Component } from 'react';
import { View, Text,StyleSheet } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {gs,colors} from '../../../Styles';
export default function Bookmark() {
  
    return (
      <View style={styles.bookmark}>
          <Feather name='bookmark' size={24} color={colors.pnik}/>
        
      </View>
    );
  }

const styles=StyleSheet.create({
    bookmark:{
        position: 'absolute',
        width: 56,
        height: 56,
        right : 32,
        top:-56/2,
        backgroundColor:'#fff',
        ...gs.center,
        borderRadius:56/2,
        zIndex:10

        

        
        
      
        


        
        
    }
})