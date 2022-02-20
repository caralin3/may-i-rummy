import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Colors, GutterSizes } from '../appearance';
import { Button, Row, Text } from '../components';
import { RootStackParamList } from '../navigation';

export interface HomeScreenProps extends NativeStackScreenProps<RootStackParamList> {}

export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation: { navigate } }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <View>
          <Text bold align='center' textColor='yellow' size='xxl' style={styles.title}>
            May I?
          </Text>
          <Text bold align='center' textColor='yellow' style={styles.subtitle}>
            A Rummy Game
          </Text>
        </View>
        <Image source={require('../appearance/assets/cards.png')} resizeMode='contain' style={styles.image} />
      </View>
      <View>
        <Row>
          <Button title='Play' onPress={() => navigate('Play')} />
        </Row>
        <Row guttersVertical='md'>
          <Button title='Rules' onPress={() => navigate('Rules')} />
        </Row>
        <Row>
          <Button title='Settings' onPress={() => navigate('Settings')} />
        </Row>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: Colors.green,
    flex: 1,
    justifyContent: 'flex-end',
    padding: GutterSizes.md,
    paddingTop: GutterSizes.xl,
  },
  titleContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-around',
    paddingBottom: 50,
  },
  title: {
    fontFamily: 'Spicy-Rice',
    lineHeight: 52,
  },
  subtitle: {
    fontFamily: 'Spicy-Rice',
    lineHeight: 28,
  },
  image: {
    height: 250,
    marginTop: 50,
    width: 650,
  },
});
