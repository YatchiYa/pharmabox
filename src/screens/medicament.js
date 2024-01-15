import * as React from 'react';
import { View, ImageBackground, StyleSheet, Image } from 'react-native';
import { SafeAreaView, TouchableWithoutFeedback, Keyboard, TextInput, FlatList, Pressable } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator, } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import IconFeather from 'react-native-vector-icons/Feather';


import { Button, ButtonGroup, withTheme, Text } from '@rneui/themed';


export default function MedocScreen({ navigation }) {
    const [input, setInput] = React.useState("")


  return (
    

    <ImageBackground source={require("../../assets/img/backgroud_scond.png")} resizeMode="cover" style={styles.image}>
        
        <View style={styles.container}   >  
        </View>

        <View style={styles.container}   >  
        </View>


        <View style={styles.container}   >
            <Text style={styles.text} > Je cherche un médicament</Text>
        </View>

        <View style={styles.searchSection} >
          <Icon style={styles.searchIcon} name="search"   /> 
          <TextInput 
            onPressIn={(e) => { 
              navigation.navigate('Recherche de médicaments')
            }}
            placeholder='Aspirine...'
            value={input} 
            style={styles.input}
            placeholderTextColor='black'
          /> 
        </View>



        <View style={styles.containerThird}   > 
            <Button
              title="Chercher"
              titleStyle={{ fontWeight: '700' }}
              buttonStyle={{
                backgroundColor: '#40a9ff',
                borderColor: 'transparent',
                borderWidth: 0,
                borderRadius: 30,
              }}
              containerStyle={{
                width: 300,
                textAlign:"center"
              }}
              onPressIn={(e) => { 
                navigation.navigate('Recherche de médicaments')
              }}
            />
        </View>
        <View style={styles.containerbis}   >
            <Button
                style={styles.button}
                type="clear"
                title="Je scan mon médicament"
                onPress={() => navigation.navigate('Scanner un médicament')}
            />
        </View>


        <View style={styles.container}   > 
        </View>
        <View style={styles.container}   > 
        </View>
        <View style={styles.container}   > 
        </View>
    

    </ImageBackground>
                
  );
}



const styles = StyleSheet.create({
    container: {
      flex: 1, 
    },

    input: {
      flex: 1,
      paddingTop: 10,
      paddingRight: 10,
      paddingBottom: 10,
      paddingLeft: 0, 
      color: 'black',
      fontWeight: "600",
    },
    searchSection: {
      flexDirection: 'row',
      height: 50,
      fontSize: 16,
      marginHorizontal: 30,
      borderWidth : 1,
      borderColor: "#40a9ff",
      paddingHorizontal : 10,
      borderRadius : 15,
      color: 'black',
    },
    searchIcon: {
      position:"relative",
      top:8,
      fontSize: 30,
      marginRight: 15,
      color:"#40a9ff",
      marginBottom: 20
    },

    
    containerSecond: {
        flex: 1,
        alignItems: 'center', 
        width: "100%"
    },
    image: {
      flex: 1,
      justifyContent: "center",
      width: "100%",
      height: "100%"
    },  
    text: {
        position: "relative",
        fontSize: 21,
        textAlign: "center",
        width: "100%",
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
        color: "black"
    },
    textSecond: {
        position: "relative",
        fontSize: 17,
        textAlign: "center",
        width: "100%",
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
        color: "black"
    },
    containerThird : {
      position:"relative",
      width: "100%",
      marginTop: 30,
      marginBottom: 20, alignItems: 'center', justifyContent: 'center'
    },
    button:{
        position:"relative",
    },
    
  }); 