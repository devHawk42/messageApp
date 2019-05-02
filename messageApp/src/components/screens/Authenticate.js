import React, { Component } from 'react';
import config from '../../config';
import { View, Text, StyleSheet, ActivityIndicator, TextInput, AsyncStorage} from 'react-native';

class Authenticate extends Component {
    constructor(){
        super();
        this.state = {
            messages : '', 
            showActivityIndicator: true,
            crendetials: {
                email: '',
                password: ''
            }
        };
    };

    componentDidMount(){
        AsyncStorage.getItem(config.userIdKey)
        .then(rsp => {
            alert(JSON.stringify(rsp))
        })
    }

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
            return AsyncStorage.setItem(config.userIdKey, responseJson.data._id);
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
            return AsyncStorage.setItem(config.userIdKey, responseJson.data._id);
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