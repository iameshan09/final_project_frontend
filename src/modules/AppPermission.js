import {check, PERMISSIONS, RESULTS, request} from 'react-native-permissions';
import {Platform} from 'react-native';

const PLATFORM_LOCATION_PERMISSION = {
  ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
  android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
};

const REQUEST_PERMISSION_TYPE = {
  location: PLATFORM_LOCATION_PERMISSION,
};

const PERMISSION_TYPE = {
  location: 'location',
};
class AppPermission {
  checkPermission = async (type): Promise<boolean> => {
    console.log('check permission type:', type);
    const permissions = REQUEST_PERMISSION_TYPE[type][Platform.OS];
    console.log('check permission permission:', permissions);
    if (!permissions) {
      return true;
    }
    try {
      const result = await check(permissions);
      console.log('check permission result', result);
      if (result === RESULTS.GRANTED) return true;
      return this.requestPermission(permissions);
    } catch (error) {
      console.log('check permission error', error);
      return false;
    }
  };
  requestPermission = async (permissions): Promise<boolean> => {
    console.log('request permission permissions:', permissions);
    try {
      const result = await request(permissions);
      console.log('request permission result:', result);
      return result === RESULTS.GRANTED;
    } catch (error) {
      console.log('request permission error:', error);
      return false;
    }
  };
}

const Permission = new AppPermission();
export {Permission, PERMISSION_TYPE};
