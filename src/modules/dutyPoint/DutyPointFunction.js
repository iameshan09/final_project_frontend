import Geolocation from 'react-native-geolocation-service';
import Geocoder from '../../geocorder/Geocorder';
import axios from 'axios';
import {CURRENT_IP} from '@env';

export function getCurrentPosition(props) {
  Geolocation.getCurrentPosition(
    position => {
      console.log(position);
      props.setLatitudeAction(position.coords.latitude);
      props.setLongitudeAction(position.coords.longitude);
    },

    error => {
      //Alert.alert(error.message.toString());
      console.log(error.message.toString());
    },
    {
      showLocationDialog: true,
      enableHighAccuracy: true,
      timeout: 20000,
      maximumAge: 0,
    },
  );
}

export function geoCorder(props) {
  Geocoder.from(props.latitude, props.longitude)

    .then(json => {
      console.log(json);

      var addressComponent = json.results[0].address_components;

      props.setCurrentAddressAction(addressComponent);

      console.log(addressComponent);
    })

    .catch(error => console.warn(error));
}
export function getNearestDutyPoints(props) {
  let clatitude = 6.878314;
  let clongitude = 79.876242;
  axios
    .get(
      `http://${CURRENT_IP}:4000/app/main/nearestDutyPoints/${props.latitude}/${props.longitude}`,
    )
    .then(
      response => {
        console.log(response.data);
        props.setDutyPointsAction(response.data);
        props.setDefaultValueAction(response.data[0].value);
      },
      error => {
        console.error(error);
      },
    );
}
