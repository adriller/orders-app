import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, FlatList } from 'react-native';
import { StackNavigator } from 'react-navigation';
import {primary_color, accent_color, secondary_text_color, primary_text_color} from './conf/conf';
import Button from 'react-native-button';
import PerfilCard from './page4_Perfil/PerfilCard';

export default class Page7 extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      imageShown: 0,
      person: {
        id: 1,
        name: 'Maria Dulces',
        photo_perfil: 'http://static.celebuzz.com/uploads/2012/07/15/Maria-Menounos-Bikinis-with-Shirtless-Derek-Hough-in-Malibu-6-620x413.jpg',
        description: 'confia en mis dulces',
        types:'dulces, pasteles, tortas',
        stars: 4.8,
        services: ['Entrega a domicilio', 'Pagar con tarjeta'],
        recipes: [
          {id: 1, price: 15, unity: 'la unidad', description: 'te va a encantaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaar', name: 'torta de arandanos', photo: ['http://arcdn.ar-cdn.com/recipes/xlarge/29bba79e-659a-46bc-b03a-d551c7947851.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKxGgYobqDBsbEkSsu52Q25Vs3PJuOVmPh23cNOns69T6V8iaF']},
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
    this.changeImage - this.changeImage.bind(this);
  }
  static navigationOptions = {header: null};


changeImage(){
}

render() {
  
  const { params } = this.props.navigation.state;
  const person = params.person;
  const recipe  = params.recipe;


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

        <ScrollView 
          showsVerticalScrollIndicator={false}
          style={{marginTop: 0, paddingTop: 20}}>

          <View style={{width: '100%',marginTop: 5,  alignItems: 'center', justifyContent: 'center',}}>

            <View style={{backgroundColor: 'white', padding: 10, borderWidth: 1, borderRadius: 2, borderColor: '#ddd', borderBottomWidth: 0, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.8, shadowRadius: 4, elevation: 3, overflow: 'hidden', marginBottom: 20, width: '90%', overflow: 'hidden', alignItems: 'center', paddingBottom: 20}}>
              <Image
                style={{height: 180, width: 260, marginBottom: 20, marginTop: 10}}
                source={{uri: recipe.photo[this.state.imageShown]}}
                />
              <ScrollView horizontal={true}>
                {recipe.photo.map((p, index) => {return(
                  <Button
                    styleDisabled={{color: 'red'}}
                    onPress={() => this.setState({imageShown: index})}
                    key={index}
                    >
                    <Image style={{height: 50, width: 50, marginLeft: 10, marginRight: 10}} source={{uri: p}} />
                  </Button>
                );})}
              </ScrollView>

            </View>

            <View style={{backgroundColor: 'white', padding: 10, borderWidth: 1, borderRadius: 2, borderColor: '#ddd', borderBottomWidth: 0, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.8, shadowRadius: 4, elevation: 3, overflow: 'hidden', marginBottom: 20, width: '90%'}}>
              <Text style={{color: primary_text_color, fontWeight: 'bold', fontSize: 16}}>Descripcion :</Text>
              <Text style={{color: secondary_text_color, padding: 5, marginBottom: 15}}>{recipe.description}</Text>


              <Text style={{color: primary_text_color, fontWeight: 'bold', fontSize: 16}}>Precio :</Text>

              <Text style={{color: '#27AE60', fontSize: 28, textAlign: 'center', fontWeight: '300'}}>{recipe.price} € </Text>

              <Text style={{color: primary_text_color, fontSize: 12, textAlign: 'center'}}>{recipe.unity}</Text>
              <Button
                styleDisabled={{color: 'red'}}
                onPress={() => this.props.navigation.navigate('Page8', {person: person, recipe: recipe})}
                >
                <View style={{ backgroundColor: accent_color, width: '100%', marginTop: 20, padding: 5}}>
                  <Text style={{fontSize: 24, color: 'black', fontWeight: 'bold', textAlign: 'center'}}> LO QUIERO! </Text>
                </View>
              </Button>
            </View>


            <View style={{padding: 75}}></View>


          </View>
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
    width: '100%',
    padding: 0,
    margin: 0,
  },
});
