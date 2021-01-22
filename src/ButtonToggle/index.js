import React, { useState } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

export default class ButtonToggle extends React.Component {

    constructor(props){
        props = props || {};
        props.trigger1 = props.trigger1 || (()=>{});
        props.trigger2 = props.trigger2 || (()=>{});
        props.picture = props.picture || '';
        super(props);

        this.state = {
            toggle : true,
        }
    }

    toggle(){
        this.setState({toggle : !this.state.toggle});
    }

    render(){
        return(
            <View>
                {this.state.toggle
                ?
                <TouchableOpacity onPress={this.props.trigger1}>
                    <Image source={this.props.picture}/>
                </TouchableOpacity>
                :
                <TouchableOpacity onPress={this.props.trigger2}>
                    <Image source={this.props.picture}/>
                </TouchableOpacity>
                }
            </View>
        );
    }
}