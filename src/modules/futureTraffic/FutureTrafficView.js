import * as React from 'react';
import {View, useWindowDimensions, StyleSheet, Text, Image} from 'react-native';
import {Switch} from 'react-native-gesture-handler';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import * as Assets from '../../../assets/utils/index';
import fonts from '../../styles/fonts';

const FirstRoute = () => <View style={{flex: 1, backgroundColor: '#ff4081'}} />;

const SecondRoute = () => (
  <View style={{flex: 1, backgroundColor: '#673ab7'}} />
);

const ThirdRoute = () => <View style={{flex: 1, backgroundColor: '#673ab7'}} />;

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

export default function FutureTrafficView(props) {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first'},
    {key: 'second'},
    {key: 'third'},
  ]);
  props.setFutureTrafficStatusAction(false);
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
    backgroundColor: 'red',
    width: '100%',
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
});
