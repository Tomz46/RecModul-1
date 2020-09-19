import { StyleSheet } from 'react-native'

export const Styles = StyleSheet.create({
  wrapper: {
    flex:1,
 },
  header:{
    backgroundColor:'blue',
    color: 'white',
    justifyContent:"center",
    alignItems:'center',
    height:50
  },
title :{
    color:'white',
    fontSize:30,
    fontWeight:'bold'
  },
  container: {
    backgroundColor:'white',
    paddingHorizontal:15,
    paddingVertical: 10,
    width :'90%',
    alignSelf:'center',
    marginVertical:15
  },

titleSection :{
    fontSize:15,
    width:85,
    marginBottom:5,
    color:'#3b2e5a'
  },

  boxPaket:{
    width:100,
    height:70,
    justifyContent:'center',
    alignSelf:'center',
    marginHorizontal:10
  },

boxPaketShop:{
    width:100,
    height:70,
    justifyContent:'center',
    alignSelf:'center',
    marginHorizontal:10
  },

  textPaket:{
    backgroundColor:'rgba(0,0,0,0.5)',
    paddingHorizontal:20,
    paddingVertical:5,
    color:'white',
    fontSize:15
},
  shadow:{
shadowColor:'#000',
shadowOffset:{
  width:0,
  height:4
},
shadowOpacity:0.30,
shadowRadius:4.65,
elevation:8
 },
  textRed: {
    color:"red"
  },
viewBanner:{
  width:'100%',
  height:200,
  backgroundColor:'white'
},
banner:{
width:'100%',
height:200

}
})
