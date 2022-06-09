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
import Geocoder from '../../geocorder/Geocorder';
import axios from 'axios';
import {BASE_URL} from '@env';

export default function DutyPointView(props) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([]);
  const [address, setAddress] = useState('Your Address');

  // const _handleRegionChangeComplete = e => {
  //   console.log(e);
  // };

  const geoCorder = () => {
    Geocoder.from(props.latitude, props.longitude)

      .then(json => {
        setAddress(json.results[0].formatted_address);
        console.log(json.results[0].formatted_address);
      })

      .catch(error => console.warn(error));
  };

  const getNearestDutyPoints = () => {
    let clatitude = 6.878314;
    let clongitude = 79.876242;
    axios
      .get(
        `${BASE_URL}/app/main/nearestDutyPoints/${props.latitude}/${props.longitude}`,
      )
      .then(
        response => {
          if (Object.keys(response.data).length) {
            setItems(response.data);
            setValue(response.data[0].value);
          }
        },
        error => {
          console.error(error);
        },
      );
  };

  const navigationToSuggestionsView = props => {
    props.navigation.navigate('Suggestions');
  };

  const _onConfirmPress = () => {
    console.log('pressed');
  };

  useEffect(() => {
    if (props.latitude != 0 && props.longitude != 0) {
      geoCorder();
      getNearestDutyPoints();
    }

    console.log(BASE_URL);
  }, [props.latitude, props.longitude]);

  return (
    <View style={styles.contentView}>
      <View style={styles.contentTopView}>
        <View style={styles.contentTopLeftView}>
          <Image style={styles.imgStyle1} source={Assets.arrow_left} />
        </View>
        <View style={styles.contentTopRightView}></View>
      </View>
      <View style={styles.contentMiddleView}>
        <View style={styles.addressContainer}>
          <Text style={styles.text}>{address}</Text>
        </View>
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
          placeholder={'Select your duty point'}
          placeholderStyle={styles.dropDownPlaceholderStyle}
          ListEmptyComponent={({
            listMessageContainerStyle,
            listMessageTextStyle,
            ActivityIndicatorComponent,
            loading,
            message,
          }) => (
            <View style={listMessageContainerStyle}>
              {loading ? (
                <ActivityIndicatorComponent />
              ) : (
                <Text style={styles.listMessageTextStyle}>
                  No duty points found
                </Text>
              )}
            </View>
          )}
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
          onPress={() => navigationToSuggestionsView(props)}>
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
  },
  contentTopLeftView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  contentTopRightView: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentMiddleView: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
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
    fontFamily: fonts.medium,
    color: 'black',
    marginStart: 10,
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
  addressContainer: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    height: 35,
    backgroundColor: '#D4D4D4',
    width: '90%',
    marginBottom: 10,
  },
  listMessageTextStyle: {
    fontFamily: fonts.regular,
    color: 'red',
  },
  dropDownPlaceholderStyle: {
    fontFamily: fonts.medium,
  },
});
