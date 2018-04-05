import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, FlatList, Dimensions, TextInput, KeyboardAvoidingView} from 'react-native';
import { StackNavigator } from 'react-navigation';
import {primary_color, accent_color, primary_text_color, secondary_text_color, light_primary_color, dark_primary_color} from './conf/conf';
import Button from 'react-native-button';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import CheckBox from 'react-native-checkbox';
import { Dropdown } from 'react-native-material-dropdown';
import t from 'tcomb-form-native'; // 0.6.9

const Form = t.form.Form;

const Recipe = t.struct({
  nombre: t.String,
  descripcion: t.String,
  precio: t.Number
});
const formStyles = {
  ...Form.stylesheet,

}
const options = {
  fields: {
    nombre: {
      error: 'Sin nombre no podemos empezar a vender tu producto!'
    },
    descripcion: {
      error: 'Nadie lo va a comprar ni no añade una descripcion!',
      multiline: true,
      stylesheet: {
        ...Form.stylesheet,
        textbox: {
        ...Form.stylesheet.textbox,
        normal: {
        ...Form.stylesheet.textbox.normal,
        height: 100
      },
      error: {
        ...Form.stylesheet.textbox.error,
        height: 100
      }
    }
  }
},
      precio: {
        error: 'El precio es obligatorio para que puedas ganar dinero!'
      },
},
  stylesheet: formStyles,
};

export default class Page12 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };

  }
  static navigationOptions = {header: null};

handleSubmit = () => {
  const value = this._form.getValue(); // use that ref to get the form value
  console.log('value: ', value);
}

render() {
  let { height } = Dimensions.get("window"); 
  let data = [{
    value: 'unidad',
  }, {
    value: 'porcion',
  }, {
    value: '1g',
  }, {
    value: '100g',
  }, {
    value: '500g',
  }, {
    value: '1kg',
  }];

  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: primary_color, width: '100%',height: 80, alignItems: 'center', justifyContent: 'flex-end', marginBottom: -10, zIndex: 10}}>
        <Text style={{fontSize: 26, color: 'white', fontWeight: 'bold'}}> Registrar receta </Text>
      </View>

      <View style={{flex: 1, width: '100%', marginTop: 5, padding: 0, margin: 0,}}>
        <Image
          style={{top: 0, position:'absolute', zIndex: 1, margin: 0}}
          source={require('./img/base.png')}
          />

        <KeyboardAvoidingView
          style={{width: '100%'}}
          behavior="padding"
          keyboardVerticalOffset={80}
          scrollEnabled={true}
          >
          <ScrollView style={{width: '100%', padding: 0, margin: 0,}}>
            <View style={{padding:25}}></View>
            <View style={{width: '100%', alignItems: 'center', justifyContent: 'center',}}>
              <View style={{alignItems: 'center', justifyContent: 'center',backgroundColor: primary_color,width: '90%', height: 80, borderTopLeftRadius: 20, borderTopRightRadius: 20, borderWidth: 1, borderColor: '#ddd', borderBottomWidth: 0, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.8, shadowRadius: 4, elevation: 3,}}><Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}> Descripcion </Text></View>
              <View style={{backgroundColor: 'white', paddingBottom: 10, borderWidth: 1, borderRadius: 2, borderColor: '#ddd', borderBottomWidth: 0, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.8, shadowRadius: 4, elevation: 3, overflow: 'hidden', marginBottom: 20, width: '90%'}}>
                <View style={{ justifyContent: 'center',backgroundColor: accent_color,width: '100%', minHeight: 30, marginBottom: 10}}><Text style={{fontSize: 16, color: 'black', fontWeight: 'bold', textAlign: 'left', paddingLeft: 5}}> Complete las siguientes informaciones: </Text></View>
                <View style={{padding: 10}}>
                  <Form
                    ref="form"
                    ref={c => this._form = c} // assign a ref
                    type={Recipe}
                    options={options}
                    />

                  <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{color: secondary_text_color,marginRight: 20}}>cada</Text>
                    <Dropdown
                      label='Seleccione la medida'
                      data={data}
                      containerStyle={{width: 150, margin: 0, padding:0}}
                      overlayStyle={{margin: 0, padding:0}}
                      value='unidad'
                      />
                  </View>
                </View>

              </View>
            </View>


            <View style={{width: '100%', alignItems: 'center', justifyContent: 'center',}}>
              <View style={{alignItems: 'center', justifyContent: 'center',backgroundColor: primary_color,width: '90%', height: 80, borderTopLeftRadius: 20, borderTopRightRadius: 20, borderWidth: 1, borderColor: '#ddd', borderBottomWidth: 0, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.8, shadowRadius: 4, elevation: 3,}}><Text style={{fontSize: 20, color: 'white', fontWeight: 'bold'}}> Fotos </Text></View>
              <View style={{backgroundColor: 'white', paddingBottom: 10, borderWidth: 1, borderRadius: 2, borderColor: '#ddd', borderBottomWidth: 0, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.8, shadowRadius: 4, elevation: 3, overflow: 'hidden', marginBottom: 20, width: '90%'}}>
                <View style={{ justifyContent: 'center',backgroundColor: accent_color,width: '100%', minHeight: 30, marginBottom: 10}}><Text style={{fontSize: 16, color: 'black', fontWeight: 'bold', textAlign: 'left', paddingLeft: 5}}> Suba al menos 3 fotos de su receta! </Text></View>
                <View style={{padding: 10}}>



                </View>
                <Button
                  style={{ alignItems: 'center', justifyContent: 'center', width: '100%'}}
                  styleDisabled={{color: 'red'}}
                  onPress={() => this.handleSubmit()}
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
    padding:0,
  },
});
