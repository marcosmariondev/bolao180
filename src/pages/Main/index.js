import React from 'react';

import {
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';

import Bg from '../../assets/bg-home.jpg';
import {bold} from 'ansi-colors';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 20,
  },
  logo: {
    height: Dimensions.get('window').height * 0.11,
    marginVertical: Dimensions.get('window').height * 0.11,
    width: Dimensions.get('window').height * 0.11 * (1950 / 662),
  },
  welcome: {
    fontSize: 30,
    fontWeight: 'bold',
    textShadowColor: '#fff',
    textTransform: 'capitalize',
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  buttons: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 15,
    margin: 10,
    borderRadius: 10,
    textTransform: 'capitalize',
  },
  buttonText: {
    fontSize: 20,
  },
});

const Main = () => (
  <ImageBackground source={Bg} style={styles.container} resizeMode="cover">
    <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
    <Image
      source={{
        uri: 'http://www.bolao180.com.br/site/images/logo.png',
      }}
      style={styles.logo}
      resizeMode="contain"
    />
    <Text style={styles.welcome}>Bem-vindo ao Bolao180</Text>
    <View style={styles.fixToText}>
      <TouchableOpacity
        onPress={() => Alert.alert('Apostar')}
        style={styles.buttons}>
        <Text style={styles.buttonText}>Apostar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => Alert.alert('Apostar')}
        style={styles.buttons}>
        <Text style={styles.buttonText}>Visualizar resultados</Text>
      </TouchableOpacity>
    </View>
  </ImageBackground>
);

export default Main;
