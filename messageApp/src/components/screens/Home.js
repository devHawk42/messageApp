import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import config from '../../config';
import  { Message } from '../view';

class Home extends Component {
    render() {
    
        const messages = [
            {
                toUser: 'nico',
                fromUser: 'pablo',
                message: 'messageApp is awesome',
                dateTime: new Date(),
            },
            {
                toUser: 'nico',
                fromUser: 'pablo',
                message: 'messageApp is awesome',
                dateTime: new Date(),
            },{
                toUser: 'nico',
                fromUser: 'pablo',
                message: 'messageApp is awesome',
                dateTime: new Date(),
            },{
                toUser: 'nico',
                fromUser: 'pablo',
                message: 'messageApp is awesome',
                dateTime: new Date(),
            },{
                toUser: 'nico',
                fromUser: 'pablo',
                message: 'messageApp is awesome',
                dateTime: new Date(),
        }];

        const lastIndex = (messages.length) - 1 ;

        return (
            <View style={styles.container}>
                {messages.map((message, i) => {
                    const last = i == lastIndex;
                    return <Message last={last} {...message}/>
                })}
            </View>
        );
    }
}

const styles = {
    container: {
        width: 100+'%',
        height: 100+'%',
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    }
};

export default Home;