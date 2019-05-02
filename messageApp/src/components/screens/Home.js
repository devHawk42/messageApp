import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import config from '../../config';
import  { Message } from '../view';

class Home extends Component {
    constructor(){
        super();
        this.state = {
            showActivityIndicator:true,
            messages: []
        };
    };

    componentDidMount() {
        return fetch(`http://localhost:3000/message`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json'
            }
        })
        .then((response) => {
            return response.json();
        })
        .then(responseJson => {
            this.setState({ 
                messages : responseJson.data, 
                showActivityIndicator: false
            })
        })
        .catch(err => {
            //alert(err)
            this.setState({
                showActivityIndicator: false
            })
        })
    }
    

    render() {
        const {messages} = this.state;
        const lastIndex = (messages.length) - 1 ;

        return (
            <View style={styles.container}>
            {
                (this.state.showActivityIndicator) ?
                    <ActivityIndicator animating size= 'large'/> :
                    null
            }
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