/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet, Text, View
} from 'react-native';


export class Field extends Component {
    static props:{
        name:string;
        text:string;
    }
    constructor(props) {
        super(props);
        // this.setText = this.setText.bind(this);
        // this.getName = this.getName.bind(this);

        // this.state = {
        //     text: '1',
        //     isLoad:true,
        // };
        // this.setState({text:"ff"});


    }

    // getName(){
    //     return this.state.text;
    // }
    //
    // setText(txt){
    //     // this.setState({text:txt});
    //     // this.setState((previousState) => {
    //     //     return {
    //     //         typingText: txt
    //     //     };
    //     // });
    //     // this.setState({isLoad:false});
    // }

    render() {
        // 根据当前showText的值决定是否显示text内容
        return (
            <View style={styles.field}>
                <Text >{this.props.name}:</Text>
                <Text >{this.props.text}</Text>
            </View>
        );
    }

}



export default class TickerInfo extends Component {
    props:{
        title:string;
        url:string;
    }

    constructor(props){
        super(props);
        this.state = {
            buyOne:'1',
            theHighest:'1',
            theLastDeal:'1',
            theLowest:'1',
            sellOne:'1',
            turnOver:'1',
        };

        setInterval(() => {
            return fetch(this.props.url)
                .then((response) => response.json())
                .then((responseJson) => {
                    this.setState({buyOne:responseJson.ticker.buy});
                    this.setState({theHighest:responseJson.ticker.high});
                    this.setState({theLastDeal:responseJson.ticker.last});
                    this.setState({theLowest:responseJson.ticker.low});
                    this.setState({sellOne:responseJson.ticker.sell});
                    this.setState({turnOver:responseJson.ticker.vol});
                })
                .catch((error) => {
                    console.error(error);
                });
        }, 1000);
    }

    render() {
        // var name = 'ocean';
        // var txt = `my name is ${name}`;
        // txt = `
        // <ul>
        //     <li>first</li>
        //     <li>second</li>
        // </ul>
        // `;
        // var a = [];
        // var j = function () {
        //     console.log(2);
        // };
        // console.log(j);

        // var { foo: baz } = { foo: 'aaa', bar: 'bbb' };
        // console.log(baz);

        // function f() { console.log('I am outside!'); }

        // (function () {
        //     function f() { console.log('I am inside!'); }
        //     if (false) {
        //     }
        //     f();
        // }());

        // for (let i = 0; i < 10; i++) {
        //     a[i] = function () {
        //         console.log(i);
        //     };
        // }
        // a[6](); // 6
        return (
            <View style={styles.ticketInfo}>
                <Text ref='title' style={styles.title}> {this.props.title} </Text>
                <View style={styles.container}>
                    <Field name='买一' text={this.state.buyOne} />
                    <Field name="最高价" text={this.state.theHighest} />
                    <Field name="最新成交" text={this.state.theLastDeal} />
                    <Field name="最低" text={this.state.theLowest} />
                    <Field name="卖一" text={this.state.sellOne} />
                    <Field name="成交量" text={this.state.turnOver} />
                </View >
            </View>
        )
    }
}



const styles = StyleSheet.create({
    ticketInfo: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingBottom:16,
    },
    container: {
        flexDirection: 'column',
        flexWrap: "wrap",
        justifyContent: 'space-around',
        alignItems: 'flex-start',
    },
    title:{
        paddingBottom:6,
    },
    field: {
        width:120,
        flexDirection: 'row',
        justifyContent:'space-between',
        margin:5,
        padding:2,
        borderColor: '#666666',
        borderWidth: 2,
    },
});


