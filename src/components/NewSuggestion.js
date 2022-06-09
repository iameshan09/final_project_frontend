import React, {useState, useEffect} from 'react';
import {
  View,
  useWindowDimensions,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import fonts from '../styles/fonts';

export default function NewSuggestion(props) {
  return (
    <View style={styles.newSugesstionView}>
      <View style={styles.titleContatiner}>
        <Text style={styles.title}>New suggestion</Text>
      </View>
      <View style={styles.suggestionMiddle}>
        <View style={styles.parentLabelContainer}>
          <View style={styles.labelContainer}>
            <Text style={styles.label}>DESCRIPTION</Text>
          </View>
        </View>
        <View style={styles.suggestionContainer}>
          <Text style={styles.txtSuggestion}>{props.suggestion}</Text>
        </View>
      </View>
      <View style={styles.suggestionBottom}>
        <TouchableOpacity style={styles.btnStart} onPress={props._onStartPress}>
          <Text style={styles.labelStart}>Start</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnSkip} onPress={props._onSkipPress}>
          <Text style={styles.labelSkip}>SKip</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  newSugesstionView: {
    width: '100%',
    //height: 300,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  titleContatiner: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#D4D4D4',
    width: '100%',
    paddingTop: 5,
    paddingLeft: 15,
    paddingBottom: 5,
    paddingRight: 5,
  },
  title: {
    fontFamily: fonts.medium,
    fontSize: 21,
    color: 'black',
  },
  suggestionMiddle: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  suggestionBottom: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  parentLabelContainer: {
    flex: 1,
    height: 20,
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'center',
    //backgroundColor: 'red',
    paddingTop: 20,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  labelContainer: {
    height: 20,
    backgroundColor: '#D5D5D5',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  label: {
    fontFamily: fonts.bold,
    color: '#666666',
  },
  suggestionContainer: {
    flex: 10,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    borderBottomWidth: 1,
    borderBottomColor: '#D4D4D4',
    width: '100%',
    paddingTop: 15,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
  },
  txtSuggestion: {
    fontFamily: fonts.regular,
    fontSize: 15,
    color: 'black',
  },
  btnStart: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#107c6c',
    height: 40,
  },
  labelStart: {
    fontFamily: fonts.bold,
    fontSize: 12,
    color: 'white',
  },
  btnSkip: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor:'#107c6c'
    height: 40,
  },
  labelSkip: {
    fontFamily: fonts.medium,
    fontSize: 12,
    color: '#666666',
  },
});
