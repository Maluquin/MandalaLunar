import React, {Component} from "react";
import {View, Text, StyleSheet} from 'react-native';



export default class NewDay extends Component {
    render (){
        return(

            <View style={styles.container}>
                <Text>
                    Tela de novo dia 
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center'
    }
})