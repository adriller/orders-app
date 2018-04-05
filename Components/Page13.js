import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, FlatList, Dimensions } from 'react-native';
import { StackNavigator } from 'react-navigation';
import {primary_color, accent_color} from './conf/conf';
import Button from 'react-native-button';
import PerfilCard from './page4_Perfil/PerfilCard';

export default class Page13 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };

  }
  static navigationOptions = {header: null};

render() {
  let { height } = Dimensions.get("window");
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: primary_color, width: '100%',height: 80, alignItems: 'center', justifyContent: 'flex-end', marginBottom: -10, zIndex: 10}}>
        <Text style={{fontSize: 26, color: 'white', fontWeight: 'bold'}}> Te recomendamos </Text>
      </View>

      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', width: '100%',marginTop: 5}}>
        <Image
          style={{top: 0, position:'absolute', zIndex: 999}}
          source={require('./img/base.png')}
          />

        <ScrollView>
          <View style={{padding: 20}}></View>
          {this.state.sellers.map((item, index) => {return(
            <PerfilCard key={index} nav={this.props.navigation} seller={item}  />
          );})}
        </ScrollView>

      </View>

    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
