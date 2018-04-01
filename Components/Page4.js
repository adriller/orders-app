import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, FlatList } from 'react-native';
import { StackNavigator } from 'react-navigation';
import {primary_color, accent_color} from './conf/conf';
import Button from 'react-native-button';
import PerfilCard from './page4_Perfil/PerfilCard';

export default class Page4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sellers: [
        {
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
        },

        {
          id: 2, 
          photo_perfil: 'https://www.vbout.com/images/persona/buyer-persona-image1.png', 
          name: 'Jose Pascoa', 
          description: 'dulces de pascoa AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA', types:'huevos, pasteles', 
          services: ['Entrega a domicilio', 'Retirar en local'],
          stars: 4.2,
          recipes: [
            {id: 1, price: 25, unity: '100 gramos', description: 'huevo puro chocolate', name: 'huevo de chocolate', photo: ['https://3.bp.blogspot.com/-oor4ODZSh7w/WJXJ_Is6-cI/AAAAAAAAJok/_CTNwgAaLvgh83osen227iThOJBcVMeVwCLcB/s1600/ovos-de-pascoa-de-colher-brigadeiro-maracuja-brownie-e-coco-deli-delicia-2-1263x560.jpg', 'https://i.ytimg.com/vi/qcmIDm8KYbs/maxresdefault.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDxJdi5qCZIuwWzZbVdy4YiyydNjxL2ymnmvnarwGqqlO7ToSg']},
            {id: 2, price: 15, unity: 'la unidad', description: 'te va a encantaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaar',name: 'pancakes', photo: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKxGgYobqDBsbEkSsu52Q25Vs3PJuOVmPh23cNOns69T6V8iaF']},
            {id: 3, price: 15, unity: 'la unidad', description: 'te va a encantaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaar',name: 'Sopa de piña', photo: ['https://imagesvc.timeincapp.com/v3/mm/image?url=http%3A%2F%2Fcdn-img.health.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Flarge_16_9%2Fpublic%2Fstyles%2Fmain%2Fpublic%2Fcurried-ginger-carrot-soup-hl-521968-x.jpg%3Fitok%3D8IOKw6_q&w=700&q=85']}
          ],
          comments: [
            {photo: 'http://static.celebuzz.com/uploads/2012/07/15/Maria-Menounos-Bikinis-with-Shirtless-Derek-Hough-in-Malibu-6-620x413.jpg', text: 'Amei???? Achei tudo?????', stars: 5},

            {photo: 'http://static.celebuzz.com/uploads/2012/07/15/Maria-Menounos-Bikinis-with-Shirtless-Derek-Hough-in-Malibu-6-620x413.jpg', text: 'Lindissima, tava tudo queimado', stars: 3}, 

            {photo: 'http://static.celebuzz.com/uploads/2012/07/15/Maria-Menounos-Bikinis-with-Shirtless-Derek-Hough-in-Malibu-6-620x413.jpg', text: 'Adorei', stars: 1}
          ]
        },

        {
          id: 3, 
          photo_perfil: 'http://boredomfiles.com/wp-content/uploads/sites/5/2016/07/weirdanimal6.jpg', 
          name: 'Melanie Venezolita', 
          description: 'las mejores arepas!!! pide pide pide pide pide pide pide pide pide pide pide pide pide pide pide pide pide pide pide pide pide pide pide pide pide pide pide pide pide pide pide pide pide pide pide pide pide pide pide pide pide pide pide pide pide pide pide pide pide pide pide pide  AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA', 
          types:'arepas, comida venezoelana', 
          services: ['Entrega a domicilio', 'Pagar con tarjeta'],
          stars: 4.8,
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
        },

        {id: 4, 
         photo_perfil: 'http://cdn2.salud180.com/sites/default/files/field/image/2013/07/sermejorpersona2.jpg', name: 'Janilet', 
         description: 'Mi mejor receta es la 3 leches', 
         types:'dulces', 
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
        }, 

        {
          id: 5,
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
        },

        {
          id: 6, 
          photo_perfil: 'https://www.vbout.com/images/persona/buyer-persona-image1.png', 
          name: 'Jose Pascoa', 
          description: 'dulces de pascoa AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA', types:'huevos, pasteles', 
          services: ['Entrega a domicilio', 'Pagar con tarjeta'],
          stars: 0.8,
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
        },

        {
          id: 7, 
          photo_perfil: 'http://boredomfiles.com/wp-content/uploads/sites/5/2016/07/weirdanimal6.jpg', 
          name: 'Melanie Venezolita', 
          description: 'las mejores arepas!!! pide pide pide pide pide pide pide pide pide pide pide pide pide pide pide pide pide pide pide pide pide pide pide pide pide pide pide pide pide pide pide pide pide pide pide pide pide pide pide pide pide pide pide pide pide pide pide pide pide pide pide pide  AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA', 
          types:'arepas, comida venezoelana', 
          services: ['Entrega a domicilio', 'Pagar con tarjeta'],
          stars: 1.8,
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
        },

        {id: 8, 
         photo_perfil: 'http://cdn2.salud180.com/sites/default/files/field/image/2013/07/sermejorpersona2.jpg', name: 'Janilet', 
         description: 'Mi mejor receta es la 3 leches', 
         types:'dulces', 
         stars: 2.8,
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
      ]
    };

  }
  static navigationOptions = {header: null};

render() {
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

        <FlatList
          style={{paddingTop: 20,}}
          data={this.state.sellers}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <PerfilCard nav={this.props.navigation} seller={item}  />
          )}
          />

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
