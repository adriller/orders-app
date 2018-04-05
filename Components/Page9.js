import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { StackNavigator } from 'react-navigation';
import {primary_color, accent_color, secondary_text_color, primary_text_color} from './conf/conf';
import Button from 'react-native-button';
import PerfilCard from './page4_Perfil/PerfilCard';

export default class Page9 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [
        {id: 1, seller: {name: 'Jade Tortas', photo_perfil: 'https://vignette.wikia.nocookie.net/one-minute-meelee-fanon/images/b/bb/1786182-jade_mortal_kombat.png/revision/latest?cb=20170314171204'}, recipe: {name: 'head cake', photo: 'https://c1.staticflickr.com/2/1324/881301456_08dc23834a_b.jpg'}, price: 69, obs: 'I want it with blood', date_order: '20/20/20', date_delivery: '21/21/21', delivery_type: 'domicilio', acepted: 'Pedido Aceito', quantity: 10},

        {id: 1, seller: {name: 'Jade Tortas', photo_perfil: 'https://vignette.wikia.nocookie.net/one-minute-meelee-fanon/images/b/bb/1786182-jade_mortal_kombat.png/revision/latest?cb=20170314171204'}, recipe: {name: 'head cake', photo: 'https://c1.staticflickr.com/2/1324/881301456_08dc23834a_b.jpg'}, price: 69, obs: 'I want it with blood', date_order: '20/20/20', date_delivery: '21/21/21', delivery_type: 'domicilio', acepted: 'Pedido Aceito', quantity: 10}
      ]
    };

  }
  static navigationOptions = {header: null};

render() {
  var orders = this.state.orders;
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: primary_color, width: '100%',height: 80, alignItems: 'center', justifyContent: 'flex-end', marginBottom: -10, zIndex: 10}}>
        <Text style={{fontSize: 26, color: 'white', fontWeight: 'bold'}}> Mis pedidos </Text>
      </View>

      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', width: '100%',marginTop: 5}}>
        <Image
          style={{top: 0, position:'absolute', zIndex: 999}}
          source={require('./img/base.png')}
          />

        <ScrollView
          style={{paddingTop: 40, width: '100%'}}
          >

          <View style={{alignItems: 'center', width: '100%'}}>

            {orders.map((order, index) => {return(
              <View key={index} style={{backgroundColor: 'white', padding: 10, borderWidth: 1, borderRadius: 2, borderColor: '#ddd', borderBottomWidth: 0, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.8, shadowRadius: 4, elevation: 3, overflow: 'hidden', marginBottom: 20, width: '90%'}}>
                <View>
                  <View
                    style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}
                    >
                    <Image style={{height: 50, width: 50, borderRadius: 40, overflow:'hidden', marginRight: 10}} source={{uri: order.seller.photo_perfil}} />
                    <Text>{order.seller.name}</Text>
                  </View>
                  <View>
                    <Text style={{color: primary_text_color, fontWeight: 'bold', fontSize: 16}}>Pedido:</Text>
                    <Text style={{color: secondary_text_color, padding: 5, marginBottom: 10}}>{order.recipe.name}</Text>
                    <View style={{alignItems: 'center', justifyContent: 'center', marginBottom: 15}}><Image style={{height: 140, width: 270}} source={{uri: order.recipe.photo}} /></View>

                    <Text style={{color: primary_text_color, fontWeight: 'bold', fontSize: 16}}>Cantidad:</Text>
                    <Text style={{color: secondary_text_color, padding: 5, marginBottom: 15}}>{order.quantity}</Text>

                    <Text style={{color: primary_text_color, fontWeight: 'bold', fontSize: 16}}>Observaciones:</Text>
                    <Text style={{color: secondary_text_color, padding: 5, marginBottom: 15}}>{order.obs}</Text>

                    <Text style={{color: primary_text_color, fontWeight: 'bold', fontSize: 16}}>Fecha del pedido:</Text>
                    <Text style={{color: secondary_text_color, padding: 5, marginBottom: 15}}>{order.date_order}</Text>

                    <Text style={{color: primary_text_color, fontWeight: 'bold', fontSize: 16}}>Fecha de entrega:</Text>
                    <Text style={{color: secondary_text_color, padding: 5, marginBottom: 15}}>{order.date_delivery}</Text>

                    <Text style={{color: accent_color, fontWeight: 'bold', fontSize: 16, textAlign: 'center', marginBottom: 15}}>Entrega {order.delivery_type}</Text>

                    <Text style={{color: '#27AE60', fontWeight: 'bold', fontSize: 16, textAlign: 'center'}}>{order.acepted}</Text>
                  </View>

                </View>

              </View>
            );})}

          </View>

          <View style={{padding: 40}}></View>

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
