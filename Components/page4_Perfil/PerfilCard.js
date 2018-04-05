import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import {primary_color, accent_color, secondary_text_color, primary_text_color} from '../conf/conf';
import Button from 'react-native-button';

export default class PerfilCard extends React.Component {
  constructor(props) {
    super(props);
  }

  createPhoto = link => {
    <Image style={{height: 50, width: 50, }} source={{uri: link}} />
  }

  generatePhotos = () => {
    this.props.seller.photos.map(this.createPhoto)
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          styleDisabled={{color: 'red'}}
          onPress={() => this.props.nav.navigate('Page6', this.props.seller)}>
          <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', paddingTop: 10, paddingBottom: 10}}>
            <Image
              style={{height: 50, width: 50, borderRadius: 40, overflow:'hidden'}}
              source={{uri: this.props.seller.photo_perfil}}
              />
            <View style={{flex:1, flexDirection: 'column', justifyContent: 'center', paddingLeft: 15,}}>
              <Text style={{fontSize: 16, color: primary_text_color, fontWeight: 'bold'}}>{this.props.seller.name}</Text>
              <Text style={{fontSize: 12, color: secondary_text_color}}>{this.props.seller.types}</Text>
            </View>
          </View>
        </Button>
        <View style={{paddingTop: 10, paddingBottom: 10}}>
          <Text>{this.props.seller.description}</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingTop: 10, paddingBottom: 10, }}>
          <ScrollView horizontal={true}>
            {this.props.seller.recipes.map((recipe, index) => {return(
              <Button
                key={index}
                styleDisabled={{color: 'red'}}
                onPress={() => this.props.nav.navigate('Page7', {person: this.props.seller, recipe: recipe})}>
                <Image style={{height: 70, width: 70, marginLeft: 10, marginRight: 10}} source={{uri: recipe.photo[0]}} />
              </Button>
            );})}
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderWidth: 1,
    paddingLeft: 15, paddingRight: 15,
    marginLeft: 1, marginRight: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden',
    marginBottom: 20,
  },
});
