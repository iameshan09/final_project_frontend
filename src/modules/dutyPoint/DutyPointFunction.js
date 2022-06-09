import Geolocation from 'react-native-geolocation-service';

export function getCurrentPosition(props) {
  Geolocation.getCurrentPosition(
    position => {
      //console.log(position);
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
