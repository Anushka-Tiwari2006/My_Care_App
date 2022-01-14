import React,{Component} from "react";
import {View,Text,StyleSheet,ScrollView,TextInput,Image,TouchableOpacity,Alert,Button} from "react-native"
import DropDownPicker from "react-native-dropdown-picker";
import { RFValue } from "react-native-responsive-fontsize";
import firebase from "firebase"
import HomeScreen from "./Homescreen";


 export default class NotesScreen extends Component{
constructor(props){
  super(props)
  this.state={
    
  }
}

async addFeed() {
    if (
      this.state.title1 &&
      this.state.time1 &&
      this.state.title2 &&
      this.state.time2
    ) {
      let feedData = {
        title1: this.state.title1,
        time1: this.state.time1,
        title2: this.state.title2,
        time2: this.state.time2,
        
      };
      await firebase
        .database()
        .ref(
          "/feed/" +
            Math.random()
              .toString(36)
              .slice(2)
        )
        .set(feedData)
        .then(function(snapshot) {});
      this.props.setUpdateToTrue();
      this.props.navigation.navigate("HomeScreen");
    } else {
      Alert.alert(
        "Error",
        "All fields are required!",
        [{ text: "OK", onPress: () => console.log("OK Pressed") }],
        { cancelable: false }
      );
    }
  }
  
  render(){

    return(
      <View style ={styles.container}>
      <Image style = {styles.logo}
      source = {require("../assets/download.jpg")}/>
      <View style = {styles.headerContainer}>
      <Text style = {styles.headerText}> Daily Feed </Text>
      </View>
      <View >
      <View>
               <Image style = {styles.gif}
      source = {require("../assets/gif.1.gif")}/>   
      </View>

      <TextInput
     style={styles.textInputDo1}
     onChangeText={title1 => this.setState({ title1 })}
     placeholder={"THINGS TO DO"}
     placeholderTextColor={"black"}
    />
    <TextInput
     style={styles.textInputTime1}
     onChangeText={time1 => this.setState({ time1 })}
     placeholder={"TIME"}
     placeholderTextColor={"black"}
    />
          <TextInput
     style={styles.textInputDo2}
     onChangeText={title2 => this.setState({ title2 })}
     placeholder={"THINGS TO DO"}
     placeholderTextColor={"black"}
    />
    <TextInput
     style={styles.textInputTime2}
     onChangeText={time2 => this.setState({ time2 })}
     placeholder={"TIME"}
     placeholderTextColor={"black"}
    />
      </View>
      <View>
     <TouchableOpacity
     style = {styles.saveButton}
     onPress={() => this.addFeed()}
     >
     <Text style = {styles.buttonText}>Save</Text>
     </TouchableOpacity>
      </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  headerContainer:{
    backgroundColor:"#00004d",
    alignItems:"center",
  },

  textInputDo1:{
    backgroundColor:"#ff0266",
    height:35,
    width:120,
    borderRadius:10,
    position:"absolute",  
    right:10,
    textAlign:"center",
    fontWeight:"bold",
    borderWidth:3,
    borderColor:"black",
    top:180
  },
  textInputTime1:{
    backgroundColor:"#ff0266",
    height:35,
    width:120,
    borderRadius:10,
    position:"absolute",  
    left:10,
    textAlign:"center",
    fontWeight:"bold",
    borderWidth:3,
    borderColor:"black",
        top:180,


  
  },
  textInputDo2:{
    backgroundColor:"#ff0266",
    height:35,
    width:120,
    borderRadius:10,
    position:"absolute",  
    right:10,
    textAlign:"center",
    fontWeight:"bold",
    borderWidth:3,
    borderColor:"black",
    top:120,

    
  },
  textInputTime2:{
    backgroundColor:"#ff0266",
    height:35,
    width:120,
    borderRadius:10,
    position:"absolute",  
    left:10,
     
    textAlign:"center",
    fontWeight:"bold",
    borderWidth:3,
    borderColor:"black",
    top:120,

  },
  container:{
    flex:1,
    justifyContent:"center",
    backgroundColor:"#fedbd0"
    
  },
  headerText:{
    fontSize:40,
    position:"absolute",
    bottom:225,
    alignContent:"center",
    backgroundColor:"black",
    fontWeight:"bold",
    fontFamily:"",
    color:"white",
    borderRadius:10,
    left:113

  },
  gif:{
    width:200,
    height:200,
    bottom:140,
    resizeMode:"contain",
    alignSelf:"center",
  },
  logo:{
    width:100,
    height:100,
    bottom:190,
    borderRadius:300,
    left:10,
    borderWidth:3,
    borderColor:"#ff0266"
  },
  saveButton:{
    backgroundColor:"black",
    width:100,
    height:50,
    alignSelf:"center",
    top:80,
    borderRadius:10,
    borderWidth:3,
    borderColor:"white"
  },
  buttonText:{
    color:"white",
    fontWeight:"bold",
    fontSize:30,
    textAlign:"center",
  },
  
})