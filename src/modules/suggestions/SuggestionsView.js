import React, {useState, useEffect} from 'react';
import {
  View,
  useWindowDimensions,
  StyleSheet,
  Image,
  Text,
  Dimensions,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import fonts from '../../styles/fonts';
import * as Progress from 'react-native-progress';
import * as Assets from '../../../assets/utils/index';
import {TouchableOpacity} from 'react-native-gesture-handler';
import axios from 'axios';
import {BASE_URL} from '@env';
import NewSuggestion from '../../components/NewSuggestion';

export default function SuggestionsView(props) {
  const [suggestion, setSuggestion] = useState('');

  const _handleRegionChangeComplete = e => {
    console.log(e);
  };

  const fetchData = () => {
    axios.get(`${BASE_URL}/app/main/getSuggestions/`).then(
      response => {
        console.log(response.data);
        setSuggestion(response.data);
      },
      error => {
        console.error(error);
      },
    );
  };

  useEffect(() => {
    fetchData();
  }, []);
  const _onCancelClicked = () => {
    console.log('cancel');
  };

  const _onStartPress = () => {
    console.log('start');
  };

  const _onSkipPress = () => {
    setSuggestion('');
    fetchData();
  };

  return (
    <View style={styles.contentView}>
      <View style={styles.newSuggestion}>
        {suggestion == '' ? null : (
          <NewSuggestion suggestion={suggestion} _onSkipPress={_onSkipPress} />
        )}
      </View>
      <View
        style={
          suggestion == ''
            ? styles.mapContainerBefore
            : styles.mapContainerAfter
        }>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={
            suggestion == ''
              ? {
                  latitude: props.latitude,
                  longitude: props.longitude,
                  latitudeDelta: 0.010260136079737414,
                  longitudeDelta: 0.005970261991024017,
                }
              : {
                  latitude: 6.880648087835073,
                  longitude: 79.87648906186223,
                  latitudeDelta: 0.012822820530297818,
                  longitudeDelta: 0.005970261991024017,
                }
          }
          onRegionChangeComplete={_handleRegionChangeComplete}>
          <Marker
            coordinate={{
              latitude: props.latitude,
              longitude: props.longitude,
            }}></Marker>
        </MapView>
      </View>

      {suggestion == '' ? (
        <View style={styles.contentBottomView}>
          <View style={styles.titleContatiner}>
            <Text style={styles.title}>Generating suggestions</Text>
          </View>
          <View style={styles.rest}>
            <View style={styles.restTop}>
              <Progress.Bar
                //progress={0.2}
                width={(Dimensions.get('window').width * 90) / 100}
                borderWidth={0}
                unfilledColor={'#DFDFDF'}
                //unfilledColor={'white'}
                color={'#132D64'}
                indeterminate={true}
                height={4}
                borderRadius={0}
              />
            </View>
            <View style={styles.restMiddle}>
              <View style={styles.imageContainer}>
                <Image style={styles.imgStyle} source={Assets.traffic_police} />
              </View>
            </View>
            <View style={styles.restbottom}>
              <TouchableOpacity onPress={_onCancelClicked}>
                <Text style={styles.btnLabel}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ) : null}
    </View>
  );
}
const styles = StyleSheet.create({
  contentView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor: 'red',
  },
  mapContainerBefore: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  contentBottomView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: 'white',
  },
  map: {
    zIndex: -5,
    ...StyleSheet.absoluteFillObject,
  },
  titleContatiner: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    //backgroundColor: 'yellow',
    width: '100%',
    paddingTop: 5,
    paddingLeft: 15,
  },
  title: {
    fontFamily: fonts.medium,
    fontSize: 15,
    color: 'black',
  },
  horizontalLine: {
    borderColor: '#C7C7C7',
    borderWidth: 1,
    width: '98%',
  },
  rest: {
    flex: 6,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
  },
  imageContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#D4D4D4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgStyle: {
    flex: 1,
    width: '75%',
    height: '75%',
    resizeMode: 'contain',
    opacity: 0.6,
  },
  restTop: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor: 'cyan',
    width: '100%',
  },
  restMiddle: {
    flex: 25,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    //backgroundColor: 'green',
  },
  restbottom: {
    flex: 6,
    alignItems: 'center',
    justifyContent: 'center',
    width: '95%',
    borderTopWidth: 1,
    borderTopColor: '#D4D4D4',
  },
  btnLabel: {
    fontFamily: fonts.regular,
    fontSize: 15,
    color: 'red',
  },
  mapContainerAfter: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  newSuggestion: {
    position: 'absolute',
    width: '100%',
    top: 75,
    left: 0,
  },
});
