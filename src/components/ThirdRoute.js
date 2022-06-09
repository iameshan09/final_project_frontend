import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import * as Assets from '../../assets/utils/index';
import fonts from '../styles/fonts';
import DayPicker from './DayPicker';
import DropDownPicker from 'react-native-dropdown-picker';
import axios from 'axios';
import {BASE_URL} from '@env';

export default function ThirdRoute() {
  const [selectedDay, setSelectedDay] = useState(0);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(0);
  const [items] = useState([
    {value: 0, label: 'Time Frame'},
    {value: 1, label: 'Road'},
  ]);
  const [open2, setOpen2] = useState(false);
  const [value2, setValue2] = useState(1);
  const [roadItems, setRoadItems] = useState([]);
  const [timeFrameItems] = useState([
    {value: 1, label: '6:00 AM - 6:15 AM'},
    {value: 2, label: '6:15 AM - 6:30 AM'},
    {value: 3, label: '6:30 AM - 6:45 AM'},
    {value: 4, label: '6:45 AM - 7:00 AM'},
    {value: 5, label: '7:00 AM - 7:15 AM'},
    {value: 6, label: '7:15 AM - 7:30 AM'},
    {value: 7, label: '7:30 AM - 7:45 AM'},
    {value: 8, label: '7:45 AM - 8:00 AM'},
    {value: 9, label: '8:00 AM - 8:15 AM'},
    {value: 10, label: '8:15 AM - 8:30 AM'},
    {value: 11, label: '8:30 AM - 8:45 AM'},
    {value: 12, label: '8:45 AM - 9:00 AM'},
  ]);

  const [listData, setListData] = useState([]);
  const [order, setOrder] = useState('');

  const fetchData = async () => {
    const response = await axios.get(
      `${BASE_URL}/app/main/getTimeFramesAndRoads/${selectedDay}/${value2}`,
    );
    return response;
  };

  useEffect(() => {
    fetchData()
      .then(response => {
        setRoadItems(response.data.roads);

        if (value == 0) {
          setListData(response.data.framesData);
        }
        if (value == 1) {
          setListData(response.data.roadsData);
        }
      })
      .catch(ex => console.error(ex));
    setOrder('');
    console.log('useEffect');
  }, [selectedDay, value, value2]);

  function handleDayChange(newDay) {
    setSelectedDay(newDay);
  }

  const _onConfirmPress = () => {
    let sortedTimeFramesData = [];
    let i = 0;
    if (order == 'desc' || order == '') {
      sortedTimeFramesData = [...listData].sort(
        (a, b) => a.duration_in_traffic - b.duration_in_traffic,
      );
      setOrder('asc');
      i++;
    }
    if (order == 'asc' && i == 0) {
      sortedTimeFramesData = [...listData].sort(
        (a, b) => b.duration_in_traffic - a.duration_in_traffic,
      );
      setOrder('desc');
    }

    setListData(sortedTimeFramesData);
  };

  return (
    <View style={styles.contentView}>
      <View style={styles.contentBottomTopView}>
        <DayPicker selectedDay={selectedDay} onDayChange={handleDayChange} />
      </View>
      <View style={styles.contentBottomMiddleView}>
        <View style={styles.topicContainer}>
          <View style={styles.topic}>
            <Text style={styles.txtStyle}>LIST BY</Text>
          </View>
          <View style={styles.topicSpace} />
        </View>

        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          containerStyle={styles.pickerContainerStyle}
          style={styles.pickerStyle}
          dropDownContainerStyle={styles.dropDownContainerStyle}
        />
        <View style={styles.horizontalLine} />
        <DropDownPicker
          open={open2}
          value={value2}
          items={value == 0 ? roadItems : timeFrameItems}
          setOpen={setOpen2}
          setValue={setValue2}
          containerStyle={styles.pickerContainerStyle2}
          style={styles.pickerStyle}
          dropDownContainerStyle={styles.dropDownContainerStyle}
        />
      </View>
      <View style={styles.contentBottomBottomView}>
        <View style={styles.tableView}>
          <View style={styles.tableHeadingRowView}>
            <View style={styles.tableSecondColumView}>
              <Text style={styles.txtTableHeading}>
                {value == 0 ? 'Time Frame' : 'Road'}
              </Text>
            </View>
            <TouchableOpacity
              style={styles.tableThirdColumView}
              onPress={_onConfirmPress}>
              <Text style={styles.txtTableHeading}>Time In Traffic</Text>
            </TouchableOpacity>
          </View>
          {Array.isArray(listData) && listData.length
            ? listData.map((row, index, setListData) => {
                return (
                  <View style={styles.tableDataRowView} key={row.key}>
                    <View style={styles.tableFirstColumView}>
                      <View
                        style={
                          order == 'asc' && index == 0
                            ? styles.tableFirstColumLabelAscView
                            : order == 'desc' && index == 0
                            ? styles.tableFirstColumLabelDescView
                            : styles.tableFirstColumLabelView
                        }>
                        <Text style={styles.txtBoldTableData}>{index + 1}</Text>
                      </View>
                    </View>
                    <View style={styles.tableSecondColumView}>
                      <Text style={styles.txtTableData}>
                        {row.first_column}
                      </Text>
                    </View>
                    <View style={styles.tableThirdColumView}>
                      <Text style={styles.txtTableData}>
                        {row.duration_in_traffic}
                      </Text>
                    </View>
                  </View>
                );
              })
            : null}
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  contentView: {
    flex: 1,
    backgroundColor: 'white',
  },
  contentBottomTopView: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    width: '100%',
  },
  contentBottomMiddleView: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 2,
    width: '100%',
    backgroundColor: 'white',
  },
  contentBottomBottomView: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 8,
    width: '100%',
    backgroundColor: 'white',
    zIndex: -10,
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
    marginTop: 10,
    marginBottom: 10,
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
    maxHeight: '100%',
  },
  pickerContainerStyle2: {
    width: '90%',
    height: 35,
    backgroundColor: '#D4D4D4',
    padding: 0,
    marginTop: 10,
    marginBottom: 10,
    zIndex: -5,
  },
  pickerStyle2: {
    minHeight: 35,
    backgroundColor: '#D4D4D4',
    color: 'black',
    borderRadius: 0,
    borderColor: '#D4D4D4',
  },
  dropDownContainerStyle2: {
    backgroundColor: '#D4D4D4',
    borderRadius: 0,
    borderColor: '#D4D4D4',
  },
  txtStyle: {
    fontFamily: fonts.bold,
    fontSize: 15,
    color: 'black',
  },
  horizontalLine: {
    borderBottomColor: '#C7C7C7',
    borderBottomWidth: 1,
    width: '97%',
    zIndex: -5,
  },
  tableView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '95%',
  },
  tableHeadingRowView: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 10,
  },
  tableDataRowView: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: '99%',
  },
  tableHeadFirstColumView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tableFirstColumView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tableFirstColumLabelView: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 24,
    height: 24,
    padding: 0,
  },
  tableFirstColumLabelAscView: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2.5,
    borderColor: '#49FF00',
    padding: 0,
    overflow: 'hidden',
  },
  tableFirstColumLabelDescView: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2.5,
    borderColor: '#FF0000',
    padding: 0,
  },
  tableSecondColumView: {
    flex: 7,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  tableThirdColumView: {
    flex: 3,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  txtTableHeading: {
    fontFamily: fonts.bold,
    fontSize: 15,
    color: '#6A6A6A',
  },
  txtBoldTableData: {
    fontFamily: fonts.bold,
    fontSize: 12,
    color: '#7E7E7E',
  },
  txtTableData: {
    fontFamily: fonts.medium,
    fontSize: 12,
    color: 'black',
  },
  topicContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    width: '90%',
  },
  topic: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  topicSpace: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
