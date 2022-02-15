import * as Constants from 'expo-constants';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { GutterSizes } from '../appearance';
import { Text } from '../components';

export const SplashLoadingScreen: React.FC = () => (
  <View style={styles.container}>
    <View>
      <Image source={require('../appearance/assets/cards.png')} style={styles.image} />
    </View>
    <View style={styles.banner}>
      <Text style={styles.label} align='center' textColor='#FFED47' size='xl'>
        May I?
      </Text>
    </View>
    <Text style={styles.text} align='center' textColor='#FFED47' size='md'>
      A Rummy Game
    </Text>
    <View style={styles.version}>
      <ActivityIndicator animating={true} color='#fff' />
      <Text gutters={{ top: 'md' }} size='xs' textColor='#fff'>
        Version {Constants.default.manifest.version}
      </Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#12890F',
    justifyContent: 'center',
    flex: 1,
    paddingVertical: GutterSizes.lg,
  },
  banner: {
    backgroundColor: '#66358C',
    padding: GutterSizes.md,
    paddingBottom: GutterSizes.xs,
    marginVertical: GutterSizes.md,
    width: '100%',
  },
  image: {
    height: 150,
    resizeMode: 'contain',
    width: 400,
  },
  label: {
    fontFamily: 'Spicy-Rice',
    lineHeight: 45,
  },
  text: {
    fontFamily: 'Spicy-Rice',
    lineHeight: 30,
  },
  version: {
    position: 'absolute',
    bottom: GutterSizes.lg,
  },
});
