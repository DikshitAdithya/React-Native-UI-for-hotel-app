import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {gs,colors} from '../../../Styles';
import Fea from 'react-native-vector-icons/Feather';
import En from 'react-native-vector-icons/Entypo';



const starColors=["#e3ab53","#e3ab53","#e3ab53","#e3ab53","#8b6f43"];

export default class Stat extends Component {
 
  render() {
    return (
      <View style={styles.cont} >

          <View style={styles.weathercont}>
             <Fea name='sun' size={20} color={colors.darkHl}/>
            
             <View style={{marginLeft:12}}>
                 <Text style={styles.tittle}> 22°</Text>
                 <Text style={styles.subtitle}>Sunny</Text>
             </View>
          
          </View>
        
        <View>
            <Text style={styles.tittle}>
                  8.5

                <Text style={{fontSize:15,color:colors.pnik}}> +80k Votes</Text>
            </Text>

            <View style={gs.rowCent}>
                {starColors.map((color,index) =>{
                    return(
                        <En name='star' size={15} color={color} key={index} style={{marginHorizontal:2}}/>
                    );
                })}

            </View>
        </View>
        
        <View style={styles.circleCont}>
           <En name='heart-outlined' size={24} color={colors.pnik}/>
               
        </View> 
       
      </View>
    );
  } 
}
const styles=StyleSheet.create({
    cont:{
        ...gs.rowCent,
        ...gs.SectionCont
    },
    weathercont:{
        marginLeft:1,
        ...gs.rowCent,
        paddingRight:12,
        borderRightWidth:1,

    },
    tittle:{
        color:colors.text,
        fontSize: 22,
        fontWeight:'bold',
        left:5
    },
    subtitle:{
        color:colors.pnik
    },
    circleCont:{
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-end',
        
    },
   


})
