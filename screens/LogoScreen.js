import React,{Component} from "react"
import {View,Text,StyleSheet,Image,TouchableOpacity} from "react-native"
import TabNavigator from "../Navigation/TabNavigator"
import HomeScreen from "./Homescreen"

export default class LogoScreen extends Component{
  render(){
    return(
      <View style = {styles.container}>
      <Image style = {styles.logo}
      source = {require("../assets/download.jpg")}/>
      <Text> In the journey of ALZYMER's, there would be many obstacles, but don't worry we will help you 
      with every steps because we CARE..... </Text>
      <View>
      <TouchableOpacity style = {styles.next}
      onPress={()=>this.props.navigation.navigate("TabNavigator")}>
      <Text style ={styles.nextText}>Continue</Text>
      </TouchableOpacity>
      </View>
      </View>
    )
  }
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    backgroundColor:"#fedbd0"  
  },
  logo:{
    width:300,
    height:300,
    borderRadius:300,
    alignSelf:"center",
    justifyContent:"center",
    bottom:100
  },
  next:{
    backgroundColor:"#ff0266",
    width:100,
    height:50,
    position:"absolute",
    alignSelf:"center",
    borderRadius:10,
    borderWidth:3,
    alignContent:"center",
    alignItems:"center"
  },
  nextText:{
    textAlign:"center",
    justifyContent:"center",
    alignContent:"center",
    alignItems:"center",
    alignSelf:"center",
    fontWeight:"bold",
    fontSize:20


    
  }
})