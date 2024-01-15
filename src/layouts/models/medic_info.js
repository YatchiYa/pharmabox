

import React, {useState, useEffect} from 'react';
import { Text, View } from 'react-native';  
import { SafeAreaView, StyleSheet, TouchableWithoutFeedback, Keyboard, TextInput, FlatList, Pressable, ImageBackground, ScrollView } from "react-native";

import MaterialCommunityIcons, {AntDesign} from 'react-native-vector-icons/MaterialCommunityIcons'; 
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Avatar, Card, IconButton } from 'react-native-paper';


import axios from "axios"

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


export default function Feed({ route, navigation }) {

    const [data, setData] = useState({})

  function test(){

    console.log("call !!! ")
    let params = {id : route.params.itemId}
    // https://helloworld-orc6yx6f4a-lm.a.run.app
    // http://10.188.116.184:8080
    const url = 'https://helloworld-orc6yx6f4a-lm.a.run.app'
    axios
    .post(url + "/infoMedicaments", params)
      .then((res) =>{
          console.log("info medoc !! ") 
          console.log(res.data)
          setData(res.data[0])
        }
      )
      .catch(err => console.log(err))
      
  }
  
  React.useEffect(() => {
    test()
  }, []) 



  return ( 
                       
      <SafeAreaView style={{
          flex: 1, justifyContent: 'center', backgroundColor: "#f8f8f8", overflow:"scroll"
        }} > 
        <ScrollView>
        
        <View >
            <Text style={styles.title} >
                {data.title}
            </Text> 
        </View>
         
        <View style={styles.firstCard}>
            <Card style={styles.cardBox}>
                <View style={{   alignItems: 'center', flexDirection: 'row'}}>
                    <View style={styles.leftBox} >
                        <MaterialCommunityIcons name="office-building-cog-outline" color={"#278ef5"} size={25} style={{top: 3}} />  
                    </View>
                    <View>
                        <Text style={styles.titleCard} >Laboratoire</Text>
                        <Text style={styles.paragraph}>
                            sanofi Aventis France
                        </Text> 
                    </View>
                </View>

                <View style={{   alignItems: 'center', flexDirection: 'row', width: "100%", marginTop: 10}} >
                    <View style={styles.leftBox} >
                        <MaterialCommunityIcons name="decagram-outline" color={"#278ef5"} size={25} style={{top: 3}} />  
                    </View>
                    <View>
                        <Text style={styles.titleCardSecond} >Voie d'administration</Text>
                        <Text style={styles.paragraph}>
                            {data.mode_inhalation}
                        </Text> 
                    </View>
                </View>


                <View style={{   alignItems: 'center', flexDirection: 'row', width: "100%", marginTop: 10}}>
                    <View style={styles.leftBox} >
                        <MaterialCommunityIcons name="pill" color={"#278ef5"} size={25} style={{top: 3}} />  
                    </View>
                    <View>
                        <Text style={styles.titleCardSecond} >Forme pharmacetique</Text>
                        <Text style={styles.paragraph}>
                            {data.type}
                        </Text> 
                    </View>
                </View>

            </Card>
        </View>
 


        <View >
            <Text style={styles.SecondTitle} >
                Status
            </Text> 
        </View>
        <View style={styles.firstCard}>
            <Card style={styles.cardBox}>
                <View style={{   alignItems: 'center', flexDirection: 'row'}}>
                    <View style={styles.leftBox} >
                        <MaterialCommunityIcons name="check-decagram-outline" color={"#20c997"} size={25} style={{top: 3}} />  
                    </View>
                    <View>
                        <Text style={styles.titleCard} >État commercialisation</Text>
                        <Text style={styles.paragraph}>
                            {data.commercialisation}
                        </Text> 
                    </View>
                </View>

                <View style={{   alignItems: 'center', flexDirection: 'row', width: "100%", marginTop: 10}}>
                    <View style={styles.leftBox} >
                        <MaterialCommunityIcons name="check-decagram-outline" color={"#20c997"} size={25} style={{top: 3}} />  
                    </View>
                    <View>
                        <Text style={styles.titleCardSecond} >Statut AMM</Text>
                        <Text style={styles.paragraph}>
                            {data.mode_autorisation}
                        </Text> 
                    </View>
                </View>


                <View style={{   alignItems: 'center', flexDirection: 'row', width: "100%", marginTop: 10}}>
                    <View style={styles.leftBox} >
                        <MaterialCommunityIcons name="check-decagram-outline" color={"#20c997"} size={25} style={{top: 3}} />  
                    </View>
                    <View>
                        <Text style={styles.titleCardSecond} >Status BDM</Text>
                        <Text style={styles.paragraph}>
                            Disponible au grand publique
                        </Text> 
                    </View>
                </View>

            </Card>
        </View>


        <View >
            <Text style={styles.SecondTitle} >
                Description générale
            </Text> 
        </View>
        <View style={styles.firstCard}>
            <Card style={styles.cardBox}>
                <View style={{   alignItems: 'center', flexDirection: 'row'}}>
                    <View style={styles.leftBox} >
                        <MaterialCommunityIcons name="check-decagram-outline" color={"#20c997"} size={25} style={{top: 3}} />  
                    </View>
                    <View>
                        <Text style={styles.titleCard} >Présentation</Text>
                        <Text style={styles.paragraph}>
                            {data.description}
                        </Text> 
                    </View>
                </View>

                <View style={{   alignItems: 'center', flexDirection: 'row', width: "100%", marginTop: 10}}>
                    <View style={styles.leftBox} >
                        <Icon name="attach-money" color={"#20c997"} size={25} style={{top: 3}} />  
                    </View>
                    <View>
                        <Text style={styles.titleCardSecond} >Prix pharmacie</Text>
                        <Text style={styles.paragraph}>
                            2,90 € (Romboursé à 65%)
                        </Text> 
                    </View>
                </View>
 

            </Card>
        </View>


        <View >
            <Text style={styles.SecondTitle} >
                Composition
            </Text> 
        </View>
        <View style={styles.firstCard}>
            <Card style={styles.cardBox}>
                <View style={{   alignItems: 'center', flexDirection: 'row'}}>
                    <View style={styles.leftBox} >
                        <MaterialCommunityIcons name="check-decagram-outline" color={"#20c997"} size={25} style={{top: 3}} />  
                    </View>
                    <View>
                        <Text style={styles.titleCard} >État commercialisation</Text>
                        <Text style={styles.paragraph}>
                            Commercialisé
                        </Text> 
                    </View>
                </View>

                <View style={{   alignItems: 'center', flexDirection: 'row', width: "100%", marginTop: 10}}>
                    <View style={styles.leftBox} >
                        <MaterialCommunityIcons name="check-decagram-outline" color={"#20c997"} size={25} style={{top: 3}} />  
                    </View>
                    <View>
                        <Text style={styles.titleCardSecond} >Statut AMM</Text>
                        <Text style={styles.paragraph}>
                            Autorisation active
                        </Text> 
                    </View>
                </View>


                <View style={{   alignItems: 'center', flexDirection: 'row', width: "100%", marginTop: 10}}>
                    <View style={styles.leftBox} >
                        <MaterialCommunityIcons name="check-decagram-outline" color={"#20c997"} size={25} style={{top: 3}} />  
                    </View>
                    <View>
                        <Text style={styles.titleCardSecond} >Status BDM</Text>
                        <Text style={styles.paragraph}>
                            Disponible au grand publique
                        </Text> 
                    </View>
                </View>

            </Card>
        </View></ScrollView>

      </SafeAreaView> 
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    marginBottom: 0, 
    width: "100%",
    fontWeight: "700",
    fontFamily: "Montserrat",
    color: "#434446",
    marginHorizontal: 22,
    marginTop: 16
  }, 
  SecondTitle: {
    fontSize: 16,
    marginBottom: -15, 
    width: "100%",
    fontWeight: "700",
    fontFamily: "Montserrat",
    color: "#a6a6a6",
    marginHorizontal: 22
  }, 
  paragraph : {
    color: 'black'
  },
  firstCard: {
    position:"relative",
    padding: 22
  },
  cardBox: {
    position:"relative",
    padding: 10, 
    flexDirection: 'row',
  },
  titleCard : {
    position:"relative",
    color: "#278ef5",
    fontSize: 11,
    fontFamily: "Montserrat",
    fontWeight: "500",
    marginBottom: 5
  },
  leftBox: {
    position:"relative",
    marginRight: 10,
    color: "#71f08e"
  },
  titleCardSecond: {
    position:"relative",
    color: "#278ef5",
    fontSize: 11,
    fontFamily: "Montserrat",
    fontWeight: "500",
    marginBottom: 5,
    borderTopColor: "#d0d0d0",
    borderTopWidth: 1,
    paddingTop: 10
  }
});