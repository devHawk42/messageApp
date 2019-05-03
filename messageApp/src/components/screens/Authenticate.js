import React, { Component } from 'react';
import config from '../../config';
import { View, Text, StyleSheet, ActivityIndicator, TextInput} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

class Authenticate extends Component {
    constructor(){
        super();
        this.state = {
            messages : '', 
            showActivityIndicator: true,
            credentials: {
                email: 'lalalal@lofi.com',
                password: 'lofi'
            }
        };
    };

    componentDidMount(){
        this.register();
        this.readIdOnAsyncStorage();
    }

    storeIdOnAsyncStorage = async (id) => {
        try {
            await AsyncStorage.setItem(config.userIdKey, id);
        } catch (error) {
            alert(JSON.stringify(error))
        }
    };

    readIdOnAsyncStorage = async () => {
        try {
            const value = await AsyncStorage.getItem(config.userIdKey);
            if(value !== null){
                alert(JSON.stringify(value))
            }else{
                alert(JSON.stringify(value))
            }
        } catch (error) {
            alert(JSON.stringify(error))
        }
    };

    //authenticateMethod
    register(){
        return fetch(`${config.baseUrl}signup`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(this.state.credentials),
        })
        .then((response) => {
            return response.json();
        })
        .then(responseJson => {
            this.setState({ 
                showActivityIndicator: false
            });
            return this.storeIdOnAsyncStorage(responseJson.data._id);
        })
        .catch(err => {
            alert(err)
            this.setState({
                showActivityIndicator: false
            });
        });
    };

    login(){
        return fetch(`${config.baseUrl}login`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(this.state.credentials),
        })
        .then((response) => {
            return response.json();
        })
        .then(responseJson => {
            this.setState({ 
                showActivityIndicator: false
            });
            return this.storeIdOnAsyncStorage(responseJson.data._id);
        })
        .catch(err => {
            alert(err)
            this.setState({
                showActivityIndicator: false
            });
        });
    };

    render() {
        return <TextInput style={styles.container}>Authenticate page</TextInput>;
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

export default Authenticate;