import React from 'react';
import { View } from 'react-native';

export default class Menu extends React.Component {
    constructor(props){
        props = props || {};
        props.m3 = props.m3 || 0;
        props.KHw = props.KHw || 0;
        props.Watts = props.Watts || 0;
        super(props);
    }

    render(){
        return (
        <View >
            <View></View>
            <View></View>
            <View></View>
            <View></View>
            <View></View>
            <View></View>
        </View>);
    }
}