import React, {useState, useEffect} from 'react';
import {
  View,
  useWindowDimensions,
  StyleSheet,
  Text,
  Image,
  Dimensions,
} from 'react-native';
import * as Assets from '../../assets/utils/index';
import fonts from '../styles/fonts';
import DayPicker from './DayPicker';
import DropDownPicker from 'react-native-dropdown-picker';
import axios from 'axios';
import {BASE_URL} from '@env';
import {LineChart} from 'react-native-chart-kit';

export default function FirstRoute(props) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(1);
  const [items, setItems] = useState([]);
  const [durationInTraffic, setDurationInTraffic] = useState([]);
  const [selectedDay, setSelectedDay] = useState(0);

  const fetchData = async () => {
    const response = await axios.get(
      `${BASE_URL}/app/main/getRoads/${selectedDay}/${value}`,
    );
    return response;
  };

  function handleDayChange(newDay) {
    setSelectedDay(newDay);
  }

  useEffect(() => {
    fetchData()
      .then(response => {
        setItems(response.data.items);
        setDurationInTraffic(response.data.data);
      })
      .catch(ex => console.error(ex));
  }, [selectedDay, value]);

  return (
    <View style={styles.contentView}>
      <View style={styles.contentBottomTopView}>
        <DayPicker selectedDay={selectedDay} onDayChange={handleDayChange} />
      </View>
      <View style={styles.contentBottomMiddleView}>
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
      <View style={styles.contentBottomBottomView}>
        {Array.isArray(durationInTraffic) && durationInTraffic.length ? (
          <View style={styles.contentChartView}>
            <LineChart
              data={{
                labels: [
                  '6:00',
                  '6:15',
                  '6:30',
                  '6:45',
                  '7:00',
                  '7:15',
                  '7:30',
                  '8:00',
                  '8:15',
                  '8:30',
                  '8:45',
                  '9:00',
                ],
                datasets: [
                  {
                    data: durationInTraffic,
                  },
                ],
              }}
              width={Dimensions.get('window').width} // from react-native
              height={400}
              yAxisInterval={1} // optional, defaults to 1
              chartConfig={{
                backgroundColor: '#FFFFFF',
                backgroundGradientFrom: '#FFFFFF',
                backgroundGradientTo: '#FFFFFF',
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(20, 139, 247, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                style: {
                  borderRadius: 0,
                },
              }}
              bezier
              style={{
                marginVertical: 8,
                borderRadius: 0,
              }}
              verticalLabelRotation={-45}
            />
            <Image style={styles.imgStyle3} source={Assets.y_axis_label} />
            <Image style={styles.imgStyle4} source={Assets.x_axis_label} />
          </View>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contentView: {
    flex: 1,
  },
  contentBottomTopView: {
    alignItems: 'center',
    //y
    justifyContent: 'center',
    flex: 1,
    width: '100%',
  },
  contentBottomMiddleView: {
    alignItems: 'center',
    //y
    justifyContent: 'center',
    flex: 1,
    width: '100%',
  },
  contentBottomBottomView: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 10,
    width: '100%',
    backgroundColor: 'white',
    zIndex: -5,
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
  contentChartView: {
    flex: 1,
    width: '100%',
    height: 400,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  imgStyle3: {
    width: 20,
    height: 350,
    resizeMode: 'contain',
    position: 'absolute',
  },
  imgStyle4: {
    width: '100%',
    height: 20,
    resizeMode: 'contain',
    position: 'absolute',
    marginTop: 370,
  },
  txtStyle: {
    fontFamily: fonts.bold,
    fontSize: 15,
    color: 'black',
  },
});
