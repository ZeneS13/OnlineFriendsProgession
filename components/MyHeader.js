import React, { Component} from 'react';
import { Header,Icon,Badge } from 'react-native-elements';
import { View, Text, StyeSheet ,Alert} from 'react-native';
import db from '../config'

import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';

export default class MyHeader extends React.Component{
  constructor(props){
    super(props)
    this.state={
      unreadValue:""
    }
  }

 /* getNumberOfUnreadNotifications=()=>{
    db.collection("all_notifications").where("notifaction_status" ,"==", "unread").onSnapshot((snapshot)=>{
      var unreadNotification=snapshot.docs.map((doc)=>{
        doc.data()
      })
      this.setState({
       unreadValue:unreadNotification.length
      })
    })
  }

componentDidMount=()=>{
  this.getNumberOfUnreadNotifications()
}

 BellIconWithBadge=()=>{
  return(
    <View>
      <Icon name='bell-o' type='font-awesome' color='#696969' size={25}
        onPress={() =>this.props.navigation.navigate('Notification')}/>
       <Badge
        value={this.state.unreadValue}
        status="success"
       containerStyle={{ position: 'absolute', top: -4, right: -4 }}/>
    </View>
  )
}
 */


render(){
  return (
    <Header
      leftComponent={<Icon name='ellipsis-v' type='font-awesome' color='#696969'  onPress={() => this.props.navigation.toggleDrawer()}/>}
      centerComponent={{ text: this.props.title, style: { color: '#90A5A9', fontSize:RFValue(20),fontWeight:"bold", } }}
      
      backgroundColor = "#eaf8fe"
    />
  );
  }
}