

import React, {useState, useEffect} from 'react';
import { Alert, Text, View } from 'react-native';  
import { SafeAreaView, StyleSheet, TouchableWithoutFeedback, Keyboard, TextInput, FlatList, Pressable, ImageBackground, 
  TouchableOpacity, } from "react-native";

import MaterialCommunityIcons, {AntDesign} from 'react-native-vector-icons/MaterialCommunityIcons'; 
import Icon from 'react-native-vector-icons/EvilIcons';

import axios from "axios"

const Item = ({ title, desc }) => (
  <View style={{
    flexDirection:"row", alignItems:"center", padding:15
  }}
   >
    
    <MaterialCommunityIcons name="pill" color={"black"} size={30} />
    <View style={{
      marginLeft:10,
      flexShrink: 1
    }} >
      <Text style={{
        fontWeight: "700",
        color:"black"
      }}>{desc}</Text>
      <Text style={{
        fontSize:12,
        color:"black"
      }}>id : {title}</Text>
    </View>
  </View>
);


export default function Feed({ navigation }) {
   
  const [input, setInput] = useState("")
  const [dataDisplay, setDD] = useState("")
  const [data, setData] = useState([
    {
      "id" : 434343,
      "reference" : 3400931384144,
      "description" : 'dfrgtrf'
    }
  ])


  const onChangeText = async (text) => {
    setInput(text)

    var tmp = []
    if (text.length === 0) return setDD([])
    if (text.length > 2){
      data.forEach(elem => { 

        if (elem.description.includes(text.toLowerCase())){
          tmp.push(elem)
        }
      })  
      if (tmp.length > 0)
        setDD(tmp)
    }
  }

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={elem => navigation.navigate('Details du Medédicament', {
      itemId: item.reference,
      title: item.description
    })} >
     <Item title={item.reference} desc={item.description} />
    </TouchableOpacity>
  );


  function test(){

    console.log("call !!! ")
    const url = 'https://helloworld-orc6yx6f4a-lm.a.run.app'
    axios
    .get(url + "/medicaments")
      .then((res) =>{
          console.log("good !! ")
          console.log(res.data)
          setData(res.data)
        }
      )
      .catch(err => console.log(err))
      
  }
  
  React.useEffect(() => {
    test()
  }, []) 


  return ( 
                      
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} >
      <SafeAreaView style={{
          flex: 1, justifyContent: 'center', backgroundColor: "white"
        }} > 
        
        <View style={styles.searchSection} >
          <Icon style={styles.searchIcon} name="search" size={30} color="#900" /> 
          <TextInput 
            placeholder='Aspirine...'
            value={input}
            onChangeText={onChangeText}
            style={styles.input}
            placeholderTextColor='black'
            
          /> 
        </View>
        
        <FlatList
          data={dataDisplay}
          renderItem={renderItem}
          keyExtractor={(item, index) => index}
        />
  

      </SafeAreaView>
    </TouchableWithoutFeedback> 
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    marginBottom: 16,
    marginTop: 16,
    width: "100%",
    textAlign: "center",
    fontFamily: "Montserrat",
    color: "black"
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
    color: '#424242',
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
  },
  searchIcon: {
    position:"relative",
    top:8,
    fontSize: 30,
    marginRight: 15,
    color:"#40a9ff",
    marginBottom: 20
  },
  imgBackground: {
    width: '100%',
    height: '100%',
    flex: 1 
},
});