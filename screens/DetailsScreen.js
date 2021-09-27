import React, { Component } from 'react';
import  { Image, Linking , StyleSheet }
from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';



export default class DetailsScreen extends Component {

  render() {
    
    const handleCallPress = async() =>{
      Linking.openURL("tel: 25122727");
    };
    const handleCall2Press = async() =>{
        Linking.openURL("tel: 25122233");
    };
    const handleCall3Press = async() =>{
      Linking.openURL("tel: 25122387");
    };
    const handleCall4Press = async() =>{
      Linking.openURL("tel: 12345678");
    };
    return (
      <Container style = {styles.fondo}>
       
        <Content >
        <Text style = {styles.separador}></Text>
            <CardItem style = {styles.columna}
            >
              
              <Left >
                <Image 
                source={require('./../assets/log.png')} 
                style = {styles.imagen}
                />
                <Body>
                  <Text style = {styles.tit2} >Policia Nacional</Text>
                  <Text style = {styles.ti1} >Juigalpa,CHontales</Text>
                </Body>
              </Left>
             
                <Button onPress={handleCallPress} style = {styles.But} >
                   
                  <Text style = {styles.icon}>Llamar</Text>
                </Button>
            
              <Right>       
              </Right>
            </CardItem>
            
            <Text style = {styles.separador}></Text>
            <CardItem style = {styles.columna}>
              <Left >
                <Thumbnail 
                source={require('./../assets/log.png')} 
                style = {styles.imagen}
                />
                <Body>
                  <Text style = {styles.tit2} >Cruz Roja</Text>
                  <Text style = {styles.ti1} >Juigalpa,CHontales</Text>
                </Body>
              </Left>
              <Button onPress={handleCall2Press} style = {styles.But} >
                   
                  <Text style = {styles.icon}>Llamar</Text>
                </Button>
            
          
              <Right>
       
              </Right>
            </CardItem>

            <Text style = {styles.separador}></Text>
            <CardItem style = {styles.columna}>
              <Left >
                
                <Thumbnail 
                source={require('./../assets/log.png')} 
                style = {styles.imagen}
                />
                <Body>
                  <Text style = {styles.tit2} >Bomberos</Text>
                  <Text style = {styles.ti1} >Juigalpa,CHontales</Text>
                </Body>
              </Left>
          
                  <Button onPress={handleCall3Press} style = {styles.But} >
                    <Text style = {styles.icon}>Llamar</Text>
                  </Button>
                 
              <Right>
       
              </Right>
            </CardItem>
            <Text style = {styles.separador}></Text>
            
        {/* <Header style = {styles.container}>
        <Text style = {styles.titulo}>Contacto de Emergencia</Text>
        </Header>
        <Text style = {styles.separador}></Text>
            <CardItem style = {styles.columna}>
              <Left >
                <Thumbnail 
                source={require('./../assets/hos.jpg')} 
                style = {styles.imagen}
                />
                <Body>
                  <Text style = {styles.tit2} >Maria Jarquin</Text>
                  <Text style = {styles.ti1} >Juigalpa,CHontales</Text>
                </Body>
              </Left>
          
                  <Button style = {styles.But} >
                    <Text style = {styles.icon}>Llamar</Text>
                  </Button>
                 
              <Right>
       
              </Right>
            </CardItem> */}
            <Text style = {styles.separador}></Text>
        </Content>
      </Container>
    );
  }
}
const styles =  StyleSheet.create({
  container:{
      backgroundColor: '#1D2021',
      flexDirection: 'column',
      alignItems: 'center',
    
  },
  titulo:{
    fontSize: 18,
    fontWeight: 'bold',
    color: "#ffffff",
    textAlign:'center'
},

tit2:{
  fontSize: 18,
  fontWeight: 'bold',
  marginTop:30,
  marginStart:10,
  color: '#ffffff',
  textAlign:'center'
},
ti1:{
  fontSize: 14,
  color: '#ffffff',
 marginTop:1,
  marginHorizontal:10,
  textAlign:'center'
},
columna:{
  flexDirection:'column',
 
  width: 340,
  backgroundColor: '#1D2021',
  height: 150,
  borderTopLeftRadius:15,
  borderBottomLeftRadius:15,
  borderBottomRightRadius:15,
  borderTopRightRadius: 15,
  marginLeft: 10,
  marginHorizontal: 10,
},
fondo:{
  backgroundColor: '#0D0D0D',
},

imagen:{
  width: 95,
  height: 95,
  resizeMode: 'cover',
  borderRadius: 10,
  marginLeft: 10,
  marginTop: 110,
  
},
separador: {
  width: 10
},
icon:{
  height: 73,
  marginTop: 55,
  marginLeft:3,
  color: "#ffffff",
  fontSize:14 

  
},
ic2:{
  color: "#ffffff",    
},
But:{
  width: 95,
  height: 45,
  marginTop:60,
  marginLeft:170,
  borderRadius:15,
  backgroundColor:"#90168C"
},
But2:{
  width: 95,
  height: 45,
  margin:-45,
  marginLeft:200,
  borderRadius:15,
  backgroundColor:"#90168C"
},
})
