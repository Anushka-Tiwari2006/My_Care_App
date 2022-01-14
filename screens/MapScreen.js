import React,{Component} from "react";
import { StyleSheet, Text, View,Image,SafeAreaView } from "react-native";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import { RFValue } from "react-native-responsive-fontsize";
import { WebView } from 'react-native-webview';





export default class MapScreen extends Component {
  constructor(props) {
        super(props);
        this.state = {
       coordinates: [],
        };
    }
  

render(){
  const path = `https://www.google.com/maps/d/u/0/edit?mid=1wpkJLo0Tem9MC7bksnVADdZfdrGNiRVC&ll=28.4680005897821%2C77.53733195367427&z=17`
  return (
   <View style={styles.container}>
   <View style = {styles.container}> 
        <Image style = {styles.logo}
        source={require("../assets/download.jpg")}></Image> 
        <Text style = {styles.headerText}>Map</Text>
        <Image style = {styles.gif}
         source = {require("../assets/f70b1806d7128b4843d81a5a62bb3b07.gif")}></Image>
      </View>
                <WebView
                    scalesPageToFit={true}
                    source={{ uri: path }}
                    style={{ marginTop:140,width:359 }}
                />
  </View>) 
}}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1, //the container will fill the whole screen.
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor:"#fedbd0"
  },

 
  
    logo:{
    width:100,
    height:100,
    bottom:RFValue(430),
    borderRadius:300,
    right:RFValue(120),
    borderWidth:3,
    borderColor:"#ff0266"
  },
  gif:{
    width:120,
    height:100,
    bottom:570,
    borderRadius:200
  }

});