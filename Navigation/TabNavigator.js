import React,{Component} from "react"
import {View,Text,StyleSheet} from "react-native"
import { RFValue } from "react-native-responsive-fontsize";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import NotesScreen from "../screens/NotesScreen"
import MapScreen from "../screens/MapScreen"
import HomeScreen from "../screens/Homescreen"
import YogaScreen from "../screens/YogaScreen"
import DrawerNavigator from "./DrawerNavigator"


const Tab = createMaterialBottomTabNavigator();

export default class BottomTabNavigator extends Component{
  constructor(props) {
    super(props);
    this.state = {
      isUpdated: false
    };
  }
  renderFeed = props => {
    return <HomeScreen setUpdateToFalse={this.removeUpdated} {...props} />;
  };

  renderStory = props => {
    return <NotesScreen setUpdateToTrue={this.changeUpdated} {...props} />;
  };

  changeUpdated = () => {
    this.setState({ isUpdated: true });
  };

  removeUpdated = () => {
    this.setState({ isUpdated: false });
  };
  render(){
     return (

      <Tab.Navigator
        labeled={true}
        activeColor="#f0edf6"
          inactiveColor="#3e2465"
        barStyle={{
          backgroundColor: "black",
          height: "10%",
          borderTopLeftRadius: RFValue(20),
          borderTopRightRadius: RFValue(20),
          overflow: "hidden",
          position: "absolute",
         elevation: 20,

          
        }}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'Map') {
                        iconName = focused ? 'navigate' : 'navigate-outline';
                    }
                    else if (route.name === 'Notes') {
                        iconName = focused ? 'create' : 'create-outline';
                    }
                    else if (route.name === 'Yoga') {
                        iconName = focused ? 'walk' : 'walk-outline';
                    }
                    return <Ionicons name={iconName} size={RFValue(20)} color={"#ff0266"} />; 
                },
                
            })}
            tabBarOptions={{
 
            }}
        >
        <Tab.Screen 
            name="Home" 
            component={HomeScreen} 
            />
         <Tab.Screen 
            name="Map" 
            component={MapScreen} 
            />  
         <Tab.Screen 
            name="Yoga" 
            component={YogaScreen} 
            /> 
           <Tab.Screen 
            name="Notes" 
            component={NotesScreen} 
            />            
              
           
            
        </Tab.Navigator>
    );
  }
   
}


