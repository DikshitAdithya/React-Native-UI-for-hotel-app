import React, { Component } from 'react';
import { View, Text,Image,TouchableOpacity,StyleSheet,ImageBackground } from 'react-native';
import {gs,colors} from '../../../Styles';
import En from 'react-native-vector-icons/Entypo';

export default class Address extends Component {
 

  render() {
    return (
      <View>
          

          <View style={StyleSheet.addresscont}>
                 <View style={gs.SectionCont}>
                    <En name="mail" size={24} color={colors.text}/>
                    <Text style={{fontWeight:'900',color:'white',marginVertical:12}}>dikshitadithya@gmail.com</Text>
                    
                    <En name="mobile" size={24} color={colors.text}/>
                    <Text style={{fontWeight:'900',color:'white',marginVertical:12}}>91+9500553108</Text>
                    
                    <En name="instagram" size={24} color={colors.text}/>
                    <Text style={{fontWeight:'900',color:'white',marginVertical:12}}>@dikshit_adi</Text>

                    <En name="help" size={24} color={colors.text}/>
                    <Text style={{fontWeight:'900',color:'white',marginVertical:12}}>Address:
                    NO:1,Walls Street,NYC
                    </Text>
                 </View>
              <ImageBackground style={{height:200,opacity: .2,}}
              source={require('../../../images/pic1.jpg')}
              />
             

          </View>
      </View>
    );
  }
}
const styles=StyleSheet.create({
    addresscont:{
        ...gs.absoluteFull,

    }
})