import React from 'react';
import {View, Text} from 'react-native';

export default class Clock extends React.Component {
    constructor(props){
        props = props || {};
        props.timer = props.timer || '';
        super(props);
    }

    render(){
        return(
            <View>
                <Text>{this.props.timer}</Text>
            </View>
        );
    }
} 