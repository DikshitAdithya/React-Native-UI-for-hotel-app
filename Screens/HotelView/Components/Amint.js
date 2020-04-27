import React, { Component } from 'react';
import { View, Text,StyleSheet} from 'react-native';
import {gs,colors} from '../../../Styles';
import Fea from 'react-native-vector-icons/Feather';
import Ioni from 'react-native-vector-icons/Ionicons';
import En from 'react-native-vector-icons/Entypo';
import Fonta from 'react-native-vector-icons/FontAwesome5';
export default class Amint extends Component {
  render() {
    return (
      <View style={gs.SectionCont}>
          <Text style={gs.sectionTitle}> Amenities</Text>
            
            <View style={StyleSheet.amitCont}>
                <View style={styles.amitityCont}>
                    <View style={styles.amit}>
                        <Fea name='wifi' size={23} color={colors.lightHl} />
                    </View>
                <Text style={styles.Amitname}>Wifi</Text>
                </View>
            </View>
          
            <View style={StyleSheet.amitCont}>
                <View style={styles.amitityCont}>
                    <View style={styles.amit}>
                        <Fea name='coffee' size={23} color={colors.lightHl} />
                    </View>
                <Text style={styles.Amitname}>  Restaurant</Text>
                </View>
            </View>
          
            <View style={StyleSheet.amitCont}>
                <View style={styles.amitityCont}>
                    <View style={styles.amit}>
                        <Fonta name='swimmer' size={23} color={colors.lightHl} />
                    </View>
                <Text style={styles.Amitname}>Swimming pool</Text>
                </View>
            </View>

            <View style={StyleSheet.amitCont}>
                <View style={styles.amitityCont}>
                    <View style={styles.amit}>
                        <En name='drink' size={23} color={colors.lightHl} />
                    </View>
                <Text style={styles.Amitname}>Bar</Text>
                </View>
            </View>

            <View style={StyleSheet.amitCont}>
                <View style={styles.amitityCont}>
                    <View style={styles.amit}>
                        <Ioni name='ios-car' size={23} color={colors.lightHl} />
                    </View>
                <Text style={styles.Amitname}>  Parking Spot</Text>
                </View>

            </View>
            <View style={StyleSheet.amitCont}>
                <View style={styles.amitityCont}>
                    <View style={styles.amit}>
                        <Fea name='speaker' size={23} color={colors.lightHl} />
                    </View>
                <Text style={styles.Amitname}> Night Bar</Text>
                </View>

            </View>
            
                  

        
      </View>
    );
  }
}
const styles = StyleSheet.create({
    amitCont:{
        ...gs.rowBetween,
        marginTop:5,
        marginHorizontal:5,
        flexWrap:'wrap',
        
        
    },
    amitityCont:{
        alignItems:'center',
        marginVertical:16,
        width:95,
           ...gs.rowBetween,
        

        
    },
    amit:{
            width:50,
            height:50,
            borderRadius:50/2,
            ...gs.center,
            borderWidth:1,
            borderColor:colors.pnik,
    },
    Amitname:
    {
        color:colors.lightHl,
        fontSize:15,
        fontWeight:'900',
        marginTop: 6,
        textAlign:'center',
        

    },

});