import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import {primary_color, accent_color} from './conf/conf';
import Button from 'react-native-button';

export default class Page2 extends React.Component {
  static navigationOptions = {header: null};

render() {
  return (
    <View style={styles.container}>
      <View style={{flex: 8, alignItems: 'center', justifyContent: 'center'}}>
        <View style={{flex:6, flexDirection: 'row', alignItems: 'center', justifyContent: 'center',}}>
          <Image
            style={{width: 80, height: 80, }}
            source={require('./img/logo_white.png')}
            />
          <Text style={{color: 'white', marginLeft: 24, fontSize: 20}}>my orders</Text>
        </View>
        <View style={{flex:4}}>
          <Button
            styleDisabled={{color: 'red'}}
            onPress={() => this.props.navigation.navigate('Page3')}>
            <View style={{backgroundColor: 'white', width: 300, height: 50, borderColor: 'black', borderRadius: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 30}}>
              <Image
                style={{height: 40, width: 40,marginRight: 10}}
                source={require('./img/google.png')}
                />
              <Text style={{fontSize: 20, textAlign: 'center'}}>Login with Google</Text>
            </View>
          </Button>
          <Button
            styleDisabled={{color: 'red'}}
            onPress={() => alert('not implemented')}>
            <View style={{backgroundColor: 'white', width: 300, height: 50, borderColor: 'black', borderRadius: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
              <Image
                style={{height: 50, width: 50,}}
                source={require('./img/face.png')}
                />
              <Text style={{fontSize: 20, textAlign: 'center'}}>Login with Facebook</Text>
            </View>
          </Button>
        </View>
      </View>
      <View style={{flex: 2, justifyContent: 'flex-end'}}>
        <Image
          source={require('./img/fire_up.png')}
          />
      </View>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primary_color,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
