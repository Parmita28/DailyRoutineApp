import React, { Component } from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Platform, StatusBar, 
 ImageBackground, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "../navigators/DrawerNavigator";

export default class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <ImageBackground source={require('../assets/bg.jpg')} style={styles.backgroundImage}>
                    <View style={styles.titleBar}>
                        <Text style={styles.titleText}>Daily Routine App</Text>
                    </View>
                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("Todo")
                    }>
                        <Text style={styles.routeText}>Work To-Do</Text>
                        <Image source={require("../assets/iss_icon.png")} style={styles.iconImage}></Image>
                    </TouchableOpacity>
                  
                    <TouchableOpacity style={styles.routeCard} onPress={() =>
                        this.props.navigation.navigate("Done")
                    }>
                        <Text style={styles.routeText}>Work Done</Text>
                        <Image source={require("../assets/rocket_icon.png")} style={styles.iconImage}></Image>
                    </TouchableOpacity>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    routeCard: {
        flex: 0.25,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 50,
        borderRadius: 30,
        backgroundColor: 'white'
    },
    titleBar: {
        flex: 0.15,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: 40,
        fontWeight: "bold",
        color: "black"
    },
    routeText: {
        fontSize: 35,
        fontWeight: "bold",
        color: "black",
        marginTop: 75,
        paddingLeft: 30
    },
    iconImage: {
        position: "absolute",
        height: 200,
        width: 200,
        resizeMode: "contain",
        right: 20,
        top: -80
    }
});