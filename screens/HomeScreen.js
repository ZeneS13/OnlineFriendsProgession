import * as React from 'react'
import {Header, ThemeConsumer} from 'react-native-elements'
import {Text,TextInput,TouchableOpacity,StyleSheet,View,Modal,Alert} from 'react-native'
import db from '../config'
import * as firebase from 'firebase'
import MyHeader from '../components/MyHeader'

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
            <MyHeader
            title="Home"/>  
  
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
            multiline={true}
            onChangeText={(text)=>{
                this.setState({likes:text})
            }}/>

            <TextInput
            placeholder={"Dislikes"}
            multiline={true}
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