import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { StackNavigator } from 'react-navigation';
import {primary_color, accent_color} from './conf/conf';
import Button from 'react-native-button';

export default class Page3 extends React.Component {
  static navigationOptions = {header: null};

render() {
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: primary_color, width: '100%',height: 80, alignItems: 'center', justifyContent: 'flex-end', marginBottom: -10, zIndex: 10}}>
        <Text style={{fontSize: 26, color: 'white', fontWeight: 'bold'}}> Que Buscas? </Text>
      </View>
      <Image
        style={{}}
        source={require('./img/base.png')}
        />
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize: 28, textAlign: 'center', marginBottom: 60, padding: 40}}>Puedes crear un perfil de comprador o de vendedor</Text>
        <Button
            styleDisabled={{color: 'red'}}
            onPress={() => this.props.navigation.navigate('Page4')}>
            <View style={{backgroundColor: primary_color, width: 300, height: 50, borderColor: primary_color, borderWidth: 2, borderRadius: 20, overflow:'hidden', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 30}}>
              <Text style={{fontSize: 20, textAlign: 'center', color: 'white'}}>Quiero comprar encomiendas</Text>
            </View>
          </Button>
          <Button
            styleDisabled={{color: 'red'}}
            onPress={() => this.props.navigation.navigate('Page10')}>
            <View style={{backgroundColor: 'white', width: 300, height: 50, borderColor: primary_color, borderWidth: 2,borderRadius: 20, overflow:'hidden', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontSize: 20, textAlign: 'center', color: primary_color}}>Quiero vender encomiendas</Text>
            </View>
          </Button>
      </View>

    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
});
