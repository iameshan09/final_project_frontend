import React, {useState, useEffect} from 'react';
import {
  View,
  useWindowDimensions,
  StyleSheet,
  Text,
  Image,
  Dimensions,
} from 'react-native';
import {Switch} from 'react-native-gesture-handler';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import * as Assets from '../../../assets/utils/index';
import fonts from '../../styles/fonts';
import DayPicker from '../../components/DayPicker';
import DropDownPicker from 'react-native-dropdown-picker';
import axios from 'axios';
import {CURRENT_IP} from '@env';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
import ThirdRoute from '../../components/ThirdRoute';

export default function FutureTrafficView(props) {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(1);
  const [items, setItems] = useState([]);
  const [durationInTraffic, setDurationInTraffic] = useState([]);
  const [routes] = useState([{key: 'first'}, {key: 'second'}, {key: 'third'}]);
  const [selectedDay, setSelectedDay] = useState(0);
  const [open1, setOpen1] = useState(false);
  const [value1, setValue1] = useState(1);
  const [items1] = useState([
    {value: 1, label: 'Time Frame'},
    {value: 2, label: 'Road'},
  ]);

  const fetchData = async () => {
    const response = await axios.get(
      `http://${CURRENT_IP}:4000/app/main/getRoads/${selectedDay}/${value}`,
    );
    return response;
  };

  function handleDayChange(newDay) {
    setSelectedDay(newDay);
  }
  props.setFutureTrafficStatusAction(false);

  useEffect(() => {
    fetchData()
      .then(response => {
        setItems(response.data.items);
        setDurationInTraffic(response.data.data);
      })
      .catch(ex => console.error(ex));
  }, [selectedDay, value, value1]);

  const FirstRoute = () => (
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

  const SecondRoute = () => (
    <View style={{flex: 1, backgroundColor: '#673ab7'}} />
  );

  /*const ThirdRoute = () => (
    <View style={styles.contentView}>
      <View style={styles.contentBottomTopView}>
        <DayPicker selectedDay={selectedDay} onDayChange={handleDayChange} />
      </View>
      <View style={styles.contentBottomMiddleView}>
        <Text style={styles.txtStyle}>LIST BY</Text>
        <DropDownPicker
          open={open1}
          value={value1}
          items={items1}
          setOpen={setOpen1}
          setValue={setValue1}
          containerStyle={styles.pickerContainerStyle}
          style={styles.pickerStyle}
          dropDownContainerStyle={styles.dropDownContainerStyle}
        />
      </View>
    </View>
  );*/

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
  });

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={styles.indicatorStyle}
      style={styles.tabBar}
      renderLabel={({route, focused, color}) =>
        route.key == 'first' ? (
          focused ? (
            <Image style={styles.imgStyle2} source={Assets.statistics_blue} />
          ) : (
            <Image style={styles.imgStyle2} source={Assets.statistics_grey} />
          )
        ) : route.key == 'second' ? (
          focused ? (
            <Image style={styles.imgStyle2} source={Assets.layer_blue} />
          ) : (
            <Image style={styles.imgStyle2} source={Assets.layer_grey} />
          )
        ) : route.key == 'third' ? (
          focused ? (
            <Image style={styles.imgStyle2} source={Assets.list_blue} />
          ) : (
            <Image style={styles.imgStyle2} source={Assets.list_grey} />
          )
        ) : null
      }
    />
  );

  return (
    <View style={styles.contentView}>
      <View style={styles.contentTopView}>
        <View style={styles.contentTopLeftView}>
          <Image style={styles.imgStyle1} source={Assets.arrow_left} />
        </View>
        <View style={styles.contentTopRightView}></View>
      </View>
      <View style={styles.contentBottomView}>
        <TabView
          navigationState={{index, routes}}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{width: layout.width}}
          renderTabBar={renderTabBar}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  contentView: {
    flex: 1,
  },
  contentTopView: {
    flex: 1,
    //x
    alignItems: 'center',
    //y
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
    width: '100%',
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
  contentBottomView: {
    flex: 12,
    width: '100%',
  },
  tabBar: {
    backgroundColor: 'white',
  },
  imgStyle1: {
    flex: 1,
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  imgStyle2: {
    width: 30,
    height: 30,
  },
  indicatorStyle: {
    backgroundColor: '#132D64',
    height: 5,
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
  contentPickerView: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
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
