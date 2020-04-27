import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {gs,colors} from '../../../Styles';
const Hotel = {
    name:"Dikshit Adithya Hotel",
    price:"$999/per DAY",
    Location:"New York City",
    about:"The hotel stay was very pleasant and comfortable. The staff was very polite and helpful, the location was very convenient for getting around and many activities. If we were to travel to Prague again, we would definitely stay there again! ",
};
export default class About extends Component {
  render() {
    return (
      <View style={styles.cont}>
        <Text style={gs.tittle}> {Hotel.name} </Text>

        <Text style={styles.info}> 
                {Hotel.price} , {Hotel.Location}
        </Text>
        <View style={gs.divider}/>

    <Text style={gs.sectionTitle}>About {Hotel.name}</Text>

    <Text style={styles.about}>{Hotel.about}</Text>
      </View>
    );
  }
}
const styles= StyleSheet.create({
    cont:{
        ...gs.SectionCont,
        backgroundColor: colors.darkbg,
        right:32,
    },
    info:{
        fontWeight:'800',
        top:1,
        left:12,
        fontSize:15,
        color:colors.textSec,
    },
    about:{
        fontWeight:"800",
        color:colors.textSec,
        marginRight:-51,

    }
})
