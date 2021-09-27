import React from 'react';
import { View, Image, ScrollView, Dimensions, Text, StyleSheet} from 'react-native';

const {width} = Dimensions.get("window");
const height = width * 0.6; //60%

const images = [
  'https://image.freepik.com/vector-gratis/concepto-violencia-genero_23-2148607773.jpg',
  'https://image.freepik.com/vector-gratis/detener-concepto-violencia-genero_23-2148581693.jpg',
  'https://image.freepik.com/foto-gratis/violencia-fisica-domestica_155003-26348.jpg',
  'https://image.freepik.com/foto-gratis/mano-nina-oscuridad_127220-3.jpg',
  'https://image.freepik.com/foto-gratis/nina-triste-asustada-ojos-inyectados-sangre-amoratados-falsa-sonrisa-boca_155003-27671.jpg'
]

export default class ExploreScreen extends React.Component{
  state ={
      active: 0
  }

  change =({nativeEvent})=>{
    const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
    if(slide !== this.state.active){
      this.setState({active: slide});
    }  
  }
  render(){
    return(
      <View styles={style.container}>
        <ScrollView 
        pagingEnabled 
        horizontal
        onScroll={this.change}
        showsHorizontalScrollIndicator={false} 
        style={style.scroll}
        >
        {
          images.map((image, index) => (
            <Image
            key={index}
              source={{ uri: image}}
              style={style.image} />
          ))
        }
        </ScrollView>
        <View style={style.pagination}>
          {
            images.map((i, k) => (
              <Text key={k} style={k==this.state.active ? style.imageActiveBotton : style.imageBotton}>⬤</Text>
            ))
          }
        </View>
      </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
    marginTop: 50, 
    width, 
    height 
  },
  scroll:{
    width, 
    height
  },
  image: { 
    width, 
    height, 
    resizeMode: 'cover'
  },
  pagination: {
    flexDirection:'row', 
    position: 'absolute', 
    bottom:0, 
    alignSelf: 'center'
  },
  imageBotton: {
    fontSize:(width / 30), 
    color:'#888', 
    margin: 3
  },
  imageActiveBotton: {
    fontSize:(width / 30), 
    color:'#fff', 
    margin: 3
  }
})
