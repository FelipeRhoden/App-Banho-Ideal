import React from 'react';
import { View, Text} from 'react-native';

import Clock from '../Clock';
import ButtonToggle from '../ButtonToggle';
import Menu from '../Menu';

import ButtonStart from '../../assets/ButtonStart.png';
import ButtonStop from '../../assets/ButtonStop.png';
import ButtonMenu from '../../assets/ButtonMenu.png';
import ButtonCloseMenu from '../../assets/ButtonCloseMenu.png';

export default class Main extends React.Component {
   
    _min = 0;
    _sec = 0;
    _timer = 0;

    constructor(props){
        try{
            super(props);

            this.openMenu = this.openMenu.bind(this);
            this.closeMenu = this.closeMenu.bind(this);
            this.stopTimer = this.stopTimer.bind(this);
            this.startTimer = this.startTimer.bind(this);
            this.updatem3 = this.updatem3.bind(this);
            this.updateKHw = this.updateKHw.bind(this);
            this.updateWatts = this.updateWatts.bind(this);
            this.calcWater = this.calcWater.bind(this);
            this.calcLigth = this.calcLigth.bind(this);

            this.state = {
                timer: '00:00',
                m3: 0,
                KHw: 0,
                Watts: 0,
                showMenu: false,
                water: 0,
                ligth: 0,
                pictureStart : ButtonStart,
                pictureMenu : ButtonMenu,
                triggerStart : this.startTimer,
                triggerMenu : this.openMenu,
            };
        }catch(err){
            console.log(`Error in constructor \n -> ${err}`)
        }
    }

    openMenu(){
        try{
            this.setState({showMenu: true, pictureMenu: ButtonCloseMenu, triggerMenu: this.closeMenu});
        }catch(err){
            console.log(`Error in openMenu() \n -> ${err}`);
        }
    }

    closeMenu(){
        try{
            this.setState({showMenu: false, pictureMenu: ButtonMenu, triggerMenu: this.openMenu});
        }catch(err){
            console.log(`Error in closeMenu() \n -> ${err}`)
        }
    }

    stopTimer(){
        try{
            clearInterval(this._timer);
            this.setState({pictureStart: ButtonStart, triggerStart: this.startTimer})
        }catch(err){
            console.log(`Error in stopTimer() \n -> ${err}`)
        }
    }

    startTimer(){
        try{
            this._sec = 0;
            this._min = 0;
            this.setState({timer:"00:00", pictureStart: ButtonStop, triggerStart: this.stopTimer});
            this._timer = setInterval(()=>{
                if(this._sec >= 59){
                    this._sec = 0;
                    this._min++;
                }else{
                    this._sec++;
                }
                    const min = `${this._min}`.length >= 2 ? `${this._min}` : `0${this._min}`;
                    const sec = `${this._sec}`.length >= 2 ? `${this._sec}` : `0${this._sec}`;
                this.setState({timer: `${min}:${sec}`});

                this.calcLigth();
                this.calcWater();
            },1000)
        }catch(err){
            console.log(`Error in StartTimer(): \n -> ${err}`);
        }
    }

    updatem3(m3){
        if (!isNaN(parseFloat(m3)) || (m3 === '')){
            this.setState({m3});
        }
    }

    updateKHw(KHw){
        if (!isNaN(parseFloat(KHw)) || (KHw === '')){
            this.setState({KHw});
        }
    }

    updateWatts(Watts){
        if (!isNaN(parseFloat(Watts)) || (Watts === '')){
            this.setState({Watts});
        }
    }

    calcWater(){
        try{
            if (this.state.m3 === '') this.setState({m3: 0});
            if (this.state.KHw === '') this.setState({KHw: 0});
            if (this.state.Watts === '') this.setState({Watts: 0});
            //conversão de minitos e segundos em minutos
            const time = this._min + (this._sec/60);
            //Calculo função luz f(t)=t*v*0,012
            //t = tempo em minutos
            //v = valor em metros cubicos de água m3 
            this.setState((state)=>({
                water : (time * parseFloat(state.m3) * 0.012)
                .toFixed(2)
            }));
        }catch(err){
            console.log(`Error in calcWater() \n -> ${err}`);
        }
    }

    calcLigth(){
        try{
            if (this.state.m3 === '') this.setState({m3: 0});
            if (this.state.KHw === '') this.setState({KHw: 0});
            if (this.state.Watts === '') this.setState({Watts: 0});
            //conversão de minitos e segundos em minutos
            const time = this._min + (this._sec/60);
            //Calculo função luz f(t)=t*p*v/60000
            //t = tempo em minutos
            //v = valor em KWh (valor cobrado pela companhia elétrica)
            //p = valor em Watts (potencia do chuveiro) 
            this.setState((state)=>({ligth : 
                ((time * parseFloat(state.Watts) * parseFloat(state.KHw))/60000)
                .toFixed(2)
            }));
        }catch(err){
            console.log(`Error in calcLigth() \n -> ${err}`);
        }  
    }


    render(){
        return (
            <View>
                <Clock timer={this.state.timer} />
                <Text>Água: {this.state.water}</Text>
                <Text>Luz: {this.state.ligth}</Text>
                <ButtonToggle trigger={this.state.triggerStart} picture={this.state.pictureStart}/>
                <ButtonToggle trigger={this.state.triggerMenu} picture={this.state.pictureMenu} />

                {this.state.showMenu && 
                    <Menu 
                        m3={`${this.state.m3}`}
                        m3OnChange={this.updatem3}
                        KHw={`${this.state.KHw}`}
                        KHwOnChange={this.updateKHw}
                        Watts={`${this.state.Watts}`}
                        WattsOnChange={this.updateWatts}
                    />
                }
            </View>
        );
    }

}