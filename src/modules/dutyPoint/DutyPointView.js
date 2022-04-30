import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  Button,
} from 'react-native';
import * as Assets from '../../../assets/utils/index';
import DropDownPicker from 'react-native-dropdown-picker';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import fonts from '../../styles/fonts';

export default function DutyPointView(props) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([]);

  // const _handleRegionChangeComplete = e => {
  //   console.log(e);
  // };

  const _onConfirmPress = () => {
    console.log('pressed');
  };

  useEffect(() => {
    setItems(props.dutyPoints);
    setValue(props.defaultValue);
  }, []);

  return (
    <View style={styles.contentView}>
      <View style={styles.contentTopView}>
        <View style={styles.contentTopLeftView}>
          <Image style={styles.imgStyle1} source={Assets.arrow_left} />
        </View>
        <View style={styles.contentTopRightView}></View>
      </View>
      <View style={styles.contentTopView2}>
        <Text style={styles.text}></Text>
      </View>
      <View style={styles.contentTopView3}>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          containerStyle={styles.pickerContainerStyle}
          style={styles.pickerStyle}
          dropDownContainerStyle={styles.dropDownContainerStyle}
        />
      </View>
      <View style={styles.contentBottomView}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={{
            latitude: props.latitude,
            longitude: props.longitude,
            latitudeDelta: 0.010260136079737414,
            longitudeDelta: 0.005970261991024017,
          }}
          // onRegionChangeComplete={_handleRegionChangeComplete}
        >
          <Marker
            coordinate={{
              latitude: props.latitude,
              longitude: props.longitude,
            }}></Marker>
        </MapView>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={_onConfirmPress}>
          <Text style={styles.buttontxt}>Confirm</Text>
        </TouchableOpacity>
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
  },
  contentTopView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: 'red',
  },
  contentTopLeftView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'yellow',
  },
  contentTopRightView: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  contentTopView2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: 'blue',
    width: '100%',
  },
  contentTopView3: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: 'green',
    width: '100%',
  },
  contentBottomView: {
    flex: 12,
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
  },
  imgStyle1: {
    flex: 1,
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  text: {
    width: '90%',
    height: 35,
    backgroundColor: '#D4D4D4',
    color: 'black',
  },
  pickerContainerStyle: {
    width: '90%',
    height: 35,
    backgroundColor: '#D4D4D4',
    padding: 0,
  },
  pickerStyle: {
    minHeight: 35,
    backgroundColor: '#D4D4D4',
    color: 'black',
    borderRadius: 0,
    borderColor: '#D4D4D4',
  },
  dropDownContainerStyle: {
    backgroundColor: '#D4D4D4',
    borderRadius: 0,
    borderColor: '#D4D4D4',
  },
  map: {
    zIndex: -5,
    ...StyleSheet.absoluteFillObject,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    height: 50,
    backgroundColor: '#132D64',
    marginBottom: 20,
  },
  buttontxt: {
    color: 'white',
    fontFamily: fonts.bold,
    fontSize: 15,
  },
});
