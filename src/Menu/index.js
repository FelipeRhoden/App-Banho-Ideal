import React from 'react';
import { View, Text, TextInput } from 'react-native';

import styles from './styles';

export default class Menu extends React.Component {
    constructor(props){
        props = props || {};
        props.m3 = props.m3 || 0;
        props.m3OnChange = props.m3OnChange || (() => {});
        props.KHw = props.KHw || 0;
        props.KHwOnChange = props.KHwOnChange || (() => {});
        props.Watts = props.Watts || 0;
        props.WattsOnChange = props.WattsOnChange || (() => {});
        super(props);
    }

    render(){
        return (
            <View >
                <Text>Água</Text>
                <TextInput
                    onChangeText={text => this.props.m3OnChange(text)}
                    value={this.props.m3}
                />
                <Text>Luz</Text>
                <TextInput
                    onChangeText={text => this.props.KHwOnChange(text)}
                    value={this.props.KHw}
                />
                <Text>Chuveiro</Text>
                <TextInput
                    onChangeText={text => this.props.WattsOnChange(text)}
                    value={this.props.Watts}
                />
            </View>
        );
    }
}