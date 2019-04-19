import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Message = props => {
    const style = [];
    
    style.push(styles.message);

    if (props.last) {
        style.push({borderBottomWidth: StyleSheet.hairlineWidth});
    }

    return (
        <View style = {style}>
            <Text>{props.fromUser}</Text>
            <Text>{props.toUser}</Text>
            <Text>{props.message}</Text>
            <Text>{props.dateTime.toString()}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    message : {
        width: 100+'%',
        borderTopWidth: StyleSheet.hairlineWidth,
        borderColor: 'rgb(64,64,64)'
    }
});

export default Message;