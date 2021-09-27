import React from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet, Text } from 'react-native';

export default WebviewScreen = ()=> {
  return <WebView style={styles.container}
    source ={{uri:'https://tramitesenlinea.policia.gob.ni/DenunciaL.aspx'}}
    />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});