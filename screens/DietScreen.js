import React, { Component } from "react";
import {View,Text,StyleSheet,ScrollView,Image,FlatList} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { RFValue } from "react-native-responsive-fontsize";

export default class DietScreen extends Component {
 constructor(props) {
    super(props);
    this.state = {
      dropdownHeight: 40,
      previewImage:"day_1",
    };
  }
  render(){
    let preview_text = {
        day_2:require("../assets/deit 1.png"),
        day_1:require("../assets/diet 2.png"), 
        day_3:require("../assets/diet 3.png"),
        day_5:require("../assets/diet 4.png"),
        day_4:require("../assets/diet 5.png"),
      };
    return(
        <View style = {styles.container}> 
        <Image style = {styles.logo}
        source={require("../assets/download.jpg")}></Image> 
        <Text style = {styles.headerText}> My Diet </Text>
        <Image style = {styles.gif}
         source = {require("../assets/prud_x2_800x600.gif")}></Image>
        <View style = {styles.dropDown}>
        
      <DropDownPicker
                  items={[
                    { label: "1", value: "day_1" },
                    { label: "2", value: "day_2" },
                    { label: "3", value: "day_3" },
                    { label: "4", value: "day_4" },
                    { label: "5", value: "day_5" }
                  ]}
                  defaultValue={this.state.previewImage}
                  containerStyle={{
                    height: 40,
                    borderRadius: RFValue(20),
                    
                    marginHorizontal: RFValue(10),
                    bootom:200
                  }}
                  onOpen={() => {
                    this.setState({ dropdownHeight: 170 });
                  }}
                  onClose={() => {
                    this.setState({ dropdownHeight: 40 });
                  }}
                  style={{ backgroundColor: "black" }}
                  itemStyle={{
                  justifyContent: "flex-start"

                  }}
                  dropDownStyle={{
                    backgroundColor: "black"
                  }}
                  labelStyle={{
                    color:"white",
                    fontSize:20,
                    fontWeight:"bold"
                  }}
                  onChangeItem={item =>
                    this.setState({
                      previewImage: item.value
                    })
                  }
                 
                />  
                <Image
                source={preview_text[this.state.previewImage]}
                style={styles.previewImage}
              ></Image>
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
    bottom:RFValue(40),
    borderRadius:300,
    left:RFValue(10),
    borderWidth:3,
    borderColor:"#ff0266"
  },
  
  dropDown:{
    bottom:50,
  },
  previewImage:{
    width:350,
    height:250,
    borderRadius:20,
    top:25,
    alignSelf:"center"
  },
  headerText:{
    fontSize:40,
    position:"absolute",
    top:25,
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
    resizeMode:"contain",
    bottom:60,
    alignSelf:"center",
    borderRadius:20
   
  }
  

})

