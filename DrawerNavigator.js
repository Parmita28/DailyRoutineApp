import React, { Component } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
//import CustomSidebarMenu from "../screens/CustomSidebarMenu"
//import StackNavigator from "./StackNavigator";
//import Profile from "../screens/Profile";
import DetailsScreen from "../screens/Details";
import firebase from 'firebase'

const Drawer = createDrawerNavigator();

export default class DrawerNavigator extends Component{
 constructor(props) {
   super(props);
    this.state = {
      
    }
 }

  componentDidMount() {
  }

render() {
  return (
    <Drawer.Navigator
     drawerContentOptions = {{
       activeTintColor: "#e91e63",
       inactiveTintColor: "black",
       itemStyle: {marginVertical: 5}
     }}
      drawerContent = {(props) => <CustomSidebarMenu {...props}/>}>
      <Drawer.Screen
        name="Home"
        component={StackNavigator}
        options={{ unmountOnBlur: true }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{ unmountOnBlur: true }}
      />
      <Drawer.Screen
        name="Details"
        component={DetailsScreen}
        options={{ unmountOnBlur: true }}
      />
    </Drawer.Navigator>
  );
 }
}