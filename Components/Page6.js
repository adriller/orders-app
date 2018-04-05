import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, FlatList } from 'react-native';
import { StackNavigator } from 'react-navigation';
import {primary_color, accent_color, secondary_text_color, primary_text_color} from './conf/conf';
import Button from 'react-native-button';
import PerfilCard from './page4_Perfil/PerfilCard';

export default class Page6 extends React.Component {
  constructor(props) {
    super(props);
    this.state={

    }
  }
  static navigationOptions = {header: null};

render() {

  const { params } = this.props.navigation.state;
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: primary_color, width: '100%', height: 80, zIndex: 0, position:'absolute'}}>
      </View>
      <View style={{ backgroundColor: primary_color, width: '100%', alignItems: 'center', height: 70, paddingTop: 30, paddingBottom: 10, marginBottom: 0, zIndex: 10}}>
        <Text style={{fontSize: 26, color: 'white', fontWeight: 'bold'}}> {params.name}</Text>
      </View>

      <ScrollView 
        showsVerticalScrollIndicator={false}
        style={{margin: 0, padding: 0}}>

        <View style={{alignItems: 'center', justifyContent:'center'}}>
          <View style={{ backgroundColor: primary_color, width: '100%',height: 100, alignItems: 'center',  marginBottom: 0, zIndex: 10, zIndex: 999}}>
            <Image
              style={{height: 50, width: 50, borderRadius: 40, overflow:'hidden', zIndex: 999}}
              source={{uri: params.photo_perfil}}
              />
            <View style={{flexDirection: 'row',}}>
              {[...Array(Math.round(params.stars))].map((a,index) => {return(<Image style={{height: 20, width: 20,}} source={require('./img/star2.png')} key={index}/>);})}
            </View>
            <Text style={{fontSize: 12, color: 'white', fontWeight: 'bold'}}> {params.stars} estrellas</Text>
          </View>
          <Image
            style={{zIndex: 999, marginTop: -10}}
            source={require('./img/base.png')}
            />
        </View>

        <View style={{width: '100%',marginTop: 5,  alignItems: 'center', justifyContent: 'center',}}>

          <View style={{backgroundColor: 'white', padding: 10, borderWidth: 1, borderRadius: 2, borderColor: '#ddd', borderBottomWidth: 0, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.8, shadowRadius: 4, elevation: 3, overflow: 'hidden', marginBottom: 20, width: '90%'}}>
            <Text style={{color: primary_text_color, fontWeight: 'bold', fontSize: 16}}>Sobre {params.name}:</Text>
            <Text style={{color: secondary_text_color, padding: 5, marginBottom: 15}}>{params.description}</Text>

            <Text style={{color: primary_text_color, }}>Tipos de recetas:</Text>
            <Text style={{color: secondary_text_color, padding: 5}}>{params.types}</Text>
          </View>

          <View style={{backgroundColor: 'white', padding: 10, borderWidth: 1, borderRadius: 2, borderColor: '#ddd', borderBottomWidth: 0, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.8, shadowRadius: 4, elevation: 3, overflow: 'hidden', marginBottom: 20, width: '90%'}}>
            <Text style={{color: primary_text_color, fontWeight: 'bold', fontSize: 16}}>Recetas:</Text>
            <View style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: 10}}>
              {params.recipes.map((recipe, index) => {return(
                <Button
                  styleDisabled={{color: 'red'}}
                  key={index}
                  onPress={() => this.props.navigation.navigate('Page7', {person: params, recipe: recipe})}>
                  <View  style={{marginBottom: 20}}><Image style={{height: 140, width: 270, }} source={{uri: recipe.photo[0]}}/>
                    <Text style={{textAlign: 'center', color: secondary_text_color}}>{recipe.name}</Text>
                  </View>
                </Button>
              );})}
            </View>
          </View>

          <View style={{backgroundColor: 'white', padding: 10, borderWidth: 1, borderRadius: 2, borderColor: '#ddd', borderBottomWidth: 0, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.8, shadowRadius: 4, elevation: 3, overflow: 'hidden', marginBottom: 20, width: '90%'}}>
            <Text style={{color: primary_text_color, fontWeight: 'bold', fontSize: 16}}>Servicios ofrecidos:</Text>
            {params.services.map((service, index) => {return(<Text key={index} style={{color: secondary_text_color, padding: 5}}>{service}</Text>);})}

            <Text style={{color: primary_text_color, fontWeight: 'bold', marginTop: 10, fontSize: 16}}>Comentarios de clientes:</Text>
            {params.comments.map((comment, index) => {return(<View key={index} style={{flexDirection:'row', padding: 2, marginTop: 2, marginBottom: 4, backgroundColor: 'lightgray', borderRadius: 10, overflow: 'hidden', justifyContent : 'space-between', alignItems:'center'}}>
                <Text style={{color: secondary_text_color, padding: 5, marginBottom: 1}}>{comment.text}</Text> 
                <View style={{flexDirection: 'row'}}>
                  {[...Array(Math.ceil(comment.stars))].map((a,index1) => {return(<Image key={index1} style={{height: 15, width: 15,}} source={require('./img/star2.png')} />);})}
                </View>
              </View>);})}
          </View>



          <View style={{padding: 15}}></View>


        </View>
      </ScrollView>

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
