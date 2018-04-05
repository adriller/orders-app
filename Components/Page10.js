import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, FlatList, Dimensions, TextInput, AsyncStorage,KeyboardAvoidingView} from 'react-native';
import { StackNavigator } from 'react-navigation';
import {primary_color, accent_color, primary_text_color, secondary_text_color} from './conf/conf';
import Button from 'react-native-button';
import PerfilCard from './page4_Perfil/PerfilCard';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import CheckBox from 'react-native-checkbox';

export default class Page10 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      types: [],
      recipes: [],
      comments: [],
      stars: 0,
      services: ['Entrega a domicilio', 'Pagar con tarjeta'],
      photo_perfil: 'http://boredomfiles.com/wp-content/uploads/sites/5/2016/07/weirdanimal6.jpg', 
    };

  }
  static navigationOptions = {header: null};

saveField(name, value){
  console.log('save [seller]' + name + ' ' + value)
  const prefix = '[seller]';
  try {
    AsyncStorage.setItem(prefix+name, value);
  } catch (error) {
    console.log('not saved ' + prefix+name + value);
  }
}

add_recipe_type(food) {
  let index = this.state.types.indexOf(food);
  if(index == -1){
    this.state.types.push(food);
  }
  else{
    this.state.types.splice(index, 1);
  }
  console.log(this.state);
}

