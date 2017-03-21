/**
 * Created by yuyanq on 2017/3/3.
 */

import React, {Component, PropTypes} from 'react';
import {View, Text, TouchableHighlight, StyleSheet} from 'react-native';
import TickerInfo from './tickerinfo'

export default class Ticker extends Component {
    // static propTypes = {
    //     title: PropTypes.string.isRequired,
    //     onForward: PropTypes.func.isRequired,
    //     onBack: PropTypes.func.isRequired,
    // }
    constructor(props){
        super(props);
        // login();
    }

    // login() {
        //帐号模式，0-表示独立模式，1-表示托管模式
        // var accountMode = 0;
        // var sdkAppID = 1400026615;
        // var accountType = 11490;
        // var loginInfo = {
        //     'sdkAppID': sdkAppID, //用户所属应用id,必填
        //     'accountType': accountType, //用户所属应用帐号类型，必填
        //     'identifier': "ocean", //当前用户ID,必须是否字符串类型，必填
        //     'userSig': "eJxljl1PgzAARd-5FaSvGGkLXdjedEwkOglzhvDUNG3B7gNI13Xi4n9X2RJJvK-n3Nx7dlzXBevn11vGeXtsDDV9J4E7cwEEN3*w65SgzNBAi39QfnRKS8oqI-UAESEEQzh2lJCNUZW6Gi2XrBnhg9jSYePSD3-KeDJBZKyoeoDLRTlP85j5G5SGK2sjjezLPeRVMt8-Rm9bGCZkke9ElIkVKeNlfkrf77J2wwO-RJ4QRXjsbPGZ1P1D3T9FXozqyEvWeOefWJHVcjRp1F5eD00hnMIgHB*yUh9U2wwChoggHMDfAOfL*QZ39lvX", //当前用户身份凭证，必须是字符串类型，必填
        //     'identifierNick': "oceanyu", //当前用户昵称，不用填写，登录接口会返回用户的昵称，如果没有设置，则返回用户的id
        //     'headurl': null //当前用户默认头像，选填，如果设置过头像，则可以通过拉取个人资料接口来得到头像信息
        // };

    //     webim.login(
    //         loginInfo, null, null,
    //         function (resp) {
    //             loginInfo.identifierNick = resp.identifierNick;//设置当前用户昵称
    //             console.warn("resp="+resp.toString());
    //         },
    //         function (err) {
    //             alert(err.ErrorInfo);
    //         }
    //     );
    // }




    render() {
        return (

            <View style={styles.container}>
                <TickerInfo title='china' url='https://www.okcoin.com/api/v1/ticker.do?symbol=btc_cny'/>
                <TickerInfo title='hk' url='https://www.okcoin.com/api/v1/ticker.do?symbol=btc_usd'/>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:  'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        marginTop:20,
    },

});

