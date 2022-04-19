import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';
import * as Assets from '../../../assets/utils/index'
import fonts from '../../styles/fonts';

export default function DutyPointView(props) {
    const [status, setStatus] = useState();
    return (
        <View style={styles.contentView}>
          <Text style={styles.txtStyle}>2nd view</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    contentView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        // width:"100%"
    },
    contentTopView: {
        flex: 1,
        //x
        alignItems: 'center',
        //y
        justifyContent: 'center',
        flexDirection:"row"
        // backgroundColor: 'black'
    },
    contentTopView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:"row"
        // backgroundColor: 'black'
    },
    contentTopLeftView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width:"100%",
    },
    contentTopRightView: {
        flex: 4,
        alignItems: 'center',
        justifyContent: 'center',
        width:"100%",
    },
    contentMiddleView: {
        flex:2,
width:"90%",
        alignItems: 'center',
        justifyContent: 'center',
    },
    contentButtomView: {
        flex: 3,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        width:"90%",
        marginLeft:10,
        marginTop:10
    },
    contentMiddleTopView: {
        flex: 1,
        width:"100%",
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:"#C70039",
    },
    contentMiddleButtonView: {
        flex: 1,
        width:"100%",
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        backgroundColor:"#132D64",
flexDirection:"row"
    },
    btnStyle: {

        height: 60,
        width: 200,
        borderRadius: 20,
        backgroundColor: "red",
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30
    },
    imgStyle:{
     
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'stretch',

    },
    imgStyle2:{
     
        flex: 1,
        width: '50%',
        height: '50%',
        resizeMode: 'contain',

    },
    txtStyle:{
     
        color:'black',
        fontFamily:fonts.bold,
        fontSize:30,
        marginLeft:10,
        marginBottom:10,

    },
    imgStyle3:{
        width:30,
        height:30,
        marginBottom:10,
    },
    imgStyle4:{
        width:'50%',
        height:'50%',
    },
    bubbleTraffic:{
        width:90,
        height:90,
        borderRadius:45,
        backgroundColor:"#D4D4D4",
        justifyContent:"center",
        alignItems:"center"
    },
});
