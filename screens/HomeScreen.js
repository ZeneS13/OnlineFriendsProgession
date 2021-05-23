import * as React from 'react'
import {Header, ThemeConsumer} from 'react-native-elements'
import {Text,TextInput,TouchableOpacity,StyleSheet,View,Modal,Alert} from 'react-native'
import db from '../config'
import * as firebase from 'firebase'

export default class HomeScreen extends React.Component{
    constructor(){
        super()
        this.state={
            username:"",
            contact:"",
            city:"",
            country:"",
            likes:"",
            dislikes:"",
            emailId:firebase.auth().currentUser.email,
            

        }
    }
    addUserDetails=()=>{
        db.collection("users").add({
            'username':this.state.username,
            'contact':this.state.contact,
            'city':this.state.city,
            'country':this.state.country,
            'likes':this.state.likes,
            'dislikes':this.state.dislikes,
            'userid':this.state.emailId

        })
       Alert.alert("User details successfully added")
    }

    render(){
        return(
            <View>
            <Header
            centerComponent={{text:"Home", style:{color:"blue"}}}/>  
  
            <TextInput 
            placeholder={"UserName"}
            onChangeText={(text)=>{
                this.setState({username:text})
            }} /> 

            <TextInput
            placeholder={"Contact"}
            onChangeText={(text)=>{
                this.setState({contact:text})
            }}/>

            <TextInput
            placeholder={"City"}
            onChangeText={(text)=>{
                this.setState({city:text})
            }}/>

            <TextInput
            placeholder={"Country"}
            onChangeText={(text)=>{
                this.setState({country:text})
            }}/>

            <TextInput
            placeholder={"Likes"}
            onChangeText={(text)=>{
                this.setState({likes:text})
            }}/>

            <TextInput
            placeholder={"Dislikes"}
            onChangeText={(text)=>{
                this.setState({dislikes:text})
            }}/> 
  



           <TouchableOpacity
              style={{marginTop:100, marginLeft:100, backgroundColor:"black"}}
              onPress={()=>{
                  this.addUserDetails()
              }}
              >
              <Text >
              Submit Details
            </Text>
           </TouchableOpacity>
             
          
  
          </View>
        )
    }
    
}