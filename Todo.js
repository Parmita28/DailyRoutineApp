import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Platform,
    StatusBar,
    ImageBackground,
    Alert,
    Image
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class TodoScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            location: {}
        };
    }

    render() {
            return (
                <View style={styles.container}>
                    <SafeAreaView style={styles.droidSafeArea} />
                    <ImageBackground source={require('../assets/bg.jpg')} style={styles.backgroundImage}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.titleText}>To-Do List</Text>
                        </View>
                        <View style={styles.refeshContainer}>
                            <TouchableOpacity style={{ width: 100, height: "100%", alignItems: "center" }} onPress={() =>
                                this.setState({})
                            }>
                                <Image source={require("../assets/refresh_icon.png")} style={{ width: 50, height: 50 }}></Image>
                            </TouchableOpacity>
                        </View>
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
    titleContainer: {
        flex: 0.1,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: 30,
        fontWeight: "bold",
        color: "black"
    },
    refeshContainer: {
        flex: 0.1,
        justifyContent: "center",
        alignItems: "center"
    }
});