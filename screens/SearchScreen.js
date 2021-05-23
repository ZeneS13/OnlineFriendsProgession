import * as React from 'react'

import { List } from 'react-native-paper';

import {Text,View,TouchableOpacity,StyleSheet,FlatList,TextInput} from 'react-native'
import db from "../config"
import * as firebase from "firebase"

export default class SearchScreen extends React.Component{
    constructor(){
     super()
     this.requestRef=null
     this.state={
         allUsersList:[],
         emailId:firebase.auth().currentUser.email,
     }


    }
    getAllUsers=async ()=>{
        
        this.requestRef= await db.collection("users").where("userid","!=",this.state.emailId).get().then(
                (query)=>{
                  var allUsers=[]
                 query.forEach((doc)=>{
                     allUsers.push(doc.data)
                  console.log(allUsers)  
                })
                this.setState({
                    allUsersList:allUsers
              })
            }
        )
    }

    renderItem=async(item,index)=>{
     return(
         <View>
        <List.Item
        title={item.username}
        description={"Likes: "+item.likes+ " Dislikes: "+item.dislikes}
      />
      <TouchableOpacity>
          <Text>Add friend</Text>
      </TouchableOpacity>
      </View>
     ) 
    }

  componentDidMount=async()=>{
      this.getAllUsers()
  }

  componentWillUnmount=()=>{
      this.requestRef=null
  }

    render(){
        return(
        <View>
          <TextInput
          placeholder={"Search "}/>

        <TouchableOpacity>
            <Text>
                Search Results
            </Text>
        </TouchableOpacity>
        {this.state.allUsersList.length===0?(<Text>
                No records available
            </Text>):(
                <View>
                    <FlatList
                    data={this.state.allUsersList}
                    renderItem={this.renderItem}
                    keyExtractor={(item,index)=>{
                      index.toString()
                      console.log(item)
                    }}
                    />
                </View>
            )}


        </View>
       )
    }
    
}