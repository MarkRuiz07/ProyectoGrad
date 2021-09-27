// Integration of Google map in React Native using react-native-maps
// https://aboutreact.com/react-native-map-example/

// Import React
import React from 'react';
// Import required components
import { SafeAreaView, StyleSheet, View } from 'react-native';
import {  Header,  Text, Container, } from 'native-base';

// Import Map and Marker
import MapView, { Marker } from 'react-native-maps';

const ProfileScreen = () => {
  
  return (
    <Container>
  <Header style = {styles.hola}>
        <Text style = {styles.titulo}>Lugares Seguros</Text>
   </Header>
   </Container>,
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <MapView
          style={styles.mapStyle}
          initialRegion={{
            latitude: 	 12.10039,
            longitude: 		-85.37976,
            latitudeDelta: 0.0100,
            longitudeDelta: 0.0100,
          }}
          customMapStyle={mapStyle}>
          <Marker
            draggable
            coordinate={{
              latitude: 37.78825,
              longitude: -122.4324,
            }}
            onDragEnd={
              (e) => alert(JSON.stringify(e.nativeEvent.coordinate))
            }
            title={'El Esfuerzo Trae Sus Frutos'}
            description={'Vamos Adelante Gladeadores del Olimpo'}
          />
          <Marker
            draggable
            coordinate={{
              latitude: 12.099743507687046, 
              longitude: -85.37874834579695,
            }}
            onDragEnd={
              (e) => alert(JSON.stringify(e.nativeEvent.coordinate))
            }
            title={'Lugar Seguro'}
            description={'Aqui te puedes refugiar cuando te estes en peligro'}
          />
           <Marker
            draggable
            coordinate={{
             
              latitude:  12.09716289163202, 
              longitude: -85.37062449398461,
            }}
            onDragEnd={
              (e) => alert(JSON.stringify(e.nativeEvent.coordinate))
            }
            title={'Lugar Seguro'}
            description={'Aqui te puedes refugiar cuando te estes en peligro'}
          />
          <Marker
            draggable
            coordinate={{
             
              latitude: 12.106380327410992, 
              longitude:  -85.35732109263523,
              
            }}
            onDragEnd={
              (e) => alert(JSON.stringify(e.nativeEvent.coordinate))
            }
            title={'Lugar Seguro'}
            description={'Aqui te puedes refugiar cuando te estes en peligro'}
          /><Marker
          draggable
          coordinate={{
           
            latitude: 12.09599352170491, 
            longitude:  -85.36120639235959,
             
          }}
          onDragEnd={
            (e) => alert(JSON.stringify(e.nativeEvent.coordinate))
          }
          title={'Lugar Seguro'}
          description={'Aqui te puedes refugiar cuando te estes en peligro'}
        /><Marker
        draggable
        coordinate={{
         
          latitude: 12.096374026276512,
          longitude:  -85.36417919789137,
           
        }}
        onDragEnd={
          (e) => alert(JSON.stringify(e.nativeEvent.coordinate))
        }
        title={'Lugar Seguro'}
        description={'Aqui te puedes refugiar cuando te estes en peligro'}
      /><Marker
      draggable
      coordinate={{
       
        latitude: 12.112482070021624,
        longitude: -85.37257192572206,
        
      }}
      onDragEnd={
        (e) => alert(JSON.stringify(e.nativeEvent.coordinate))
      }
      title={'Lugar Seguro'}
      description={'Aqui te puedes refugiar cuando te estes en peligro'}
    />
        </MapView>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const mapStyle = [
  { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
  { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
  { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#d59563' }],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#d59563' }],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [{ color: '#263c3f' }],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#6b9a76' }],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{ color: '#38414e' }],
  },
  {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [{ color: '#212a37' }],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#9ca5b3' }],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [{ color: '#746855' }],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [{ color: '#1f2835' }],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#f3d19c' }],
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [{ color: '#2f3948' }],
  },
  {
    featureType: 'transit.station',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#d59563' }],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{ color: '#17263c' }],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#515c6d' }],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.stroke',
    stylers: [{ color: '#17263c' }],
  },
];

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  mapStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  hola:{
    backgroundColor: '#1f65ff',
    flexDirection: 'column',
    alignItems: 'center',
  
  },
  titulo:{
    fontSize: 20,
    fontWeight: 'bold',
    color: "#ffffff",
    textAlign:'center'
  }
});