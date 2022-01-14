import React,{Component} from "react"
import {View,Text,StyleSheet,Image,FlatList,TouchableOpacity} from "react-native"
import firebase from "firebase"
import NotesScreen from "./NotesScreen";
import FeedCard from "./FeedCard";

import { RFValue } from "react-native-responsive-fontsize";


export default class HomeScreen extends Component{
  constructor(props){
  super(props)
  this.state={
    feeds: []
  }
}

 componentDidMount() {
    this.fetchFeed();
  }
fetchFeed = () => {
    firebase
      .database()
      .ref("/feed/")
      .on(
        "value",
        snapshot => {
          let feeds = [];
          if (snapshot.val()) {
            Object.keys(snapshot.val()).forEach(function (key) {
              feeds.push({
                key: key,
                value: snapshot.val()[key]
              });
            });
          }
          
          this.setState({ feeds: feeds });
        },
        function (errorObject) {
          console.log("The read failed: " + errorObject.code);
        }
      );
  };
  renderItem = ({ item: feeds }) => {
    return <FeedCard feeds={feeds} navigation={this.props.navigation} />;
  };

  keyExtractor = (item, index) => index.toString();

  render(){
    return(
      <View style = {styles.container}>
       <Text style = {styles.text}> CARE </Text>
      <Image style = {styles.logo}
      source = {require("../assets/download.jpg")}></Image>
      <Image style = {styles.gif}
      source = {require("../assets/old.png")}>
      </Image>
      
      <View>
      <FlatList
      keyExtractor={this.keyExtractor}
      data={this.state.feeds}
      renderItem={this.renderItem}/>
      </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    backgroundColor:"#fedbd0"
    
  },
  logo:{
    width:100,
    height:100,
    bottom:RFValue(80),
    borderRadius:300,
    left:RFValue(6),
    borderWidth:3,
    borderColor:"#ff0266",
  
  },
  gif:{
    width:200,
    height:200,
    left:RFValue(120),
    bottom:RFValue(70),
    borderRadius:20
  },
  text:{
    fontSize:60,
    color:"white",
    left:100,
    backgroundColor:"black",
    borderRadius:20,
    fontWeight:"bold",

  }
})
