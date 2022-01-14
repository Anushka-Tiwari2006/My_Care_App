import React,{Component} from "react"
import {View,Text} from "react-native"
import firebase from "firebase"

export default class ProfileScreen extends Component{

    constructor(props){
    super(props)
    this.state={
      name:"",
      age:""
    }
  }
  componentDidMount(){
    this.fetchUser()
  }

  async fetchUser(){
    let name,age
    await firebase
    .database()
    .ref("/users/"+firebase.auth().currentUser.aid())
    .on("value", function(snapshot){
      name = `${snapshot.val().first_name} ${snapshot.val().last_name}`
      age = snapshot.val().age
    })
    this.setState({
      name:name,
      age:age
    })
  }

  render(){
    return(
      <View>
      <Text> Profile Screen </Text>
      </View>
    )
  }
}