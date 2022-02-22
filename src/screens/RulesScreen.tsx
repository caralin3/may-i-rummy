import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Colors, FontSizes, GutterSizes } from '../appearance';
import { Button, Col, Row, Text } from '../components';

export interface RulesScreenProps {}

export const RulesScreen: React.FC<RulesScreenProps> = () => {
  return (
    <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.container}>
      <Text bold align='center' textColor='yellow' size='xl' style={styles.title} gutters={{ top: 'xl', bottom: 'lg' }}>
        Rules
      </Text>
      <Text size='sm' textColor='white' style={styles.text} gutters={{ bottom: 'md' }}>
        Deal 11 cards to each player in each round. Place one card up in the discard pile next to the draw pile and play
        proceeds to the dealer's left. The player to the dealer's left will deal the next round.
      </Text>
      <View>
        <Row justify='flex-start'>
          <Col style={styles.tableCol}>
            <Text bold size='sm' textColor='white'>
              Players
            </Text>
          </Col>
          <Col style={StyleSheet.flatten([styles.tableCol, styles.tableLastCol])}>
            <Text bold size='sm' textColor='white'>
              Decks
            </Text>
          </Col>
        </Row>
        <Row justify='flex-start'>
          <Col style={styles.tableCol}>
            <Text size='sm' textColor='white'>
              3-4
            </Text>
          </Col>
          <Col style={StyleSheet.flatten([styles.tableCol, styles.tableLastCol])}>
            <Text size='sm' textColor='white'>
              2
            </Text>
          </Col>
        </Row>
        <Row justify='flex-start'>
          <Col style={StyleSheet.flatten([styles.tableCol, styles.tableLastRow])}>
            <Text size='sm' textColor='white'>
              5-6
            </Text>
          </Col>
          <Col style={StyleSheet.flatten([styles.tableCol, styles.tableLastCol, styles.tableLastRow])}>
            <Text size='sm' textColor='white'>
              3
            </Text>
          </Col>
        </Row>
      </View>
      <Text bold textColor='white' gutters={{ bottom: 'md', top: 'md' }}>
        Goal
      </Text>
      <Text size='sm' textColor='white'>
        Player with the least points wins.
      </Text>
      <Text bold textColor='white' gutters={{ bottom: 'md', top: 'md' }}>
        Scoring
      </Text>
      <View>
        <Row justify='flex-start'>
          <Col style={styles.tableCol}>
            <Text bold size='sm' textColor='white'>
              Card
            </Text>
          </Col>
          <Col style={StyleSheet.flatten([styles.tableCol, styles.tableLastCol])}>
            <Text bold size='sm' textColor='white'>
              Points
            </Text>
          </Col>
        </Row>
        <Row justify='flex-start'>
          <Col style={styles.tableCol}>
            <Text size='sm' textColor='white'>
              2-7
            </Text>
          </Col>
          <Col style={StyleSheet.flatten([styles.tableCol, styles.tableLastCol])}>
            <Text size='sm' textColor='white'>
              5
            </Text>
          </Col>
        </Row>
        <Row justify='flex-start'>
          <Col style={styles.tableCol}>
            <Text size='sm' textColor='white'>
              8-K
            </Text>
          </Col>
          <Col style={StyleSheet.flatten([styles.tableCol, styles.tableLastCol])}>
            <Text size='sm' textColor='white'>
              10
            </Text>
          </Col>
        </Row>
        <Row justify='flex-start'>
          <Col style={styles.tableCol}>
            <Text size='sm' textColor='white'>
              A (high)
            </Text>
          </Col>
          <Col style={StyleSheet.flatten([styles.tableCol, styles.tableLastCol])}>
            <Text size='sm' textColor='white'>
              20
            </Text>
          </Col>
        </Row>
        <Row justify='flex-start'>
          <Col style={StyleSheet.flatten([styles.tableCol, styles.tableLastRow])}>
            <Text size='sm' textColor='white'>
              Joker (wild)
            </Text>
          </Col>
          <Col style={StyleSheet.flatten([styles.tableCol, styles.tableLastCol, styles.tableLastRow])}>
            <Text size='sm' textColor='white'>
              50
            </Text>
          </Col>
        </Row>
      </View>
      <Text bold textColor='white' gutters={{ bottom: 'md', top: 'lg' }}>
        Play
      </Text>
      <Text size='sm' textColor='white' gutters={{ bottom: 'sm' }} style={styles.text}>
        At the beginning of each player's turn they must either draw the top discard showing on the pile, or draw the
        top card from the deck. If the player has completed the appropriate{' '}
        <Text bold size='sm' textColor='white' style={styles.text}>
          runs and sets (groups)
        </Text>{' '}
        for the round they may lay down the groups in front of them.{'\n\n'}Once a player has laid down they may play
        additional cards from their hands on their groups and other player's groups. When done with their turn the
        player discards any one card from their hand.
      </Text>
      <Text size='sm' textColor='white' style={styles.text}>
        <Text bold size='sm' textColor='white' style={styles.text}>
          Sets
        </Text>{' '}
        - 3 cards with the same value
      </Text>
      <Text size='sm' textColor='white' gutters={{ bottom: 'md', top: 'sm' }} style={styles.text}>
        <Text bold size='sm' textColor='white' style={styles.text}>
          Run
        </Text>{' '}
        - 4 cards in a sequence with the same suit
      </Text>
      <Text italic size='sm' textColor='white'>
        * Cards played on groups will fit the set or expand the run.
      </Text>
      <Text italic size='sm' textColor='white' gutters={{ bottom: 'md', top: 'md' }}>
        * You may not play on laid groups until you have laid down.
      </Text>
      <Text italic size='sm' textColor='white'>
        * Jokers may be replaced in a run and will move "up" in the run unless there is already an Ace at the top, then
        they will move down. They will stay with the run and may not be replaced once a run is full.
      </Text>
      <Text bold textColor='white' gutters={{ bottom: 'md', top: 'md' }}>
        May I?
      </Text>
      <Text size='sm' textColor='white' style={styles.text}>
        Each player may successfully "May I?" twice in every round. When a discard is laid on the discard pile any
        player may ask "May I?" to take the card. The player whose turn it is can say "No" and take the discard into
        their hand as normal. Or they may allow the asking player to take the discard, and then the asking player also
        draws two additional cards from the deck. Then the player whose turn it is must also draw their one card from
        the deck.
      </Text>
      <Text bold textColor='white' gutters={{ top: 'md' }}>
        Rounds
      </Text>
      <View style={styles.roundTable}>
        <Row align='stretch' justify='flex-start'>
          <Col style={StyleSheet.flatten([styles.tableCol, styles.roundTableCell, styles.roundTableCell])}>
            <Text size='sm' textColor='white'>
              1
            </Text>
          </Col>
          <Col
            align='flex-start'
            style={StyleSheet.flatten([styles.tableCol, styles.roundTableCell, styles.tableLastCol])}
          >
            <Text size='xs' textColor='white' style={styles.textWrap}>
              Two sets (6 cards)
            </Text>
          </Col>
        </Row>
        <Row align='stretch' justify='flex-start'>
          <Col style={StyleSheet.flatten([styles.tableCol, styles.roundTableCell, styles.roundTableCell])}>
            <Text size='sm' textColor='white'>
              2
            </Text>
          </Col>
          <Col
            align='flex-start'
            style={StyleSheet.flatten([styles.tableCol, styles.roundTableCell, styles.tableLastCol])}
          >
            <Text size='xs' textColor='white' style={styles.textWrap}>
              One set, One run (7 cards)
            </Text>
          </Col>
        </Row>
        <Row align='stretch' justify='flex-start'>
          <Col style={StyleSheet.flatten([styles.tableCol, styles.roundTableCell])}>
            <Text size='sm' textColor='white'>
              3
            </Text>
          </Col>
          <Col
            align='flex-start'
            style={StyleSheet.flatten([styles.tableCol, styles.roundTableCell, styles.tableLastCol])}
          >
            <Text size='xs' textColor='white' style={styles.textWrap}>
              Two runs (8 cards)
            </Text>
          </Col>
        </Row>
        <Row align='stretch' justify='flex-start'>
          <Col style={StyleSheet.flatten([styles.tableCol, styles.roundTableCell])}>
            <Text size='sm' textColor='white'>
              4
            </Text>
          </Col>
          <Col
            align='flex-start'
            style={StyleSheet.flatten([styles.tableCol, styles.roundTableCell, styles.tableLastCol])}
          >
            <Text size='xs' textColor='white' style={styles.textWrap}>
              Three sets (9 cards)
            </Text>
          </Col>
        </Row>
        <Row align='stretch' justify='flex-start'>
          <Col style={StyleSheet.flatten([styles.tableCol, styles.roundTableCell])}>
            <Text size='sm' textColor='white'>
              5
            </Text>
          </Col>
          <Col
            align='flex-start'
            style={StyleSheet.flatten([styles.tableCol, styles.roundTableCell, styles.tableLastCol])}
          >
            <Text size='xs' textColor='white' style={styles.textWrap}>
              Two sets, one run (10 cards)
            </Text>
          </Col>
        </Row>
        <Row align='stretch' justify='flex-start'>
          <Col style={StyleSheet.flatten([styles.tableCol, styles.roundTableCell])}>
            <Text size='sm' textColor='white'>
              6
            </Text>
          </Col>
          <Col
            align='flex-start'
            style={StyleSheet.flatten([styles.tableCol, styles.roundTableCell, styles.tableLastCol])}
          >
            <Text size='xs' textColor='white' style={styles.textWrap}>
              One set, two runs (11 cards)
            </Text>
          </Col>
        </Row>
        <Row align='stretch' justify='flex-start'>
          <Col style={StyleSheet.flatten([styles.tableCol, styles.roundTableCell, styles.tableLastRow])}>
            <Text size='sm' textColor='white'>
              7
            </Text>
          </Col>
          <Col
            align='flex-start'
            style={StyleSheet.flatten([
              styles.tableCol,
              styles.roundTableCell,
              styles.tableLastCol,
              styles.tableLastRow,
            ])}
          >
            <Text size='xs' textColor='white' style={styles.textWrap}>
              Three runs (12 cards)
            </Text>
          </Col>
        </Row>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: Colors.green,
    flex: 1,
  },
  container: {
    padding: GutterSizes.md,
    paddingBottom: GutterSizes.xl,
  },
  title: {
    fontFamily: 'Spicy-Rice',
    lineHeight: 52,
  },
  text: {
    lineHeight: 24,
  },
  textWrap: {
    flex: 1,
    flexWrap: 'wrap',
    flexShrink: 1,
    lineHeight: 18,
  },
  tableCol: {
    borderColor: Colors.white,
    borderWidth: 1,
    borderBottomWidth: 0,
    borderRightWidth: 0,
    paddingHorizontal: GutterSizes.sm,
    paddingVertical: GutterSizes.sm,
    width: 150,
  },
  roundTable: {
    marginTop: GutterSizes.md,
  },
  roundTableCell: {
    borderBottomWidth: 0,
    width: 175,
  },
  tableLastRow: {
    borderColor: Colors.white,
    borderBottomWidth: 1,
  },
  tableLastCol: {
    borderColor: Colors.white,
    borderRightWidth: 1,
  },
});