render() {
  let { height } = Dimensions.get("window");
  const food_types = [
    'Tortas',
    'Pasteles', 
    'Empanadas', 
    'Bocadillos', 
    'Saludable',
    'Vegetariana', 
    'Desayunos', 
    'Cenas',
  ];
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: primary_color, width: '100%',height: 80, alignItems: 'center', justifyContent: 'flex-end', marginBottom: -10, zIndex: 10}}>
        <Text style={{fontSize: 26, color: 'white', fontWeight: 'bold'}}> Registrate </Text>
      </View>

      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', width: '100%',marginTop: 5}}>
        <Image
          style={{top: 0, position:'absolute', zIndex: 1}}
          source={require('./img/base.png')}
          />
        <KeyboardAvoidingView
          behavior="padding"
          keyboardVerticalOffset={75}
          scrollEnabled={true}
          >
          <ScrollView
            >
            <View style={{padding: 30}}></View>
            <View style={{alignItems: 'center', justifyContent: 'center', width: '100%'}}>
              <View style={{backgroundColor: 'white', padding: 10, borderWidth: 1, borderRadius: 2, borderColor: '#ddd', borderBottomWidth: 0, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.8, shadowRadius: 4, elevation: 3, overflow: 'hidden', marginBottom: 20, width: '95%', alignItems: 'center', justifyContent: 'center', }}>

                <Image style={{height: 70, width: 70, }} source={require('./img/welcome.png')} />
                <Text style={{color: primary_text_color, fontSize: 24, textAlign: 'center', marginBottom: 10}}>Pronto podras vender tus productos y ganar dinero!</Text>
                <Text style={{color: secondary_text_color, padding: 5, marginBottom: 24, textAlign: 'center'}}>Recuerde que perfiles completos atraen mas clientes!</Text>

              </View>

              <View style={{alignItems: 'center', justifyContent: 'center',backgroundColor: primary_color,width: '95%', height: 80, borderTopLeftRadius: 20, borderTopRightRadius: 20}}><Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}> Informacion personal </Text></View>
              <View style={{backgroundColor: 'white', paddingBottom: 10, borderWidth: 1, borderRadius: 2, borderColor: '#ddd', borderBottomWidth: 0, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.8, shadowRadius: 4, elevation: 3, overflow: 'hidden', marginBottom: 20, width: '95%'}}>
                <View style={{ justifyContent: 'center',backgroundColor: accent_color,width: '100%', minHeight: 30, marginBottom: 10}}><Text style={{fontSize: 16, color: 'black', fontWeight: 'bold', textAlign: 'left', paddingLeft: 5}}> Nombre y direccion </Text></View>
                <View style={{padding: 10}}>
                  <TextInput underlineColorAndroid='transparent' style={{height: 50, borderColor: secondary_text_color, borderWidth: 1, paddingLeft: 10, paddingRight: 10, marginBottom:7}} onChangeText={(text) => this.setState({name: text})} value={this.state.name} editable = {true} placeholder='Nombre' onBlur={() => {this.saveField('name', this.state.name)}}/>
                  <TextInput underlineColorAndroid='transparent' style={{height: 50, borderColor: secondary_text_color, borderWidth: 1, paddingLeft: 10, paddingRight: 10, marginBottom:7}} onChangeText={(text) => this.setState({street: text})} value={this.state.street} editable = {true} placeholder='Calle' onBlur={() => {this.saveField('street', this.state.street)}}/>
                  <TextInput underlineColorAndroid='transparent' style={{height: 50, borderColor: secondary_text_color, borderWidth: 1, paddingLeft: 10, paddingRight: 10, marginBottom:7}} onChangeText={(text) => this.setState({city: text})} value={this.state.city} editable = {true} placeholder='Provincia' onBlur={() => {this.saveField('city', this.state.city)}}/>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <TextInput underlineColorAndroid='transparent' style={{height: 50, borderColor: secondary_text_color, borderWidth: 1, paddingLeft: 10, paddingRight: 10, marginBottom:7, width: '28%', }} onChangeText={(text) => this.setState({number: text})} value={this.state.number} editable = {true} placeholder='Numero' onBlur={() => {this.saveField('number', this.state.number)}}/>
                    <TextInput underlineColorAndroid='transparent' style={{height: 50, borderColor: secondary_text_color, borderWidth: 1, paddingLeft: 10, paddingRight: 10, marginBottom:7, width: '28%'}} onChangeText={(text) => this.setState({floor: text})} value={this.state.floor} editable = {true} placeholder='Piso' onBlur={() => {this.saveField('floor', this.state.floor)}}/>
                    <TextInput underlineColorAndroid='transparent' style={{height: 50, borderColor: secondary_text_color, borderWidth: 1, paddingLeft: 10, paddingRight: 10, marginBottom:7, width: '28%',}} onChangeText={(text) => this.setState({door: text})} value={this.state.door} editable = {true} placeholder='Puerta' onBlur={() => {this.saveField('door', this.state.door)}}/>
                  </View>
                  <TextInput underlineColorAndroid='transparent' style={{height: 50, borderColor: secondary_text_color, borderWidth: 1, paddingLeft: 10, paddingRight: 10, marginBottom:15}} onChangeText={(text) => this.setState({phone: text})} value={this.state.phone} editable = {true} placeholder='Telefono' onBlur={() => {this.saveField('phone', this.state.phone)}}/>
                </View>

              </View>

              <View style={{alignItems: 'center', justifyContent: 'center',backgroundColor: primary_color,width: '95%', height: 80, borderTopLeftRadius: 20, borderTopRightRadius: 20}}><Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}> Informacion de los productos </Text></View>
              <View style={{backgroundColor: 'white', paddingBottom: 10, borderWidth: 1, borderRadius: 2, borderColor: '#ddd', borderBottomWidth: 0, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.8, shadowRadius: 4, elevation: 3, overflow: 'hidden', marginBottom: 20, width: '95%'}}>
                <View style={{ justifyContent: 'center',backgroundColor: accent_color,width: '100%', minHeight: 30, marginBottom: 10}}><Text style={{fontSize: 16, color: 'black', fontWeight: 'bold', textAlign: 'left', paddingLeft: 5}}> Que tipos recetas haces para vender? </Text></View>
                <View style={{padding: 10}}>

                  {food_types.map((food, index) => {return(
                    <View key={index} >
                      <CheckBox label={food} checkboxStyle={{width: 20, height: 20,}} labelStyle={{color: 'black'}} checked={this.state[food]} onChange={(checked) => { this.setState({[food]: !this.state[food]}); this.add_recipe_type(food) }}/>
                    </View>
                  );})}

                </View>

                <View style={{ justifyContent: 'center',backgroundColor: accent_color,width: '100%', minHeight: 30, marginBottom: 5}}><Text style={{fontSize: 16, color: 'black', fontWeight: 'bold', textAlign: 'left', paddingLeft: 5}}> Descripcion de mis produtos </Text></View>
                <View style={{padding: 10}}>
                  <TextInput
                    style={{height: 150, borderColor: secondary_text_color, borderWidth: 1, paddingLeft: 10, paddingRight: 10, paddingBottom: 10, marginBottom:15}}
                    onChangeText={(text) => this.setState({description: text})}
                    value={this.state.description}
                    editable = {true}
                    underlineColorAndroid='transparent'
                    multiline={true}
                    placeholder='Di algo acerca de tus recetas. Seguro podras ganar mas clientes!'
                    />
                </View>
                <Button
                  style={{ alignItems: 'center', justifyContent: 'center', width: '100%'}}
                  styleDisabled={{color: 'red'}}
                  onPress={() => this.props.navigation.navigate('Page11', this.state)}
                  >
                  <View style={{ backgroundColor: accent_color, width: '90%', marginTop: 20, height: 40, alignItems: 'center', justifyContent: 'center', marginLeft: '5%'}}>
                    <Text style={{fontSize: 22, color: 'black', fontWeight: 'bold', textAlign: 'center'}}> Continuar</Text>
                  </View>
                </Button>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
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
