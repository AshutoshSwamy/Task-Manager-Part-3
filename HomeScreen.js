import * as React from 'react';
import { StyleSheet, Text, View , KeyboardAvoidingView } from 'react-native';
import firebase from 'firebase';

export default class HomeScreen extends React.Component{

 constructor(){
  super();
  this.state = {
   taskId = "",
   taskName = "",
   taskDescription = ""
  }
 }

 render(){
  return(
   <View>
    <KeyboardAvoidingView style = {{
            alignItems : "center",
            marginTop : 50,

        }}>
            <View>
                <Text style = {styles.title}> Task Manager App </Text>
            </View>
            
        <View>
            <TextInput styles = {styles.addTask}
            placeholder = "Task Name"
            keyboardType = "text"
            onChangeText = {(text)=>{
                this.setState({
                    taskName : text,
                })
            }}
            />

<TextInput styles = {styles.addTask}
            placeholder = "Task Description"
            multiLine = {true}
            onChangeText = {(text)=>{
                this.setState({
                    taskDescription : text,
                })
            }}
            />

            <TouchableOpacity style = {styles.addButton}
            onPress = {()=>{
                this.addTask()
            }}
            >
                <Text style = {{textAlign : "center"}}>Add Task</Text>
            </TouchableOpacity>

            <TouchableOpacity style = {styles.addButton}
            onPress = {()=>{
                this.getTask()
            }}
            >
                <Text style = {{textAlign : "center"}}>My Tasks</Text>
            </TouchableOpacity>

        </View>
        </KeyboardAvoidingView>

   </View>
  )
 }
}