import * as React from 'react'
import {Text,TextInput,TouchableOpacity,View,StyleSheet,Modal} from 'react-native'
import{Image} from 'react-native-elements'
export default class UpdateProfileScreen extends React.Component{
    render(){
        return(
       <View>
           <TextInput
           placeholder={"City"}/>
           <TextInput
           placeholder={"Country"}/>
           <TextInput
           placeholder={"Likes"}/>
           <TextInput
           placeholder={"Dislikes"}/>

           <TouchableOpacity>
               <Text>
                   Update Details
               </Text>
           </TouchableOpacity>
       </View>
       )
    }
    
}