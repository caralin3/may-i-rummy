import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { Animated, Image, StyleSheet, View } from 'react-native';
import { Card, Colors } from 'react-native-paper';
import { Col, Row } from './Grid';
import { FontSizes, GutterSizes } from '../appearance';
import { Text } from './Text';
import { CardSuit, CardValue, Deck } from '../types';
import { createFlipAnim } from '../utils';

export interface PlayingCardFrontProps {
  suit: CardSuit;
  value: CardValue;
}

export const PlayingCardFront: React.FC<PlayingCardFrontProps> = ({ suit, value }) => {
  const cardFace = () => {
    const cardVal = Number(value);
    if (isNaN(cardVal)) {
      if (value === 'joker') {
        return (
          <>
            <Row>
              <Col flex={1}>{suitIcon(FontSizes.lg, 'club')}</Col>
              <Col flex={1}>{suitIcon(FontSizes.lg, 'diamond')}</Col>
            </Row>
            <Row justify='center'>
              <Col flex={1}>{suitIcon(FontSizes.lg, 'heart')}</Col>
              <Col flex={1}>{suitIcon(FontSizes.lg, 'club')}</Col>
            </Row>
          </>
        );
      }
      return <Row justify='center'>{suitIcon(60)}</Row>;
    } else {
      if (cardVal < 4) {
        let icons = [];
        for (let i = 1; i < cardVal + 1; i++) {
          icons.push(i);
        }
        return icons.map((icon) => (
          <Row key={icon} flex={1} justify='center'>
            {suitIcon()}
          </Row>
        ));
      } else if (cardVal > 3 && cardVal !== 8 && cardVal !== 10) {
        let icons: JSX.Element[] = [];
        icons.push(
          <Row key={0} flex={1} justify='center'>
            <Col flex={1}>{suitIcon()}</Col>
            <Col flex={1}>{suitIcon()}</Col>
          </Row>
        );
        let i = cardVal - 2;
        while (i > 0) {
          if (i % 2 === 0) {
            icons.push(
              <Row key={i} flex={1} justify='center'>
                <Col flex={1}>{suitIcon()}</Col>
                <Col flex={1}>{suitIcon()}</Col>
              </Row>
            );
            i--;
          } else {
            icons.push(
              <Row key={i} flex={1} justify='center'>
                <Col flex={1}>{suitIcon()}</Col>
              </Row>
            );
          }
          i--;
        }
        return icons;
      } else if (cardVal === 8) {
        let icons: JSX.Element[] = [];
        for (let j = 0; j < 5; j++) {
          if (j % 2 === 0) {
            icons.push(
              <Row key={j} flex={1} justify='center'>
                <Col flex={1}>{suitIcon()}</Col>
                <Col flex={1}>{suitIcon()}</Col>
              </Row>
            );
          } else {
            icons.push(
              <Row key={j} flex={1} justify='center'>
                <Col flex={1}>{suitIcon()}</Col>
              </Row>
            );
          }
        }
        return icons;
      } else if (cardVal === 10) {
        let icons: JSX.Element[] = [];
        let k = 0;
        while (k < 7) {
          if (k % 2 === 0) {
            icons.push(
              <Row key={k} flex={1} justify='center'>
                <Col flex={1}>{suitIcon()}</Col>
                <Col flex={1}>{suitIcon()}</Col>
              </Row>
            );
            if (k === 2) {
              k++;
            }
          } else {
            icons.push(
              <Row key={k} flex={1} justify='center'>
                <Col flex={1}>{suitIcon()}</Col>
              </Row>
            );
          }
          k++;
        }
        return icons;
      }
    }
    return <View style={styles.face}>{suitIcon()}</View>;
  };

  const suitIcon = (size = 20, cardSuit: CardSuit = suit) => (
    <MaterialCommunityIcons
      name={`cards-${cardSuit}`}
      color={cardSuit === 'heart' || cardSuit === 'diamond' ? Colors.redA700 : Colors.black}
      style={styles.suit}
      size={size}
    />
  );

  const cardValue = () => {
    const cardVal = Number(value);
    if (isNaN(cardVal)) {
      return value.charAt(0).toUpperCase();
    }
    return value;
  };

  return (
    <Card style={styles.container} elevation={5}>
      <Row flex={1} justify='center'>
        {value === 'joker' ? (
          <Col style={styles.joker}>
            <Text>
              J{'\n'}O{'\n'}K{'\n'}E{'\n'}R
            </Text>
          </Col>
        ) : (
          <Col style={styles.value}>
            <Text>{cardValue()}</Text>
            {suitIcon(FontSizes.md)}
          </Col>
        )}
        <View style={styles.numbers}>{cardFace()}</View>
      </Row>
    </Card>
  );
};

export interface PlayingCardBackProps {
  deck: Deck;
}

export const PlayingCardBack: React.FC<PlayingCardBackProps> = ({ deck }) => {
  const backPattern =
    deck === 'blue'
      ? require('../appearance/assets/card-back-blue.png')
      : require('../appearance/assets/card-back-red.png');

  return (
    <Card style={styles.container} elevation={5}>
      <Image source={backPattern} resizeMode='contain' style={styles.backFace} />
    </Card>
  );
};

export interface PlayingCardProps {
  deck: Deck;
  faceDown?: boolean;
  suit: CardSuit;
  value: CardValue;
}

export const PlayingCard: React.FC<PlayingCardProps> = (props) => {
  const flipAnim = createFlipAnim(new Animated.Value(0));

  // React.useEffect(() => {
  //   flipAnim.flipCard();
  // }, []);

  return (
    <View>
      <Animated.View style={[styles.flip, flipAnim.frontAnimatedStyle]}>
        {props.faceDown ? <PlayingCardBack {...props} /> : <PlayingCardFront {...props} />}
      </Animated.View>
      <Animated.View style={[styles.flip, styles.flipBack, flipAnim.backAnimatedStyle]}>
        {props.faceDown ? <PlayingCardFront {...props} /> : <PlayingCardBack {...props} />}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    height: 150,
    marginBottom: 10, //remove
    padding: GutterSizes.xxs,
    width: 100,
  },
  backFace: {
    flex: 1,
    marginVertical: GutterSizes.xxs,
    width: '100%',
  },
  numbers: {
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 15,
    width: '100%',
  },
  face: {
    alignItems: 'center',
  },
  flip: {
    backfaceVisibility: 'hidden',
  },
  flipBack: {
    position: 'absolute',
    top: 0,
  },
  joker: {
    left: GutterSizes.xs,
    position: 'absolute',
    top: GutterSizes.xs,
  },
  suit: {
    textAlign: 'center',
  },
  value: {
    left: 0,
    position: 'absolute',
    top: GutterSizes.xs,
  },
});
