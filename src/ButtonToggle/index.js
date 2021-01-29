import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

export default class ButtonToggle extends React.Component {

    constructor(props){
        props = props || {};
        props.trigger = props.trigger || (()=>{});
        props.picture = props.picture || '';
        super(props);
    }

    render(){
        return(
            <View>
                <TouchableOpacity onPress={this.props.trigger}>
                    <Image source={this.props.picture}/>
                </TouchableOpacity>
            </View>
        );
    }
}