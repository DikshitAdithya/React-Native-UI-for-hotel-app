import {StyleSheet} from 'react-native';

export const colors ={
    darkbg : "#222",
    lightbg: "#333",
    darkHl : "#666",
    lightHl: "#888",
    pnik   : "#ea3372",
    text   : "#fff",
    textSec: "#aaa",
};
export const gs =StyleSheet.create({
    tittle:{
        fontSize:26,
        fontWeight:'bold',
        color: colors.text,

    },
   SectionCont:{
    
    paddingVertical:25,
    paddingHorizontal:52,
    marginBottom:1,
    backgroundColor:colors.lightbg
   },
    rowBetween: {
        flexDirection:"row",
        justifyContent:"space-between",
    },
    rowCent:{
        flexDirection:'row',
        alignItems:'center',
    },
    center:{
        alignItems:'center',
        justifyContent:'center',
    
    },
    divider:{
        borderBottomColor:'#444',
        borderBottomWidth:1,
        marginVertical: 15,
        marginRight: 1,
        
    },
    sectionTitle:{
        fontSize:15,
        color:colors.text,
        fontWeight:'bold',
    },
    absoluteFull:{
        position:'absolute',
        top:0,
        left:0,
        width:"100%",
        height:"100%",
    }
})