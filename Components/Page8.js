import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, AsyncStorage, TextInput, KeyboardAvoidingView} from 'react-native';
import { StackNavigator } from 'react-navigation';
import {primary_color, accent_color, secondary_text_color, primary_text_color} from './conf/conf';
import Button from 'react-native-button';
import DatePicker from 'react-native-datepicker'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import CheckBox from 'react-native-checkbox';

export default class Page8 extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      save_address: true,
      price: 0,
      quantity: 1, 
      obs: -1,
      delivery_type: -1,
      date_order: '',
      date_delivery: '',
      time_delivery: '',
      person: {
        id: 1,
        name: 'Maria Dulces',
        photo_perfil: 'http://static.celebuzz.com/uploads/2012/07/15/Maria-Menounos-Bikinis-with-Shirtless-Derek-Hough-in-Malibu-6-620x413.jpg',
        description: 'confia en mis dulces',
        types:'dulces, pasteles, tortas',
        stars: 4.8,
        services: ['Entrega a domicilio', 'Pagar con tarjeta'],
        recipes: [
          {id: 1, price: 15, unity: 'unidad', description: 'te va a encantaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaar', name: 'torta de arandanos', photo: ['http://arcdn.ar-cdn.com/recipes/xlarge/29bba79e-659a-46bc-b03a-d551c7947851.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKxGgYobqDBsbEkSsu52Q25Vs3PJuOVmPh23cNOns69T6V8iaF']},
          {id: 2, price: 15, unity: 'la unidad', description: 'te va a encantaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaar',name: 'pancakes', photo: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKxGgYobqDBsbEkSsu52Q25Vs3PJuOVmPh23cNOns69T6V8iaF']},
          {id: 3, price: 15, unity: 'la unidad', description: 'te va a encantaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaar',name: 'Sopa de piña', photo: ['https://imagesvc.timeincapp.com/v3/mm/image?url=http%3A%2F%2Fcdn-img.health.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Flarge_16_9%2Fpublic%2Fstyles%2Fmain%2Fpublic%2Fcurried-ginger-carrot-soup-hl-521968-x.jpg%3Fitok%3D8IOKw6_q&w=700&q=85']}
        ],
        comments: [
          {photo: 'http://static.celebuzz.com/uploads/2012/07/15/Maria-Menounos-Bikinis-with-Shirtless-Derek-Hough-in-Malibu-6-620x413.jpg', text: 'Amei???? Achei tudo?????', stars: 5},

          {photo: 'http://static.celebuzz.com/uploads/2012/07/15/Maria-Menounos-Bikinis-with-Shirtless-Derek-Hough-in-Malibu-6-620x413.jpg', text: 'Lindissima, tava tudo queimado', stars: 3}, 

          {photo: 'http://static.celebuzz.com/uploads/2012/07/15/Maria-Menounos-Bikinis-with-Shirtless-Derek-Hough-in-Malibu-6-620x413.jpg', text: 'Adorei', stars: 1}
        ]
      }
    }
  }
  static navigationOptions = {header: null};


saveField(name, value){
  if(!this.state.save_address) return;
  try {
    console.log('save ' + name + ' ' + value)
    AsyncStorage.setItem(name, value);
  } catch (error) {
    console.log('not saved ' + name + value);
  }
}

componentDidMount(){
  recoverFields = ['street', 'number', 'floor', 'door', 'phone', 'city']
  recoverFields.map((field) => {
    try {
      AsyncStorage.getItem(field).then( (value) =>  {
        console.log(field + ' ' + JSON.stringify(value))
        if (value !== null){
          this.setState({[field] : value});
        }
      });
    } catch (error) {
      console.log('not got ' + field);
    }
  })
}


