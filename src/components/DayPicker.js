import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import fonts from '../styles/fonts';

export default function DayPicker(props) {
  function handleDayChange(e) {
    props.onDayChange(e);
  }

  return (
    <View style={styles.pickerView}>
      <View style={styles.pickerButtonContainer}>
        <TouchableOpacity
          style={
            props.selectedDay == 0
              ? styles.pickerButtonClicked
              : styles.pickerButton
          }
          activeOpacity={1}
          onPress={() => {
            //setSunday(true);
            handleDayChange(0);
          }}>
          <Text
            style={
              props.selectedDay == 0
                ? styles.pickerlableSelected
                : styles.pickerlable
            }>
            S
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.pickerButtonContainer}>
        <TouchableOpacity
          style={
            props.selectedDay == 1
              ? styles.pickerButtonClicked
              : styles.pickerButton
          }
          activeOpacity={1}
          onPress={() => {
            //setMonday(true);
            handleDayChange(1);
          }}>
          <Text
            style={
              props.selectedDay == 1
                ? styles.pickerlableSelected
                : styles.pickerlable
            }>
            M
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.pickerButtonContainer}>
        <TouchableOpacity
          style={
            props.selectedDay == 2
              ? styles.pickerButtonClicked
              : styles.pickerButton
          }
          activeOpacity={1}
          onPress={() => {
            // setTuesday(true);
            handleDayChange(2);
          }}>
          <Text
            style={
              props.selectedDay == 2
                ? styles.pickerlableSelected
                : styles.pickerlable
            }>
            T
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.pickerButtonContainer}>
        <TouchableOpacity
          style={
            props.selectedDay == 3
              ? styles.pickerButtonClicked
              : styles.pickerButton
          }
          activeOpacity={1}
          onPress={() => {
            // setWednesday(true);
            handleDayChange(3);
          }}>
          <Text
            style={
              props.selectedDay == 3
                ? styles.pickerlableSelected
                : styles.pickerlable
            }>
            W
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.pickerButtonContainer}>
        <TouchableOpacity
          style={
            props.selectedDay == 4
              ? styles.pickerButtonClicked
              : styles.pickerButton
          }
          activeOpacity={1}
          onPress={() => {
            // setThursday(true);
            handleDayChange(4);
          }}>
          <Text
            style={
              props.selectedDay == 4
                ? styles.pickerlableSelected
                : styles.pickerlable
            }>
            T
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.pickerButtonContainer}>
        <TouchableOpacity
          style={
            props.selectedDay == 5
              ? styles.pickerButtonClicked
              : styles.pickerButton
          }
          activeOpacity={1}
          onPress={() => {
            //setFriday(true);
            handleDayChange(5);
          }}>
          <Text
            style={
              props.selectedDay == 5
                ? styles.pickerlableSelected
                : styles.pickerlable
            }>
            F
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.pickerButtonContainer}>
        <TouchableOpacity
          style={
            props.selectedDay == 6
              ? styles.pickerButtonClicked
              : styles.pickerButton
          }
          activeOpacity={1}
          onPress={() => {
            //setSaturday(true);
            handleDayChange(6);
          }}>
          <Text
            style={
              props.selectedDay == 6
                ? styles.pickerlableSelected
                : styles.pickerlable
            }>
            S
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contentView: {
    flex: 1,
  },
  pickerView: {
    width: '100%',
    height: 60,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingLeft: 40,
    paddingRight: 40,
  },
  pickerButtonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pickerButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  pickerButtonClicked: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#132D64',
  },
  pickerlable: {
    fontFamily: fonts.medium,
    fontSize: 15,
    color: 'black',
  },
  pickerlableSelected: {
    fontFamily: fonts.medium,
    fontSize: 15,
    color: 'white',
  },
});
