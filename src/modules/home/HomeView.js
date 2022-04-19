import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import * as Assets from '../../../assets/utils/index';
import fonts from '../../styles/fonts';
import * as Function from './HomeFunction';
export default function HomeView(props) {
  const [status, setStatus] = useState();
  return (
    <View style={styles.contentView}>
      <View style={styles.contentTopView}>
        <View style={styles.contentTopLeftView}>
          <Image style={styles.imgStyle2} source={Assets.menu} />
        </View>
        <View style={styles.contentTopRightView}></View>
      </View>
      <View style={styles.contentMiddleView}>
        <View style={styles.contentMiddleTopView}>
          <Image style={styles.imgStyle} source={Assets.car} />
        </View>
        <View style={styles.contentMiddleButtonView}>
          <TouchableOpacity
            onPress={() => Function.navigationFunction(props)}
            style={styles.contentTouchButtonView}>
            <Text style={styles.txtStyle}>Start duty </Text>
            <Image style={styles.imgStyle3} source={Assets.arrow_right} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.contentButtomView}>
        <View style={styles.bubbleTraffic}>
          <Image style={styles.imgStyle4} source={Assets.traffic_light} />
        </View>
      </View>
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
    flexDirection: 'row',
    // backgroundColor: 'black'
  },
  contentTopView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    // backgroundColor: 'black'
  },
  contentTopLeftView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  contentTopRightView: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  contentMiddleView: {
    flex: 2,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentButtomView: {
    flex: 3,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '90%',
    marginLeft: 10,
    marginTop: 10,
  },
  contentMiddleTopView: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#C70039',
  },
  contentMiddleButtonView: {
    flex: 1,
    width: '100%',

    backgroundColor: '#132D64',
  },
  contentTouchButtonView: {
    flex: 1,
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  btnStyle: {
    height: 60,
    width: 200,
    borderRadius: 20,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  imgStyle: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
  },
  imgStyle2: {
    flex: 1,
    width: '50%',
    height: '50%',
    resizeMode: 'contain',
  },
  txtStyle: {
    color: 'white',
    fontFamily: fonts.bold,
    fontSize: 30,
    marginLeft: 10,
    marginBottom: 10,
  },
  imgStyle3: {
    width: 30,
    height: 30,
    marginBottom: 10,
  },
  imgStyle4: {
    width: '50%',
    height: '50%',
  },
  bubbleTraffic: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#D4D4D4',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