render() {

  const { params } = this.props.navigation.state;
  const person = params.person;
  const recipe  = params.recipe;
  const radio_props = [
    {label: 'Entrega a domicilio', value: 0 },
    {label: 'Retirar en local', value: 1 }
  ];
  const addresForm =  <View><TextInput underlineColorAndroid='transparent' style={{height: 50, borderColor: secondary_text_color, borderWidth: 1, paddingLeft: 10, paddingRight: 10, marginBottom:7}} onChangeText={(text) => this.setState({street: text})} value={this.state.street} editable = {true} placeholder='Calle' onBlur={() => {this.saveField('street', this.state.street)}}/><TextInput underlineColorAndroid='transparent' style={{height: 50, borderColor: secondary_text_color, borderWidth: 1, paddingLeft: 10, paddingRight: 10, marginBottom:7}} onChangeText={(text) => this.setState({city: text})} value={this.state.city} editable = {true} placeholder='Provincia' onBlur={() => {this.saveField('city', this.state.city)}}/><View style={{flexDirection: 'row', justifyContent: 'space-between'}}><TextInput underlineColorAndroid='transparent' style={{height: 50, borderColor: secondary_text_color, borderWidth: 1, paddingLeft: 10, paddingRight: 10, marginBottom:7, width: '28%', }} onChangeText={(text) => this.setState({number: text})} value={this.state.number} editable = {true} placeholder='Number' onBlur={() => {this.saveField('number', this.state.number)}}/><TextInput underlineColorAndroid='transparent' style={{height: 50, borderColor: secondary_text_color, borderWidth: 1, paddingLeft: 10, paddingRight: 10, marginBottom:7, width: '28%'}} onChangeText={(text) => this.setState({floor: text})} value={this.state.floor} editable = {true} placeholder='Piso' onBlur={() => {this.saveField('floor', this.state.floor)}}/><TextInput underlineColorAndroid='transparent' style={{height: 50, borderColor: secondary_text_color, borderWidth: 1, paddingLeft: 10, paddingRight: 10, marginBottom:7, width: '28%',}} onChangeText={(text) => this.setState({door: text})} value={this.state.door} editable = {true} placeholder='Puerta' onBlur={() => {this.saveField('door', this.state.door)}}/></View><TextInput underlineColorAndroid='transparent' style={{height: 50, borderColor: secondary_text_color, borderWidth: 1, paddingLeft: 10, paddingRight: 10, marginBottom:15}} onChangeText={(text) => this.setState({phone: text})} value={this.state.phone} editable = {true} placeholder='Telefono' onBlur={() => {this.saveField('phone', this.state.phone)}}/><CheckBox label='Guardar mi dirección' checkboxStyle={{width: 20, height: 20}} checked={this.state.save_address} onChange={(checked) => this.setState({save_address: !this.state.save_address})} onBlur={() => {this.saveField('city', this.state.city)}}/></View>;

  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: primary_color, width: '100%', alignItems: 'center', height: 70, paddingTop: 30, paddingBottom: 10, marginBottom: 0, zIndex: 10}}>
        <Text style={{fontSize: 26, color: 'white', fontWeight: 'bold'}}> {person.name}</Text>
      </View>
      <View style={{ backgroundColor: accent_color, width: '100%', alignItems: 'center', paddingBottom: 10, paddingTop: 10, marginBottom: 0, zIndex: 10}}>
        <Text style={{fontSize: 26, color: secondary_text_color, fontWeight: 'bold'}}> {recipe.name}</Text>
      </View>
      <View>
        <Image
          style={{zIndex: 999, top: -5, position: 'absolute'}}
          source={require('./img/fire_down.png')}
          />

        <KeyboardAvoidingView
          behavior="padding"
          keyboardVerticalOffset={150}
          scrollEnabled={true}
          >
          <ScrollView
            style={{marginTop: 0, paddingTop: 20}}
            >
            <View style={{width: '100%',marginTop: 5,  alignItems: 'center', justifyContent: 'center',}}>

              <View style={{backgroundColor: 'white', padding: 10, borderWidth: 1, borderRadius: 2, borderColor: '#ddd', borderBottomWidth: 0, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.8, shadowRadius: 4, elevation: 3, overflow: 'hidden', marginBottom: 20, width: '90%'}}>
                <Text style={{color: primary_text_color, fontWeight: 'bold', fontSize: 16}}>Cantidad :</Text>

                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center',marginTop: 10}}>
                  <Button
                    styleDisabled={{color: 'red'}}
                    onPress={() => {this.state.quantity <= 1 ? null : this.setState({quantity: this.state.quantity-1})}}
                    >
                    <View style={{borderWidth: 1, borderRadius: 60, overflow: 'hidden', width: 30, height: 30, marginRight: 10}}><Text style={{textAlign:'center',lineHeight: 27, fontSize: 20}}>-</Text></View>
                  </Button>
                  <View style={{ width: 30, height: 30, borderBottomWidth: 1}}><Text style={{textAlign:'center', lineHeight: 30, fontSize: 24}}>{this.state.quantity}</Text></View>
                  <Button
                    styleDisabled={{color: 'red'}}
                    onPress={() => {this.setState({quantity: this.state.quantity+1})}}
                    >
                    <View style={{borderWidth: 1, borderRadius: 60, overflow: 'hidden', width: 30, height: 30, marginLeft: 10}}><Text style={{textAlign:'center', lineHeight: 27, fontSize: 20}}>+</Text></View>
                  </Button>
                </View>
                <Text style={{color: secondary_text_color, padding: 5, marginBottom: 15, textAlign: 'center'}}>{this.state.quantity} x {recipe.unity}</Text>

                <Text style={{color: primary_text_color, fontWeight: 'bold', fontSize: 16}}>Precio Total:</Text>
                <Text style={{color: '#27AE60', fontSize: 28, textAlign: 'center', fontWeight: '300'}}>{recipe.price * this.state.quantity} € </Text>

                <Text style={{color: secondary_text_color, padding: 5, marginBottom: 15, textAlign: 'center'}}>* Pagaras para el vendedor en la entrega del producto</Text>

                <Text style={{color: primary_text_color, fontWeight: 'bold', fontSize: 16}}>Observaciones:</Text>
                <TextInput
                  style={{height: 150, borderColor: secondary_text_color, borderWidth: 1, paddingLeft: 10, paddingRight: 10, paddingBottom: 10, marginBottom:15}}
                  onChangeText={(text) => this.setState({obs: text})}
                  value={this.state.text}
                  editable = {true}
                  underlineColorAndroid='transparent'
                  multiline={true}
                  placeholder='Opcional'
                  />

                <Text style={{color: primary_text_color, fontWeight: 'bold', fontSize: 16}}>Fecha de entrega:</Text>
                <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 10, marginBottom: 15}}>
                  <DatePicker
                    style={{width: 200}}
                    date={this.state.date_delivery}
                    mode="date"
                    placeholder="Seleccionar Fecha"
                    format="DD-MM-YYYY"
                    minDate="01-04-2018"
                    maxDate="01-01-2020"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                      dateIcon: {
                        position: 'absolute',
                          left: 0,
                            top: 4,
                              marginLeft: 0
                      },
                        dateInput: {
                          marginLeft: 36
                        }
                      // ... You can check the source to find the other keys.
                    }}
                    onDateChange={(date) => {this.setState({date_delivery: date})}}
                    />
                </View>

                <Text style={{color: primary_text_color, fontWeight: 'bold', fontSize: 16}}>Hora de entrega:</Text>
                <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 10, marginBottom: 15}}>
                  <DatePicker
                    style={{width: 200}}
                    date={this.state.time_delivery}
                    mode="time"
                    placeholder="Seleccionar Hora"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                      dateIcon: {
                        position: 'absolute',
                          left: 0,
                            top: 4,
                              marginLeft: 0
                      },
                        dateInput: {
                          marginLeft: 36
                        }
                      // ... You can check the source to find the other keys.
                    }}
                    onDateChange={(date) => {this.setState({time_delivery: date})}}
                    />
                </View>

                <Text style={{color: primary_text_color, fontWeight: 'bold', fontSize: 16, marginBottom: 10}}>Tipo de entrega:</Text>
                <RadioForm
                  radio_props={radio_props}
                  initial={-1}
                  formHorizontal={false}
                  labelHorizontal={true}
                  buttonColor={primary_color}
                  selectedButtonColor={primary_color}
                  animation={true}
                  buttonSize={15}
                  style={{justifyContent: 'flex-start', alignItems: 'flex-start', padding: 5}}
                  buttonWrapStyle={{justifyContent: 'flex-start', padding: 5}}
                  onPress={(value) => {this.setState({delivery_type:value})}}
                  />

                {this.state.delivery_type == 0 ? addresForm : null}

                {this.state.delivery_type == 1 ? <Text style={{color: secondary_text_color, padding: 5, marginBottom: 15, textAlign: 'center'}}>* Te enviaremos la ubicacion de entrega cuando el vendedor acepte el pedido</Text>: null}

                <Button
                  styleDisabled={{color: 'red'}}
                  onPress={() => this.props.navigation.navigate('Page9')}
                  >
                  <View style={{ backgroundColor: accent_color, width: '100%', marginTop: 20, padding: 5}}>
                    <Text style={{fontSize: 24, color: 'white', fontWeight: 'bold', textAlign: 'center'}}> Finalizar Pedido </Text>
                  </View>
                </Button>
              </View>

              <View style={{padding: 75}}></View>

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
    width: '100%',
    padding: 0,
    margin: 0,
  },
});
