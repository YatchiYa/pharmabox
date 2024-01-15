

import React, {useState, useEffect} from 'react';
import { Text, View } from 'react-native';  
import { SafeAreaView, StyleSheet, TouchableWithoutFeedback, Keyboard, TextInput, FlatList, Pressable, ImageBackground } from "react-native";

import MaterialCommunityIcons, {AntDesign} from 'react-native-vector-icons/MaterialCommunityIcons'; 
import Icon from 'react-native-vector-icons/EvilIcons';

import Background from "../components/Background"

const Item = ({ title, desc }) => (
  <View style={{
    flexDirection:"row", alignItems:"center", padding:15
  }} >
    
    <MaterialCommunityIcons name="pill" color={"black"} size={30} />
    <View style={{
      marginLeft:10,
      flexShrink: 1
    }} >
      <Text style={{
        fontWeight: "700"
      }}>{title}</Text>
      <Text style={{
        fontSize:12
      }}>{desc}</Text>
    </View>
  </View>
);


export default function Feed(props) {
   
  const [input, setInput] = useState("")
  const [dataDisplay, setDD] = useState("")
  const [data, setData] = useState([
    {
      "id": 1,
      "title" : "paracetamol",
      "desc" : "hello there"
    },
    {
      "id": 5,
      "title" : "paracetamolore",
      "desc" : "hello therevfevfd"
    },
    {
      "id": 2,
      "title" : "ifef",
      "desc" : "dretgr"
    },
    {
      "id": 3,
      "title" : "reradbt",
      "desc" : "dretgr"
    }
  ])


  const onChangeText = async (text) => {
    setInput(text)

    var tmp = []
    if (text.length === 0) return setDD([])
    if (text.length > 2){
      data.forEach(elem => {
        if (elem.title.includes(text.toLowerCase())){
          tmp.push(elem)
        }
      })
      console.log(tmp)
      if (data.length >0)
        setDD(tmp)
    }
  }

  const renderItem = ({ item }) => (
    <Item title={item.title} desc={item.desc}  />
  );

  return (
    <ImageBackground style={ styles.imgBackground } 
                     resizeMode='cover' 
                     source={require('../../assets/img/medoc.jpg')}>
                      
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} >
      <SafeAreaView style={{
          flex: 1, justifyContent: 'center', backgroundColor: "white"
        }} >
        <Text style={styles.title} > Chercher un Médicament </Text>
        
        <View style={styles.searchSection} >
          <Icon style={styles.searchIcon} name="search" size={30} color="#900" /> 
          <TextInput 
            onPressIn={(e) => { 

              props.navigation.reset({
                index: 0,
                routes: [{ name: 'Main' }],
              })
              props.navigation.replace('Search')

            }}
            placeholder='Aspirine...'
            value={input}
            onChangeText={onChangeText}
            style={styles.input}
          /> 
        </View>
        
        <FlatList
          data={dataDisplay}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
  

      </SafeAreaView>
    </TouchableWithoutFeedback>
                     </ImageBackground>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    marginBottom: 16,
    marginTop: 16,
    width: "100%",
    textAlign: "center",
    fontFamily: "Montserrat"
  },
  inputSecond:{
    height: 50,
    fontSize: 16,
    marginHorizontal: 30,
    borderWidth : 1,
    borderColor: "#52db5d",
    paddingHorizontal : 10,
    borderRadius : 15,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#424242',
  },
  searchSection: {
    flexDirection: 'row',
    height: 50,
    fontSize: 16,
    marginHorizontal: 30,
    borderWidth : 1,
    borderColor: "#52db5d",
    paddingHorizontal : 10,
    borderRadius : 15,
  },
  searchIcon: {
    position:"relative",
    top:10,
    fontSize: 35,
    marginRight: 15,
    color:"#52db5d"
  },
  imgBackground: {
    width: '100%',
    height: '100%',
    flex: 1 
},
});