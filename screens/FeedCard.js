import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Dimensions,
  TouchableOpacity
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import firebase from "firebase";
import HomeScreen from "./Homescreen"

export default class FeedCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feeds_id: this.props.feeds.key,
      feeds_data: this.props.feeds.value,
    };
  }

  componentDidMount() {
  }

  render() {
    let feeds = this.state.feeds_data; 
      return (
        <SafeAreaView style = {styles.droidSafeArea}>
          <View style = {styles.cardContainer}>
            <View style={styles.titleContainer}>
              <View style={styles.titleTextContainer}>
              <View>
              <Text style = {styles.titleHead}>
                  Work
                </Text>
                 <Text style = {styles.timeHead}>
                  Time
                </Text>
               <Text style = {styles.title}>
                  {feeds.title1}
                </Text>
                <Text style = {styles.time}>
                  {feeds.time1}
                </Text>
              </View>
               <View>
               <Text style = {styles.title}>
                  {feeds.title2}
                </Text>
                <Text style = {styles.time}>
                  {feeds.time2}
                </Text>
              </View>
              </View>
            </View>
          </View>
          </SafeAreaView>
      )
  }
}
const styles = StyleSheet.create({
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }, 
  titleContainer: {
    paddingLeft: RFValue(20),
    justifyContent: "center"
  },
   cardContainer: {
    margin: RFValue(13),
    backgroundColor: "#ff0266",
    borderRadius: RFValue(20),
    height:200,
    alignItems:"center",
    textAlignVertical:"center",
    bottom:10,
    borderWidth:3,
    borderColor:"black",
  },
  titleTextContainer: {
    flex: 0.8,
    top:40
  },
  title:{
    fontSize:20,
    right:80,
    bottom:30
  },
  time:{
    fontSize:20,
    left:80,
    bottom:57
  },
  titleHead:{
     fontSize:30,
    right:80,
    color:"white",
    bottom:21,
    fontWeight:"bold",
    textDecorationLine:"underline"
  },
  timeHead:{
    fontSize:30,
    left:80,
    bottom:60,
    color:"white",
    fontWeight:"bold",
    textDecorationLine:"underline"

  }
});