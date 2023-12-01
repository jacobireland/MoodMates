import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Animated, PanResponder, Image, Dimensions } from 'react-native';
import groupStyles from './groupPageStyle';
import addIcon from '../assets/addIcon.png';
import { TouchableOpacity } from 'react-native-gesture-handler';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
console.log('SCREEN_WIDTH:', SCREEN_WIDTH);

const CardStack = () => {
  const [cards, setCards] = useState([
    { text: 'Card 1', translateX: new Animated.Value(0), zIndex: 2 },
    { text: 'Card 2', translateX: new Animated.Value(0), zIndex: 1 },
    { text: 'Propose Activity', translateX: new Animated.Value(0), zIndex: 0 },
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_, { dx }) => {
        // Update only the top card's position while swiping
        const topCard = cards.find(
          (card) => card.zIndex === Math.max(...cards.map((c) => c.zIndex))
        );
  
        const newCards = cards.map((card) => ({
          ...card,
          translateX: card === topCard ? dx : 0,
        }));
  
        setCards(newCards);
      },
      onPanResponderRelease: (_, { dx, vx }) => {
        const swipeThreshold = 40;
    
        console.log('dx:', dx);
        console.log('vx:', vx);
    
        if (Math.abs(dx) > swipeThreshold || Math.abs(vx) > 0.5) {
            const shouldShuffleToBottom = Math.abs(dx) > 0.2 * SCREEN_WIDTH;
            console.log('shouldShuffleToBottom:', shouldShuffleToBottom);
    
            const newCards = [...cards];
    
            if (shouldShuffleToBottom) {
                // Identify the card with the highest zIndex
                const cardWithMaxZIndex = newCards.reduce((prevCard, currentCard) =>
                    prevCard.zIndex > currentCard.zIndex ? prevCard : currentCard
                );
    
                // Remove the card with the highest zIndex from the current index
                const shuffledCard = newCards.splice(newCards.indexOf(cardWithMaxZIndex), 1)[0];
                console.log('Removed card from currentIndex:', shuffledCard);
    
                newCards.forEach((card, index) => {
                    card.zIndex = card.zIndex + 1;
                });
    
                // Reset the horizontal position
                shuffledCard.translateX.setValue(0);
                console.log('Reset translateX to 0:', shuffledCard.translateX._value);
    
                // Set zIndex to the length of the newCards array
                shuffledCard.zIndex = 0;
                console.log('Set zIndex to bottom:', shuffledCard.zIndex);
    
                // Add the shuffled card to the bottom
                newCards.push(shuffledCard);
                console.log('Added shuffled card to the bottom:', newCards);
    
                // Update currentIndex to the index of the last card
                setCurrentIndex(newCards.length - 1);
                console.log('Updated currentIndex:', currentIndex);
            }

          setCards(newCards);
        } else {
          // Reset the card position
          console.log('Resetting Position (No Swipe)');
          const newCards = cards.map((card, index) => ({
            ...card,
            translateX: index === currentIndex ? 0 : card.translateX,
          }));
          setCards(newCards);
        }
      },
    })
  ).current;

  useEffect(() => {
    console.log('Updated currentIndex:', currentIndex);
  }, [currentIndex]);

  const getCardStyle = (index) => {
    const baseStyle = {
      width: 138,
      height: 204,
      borderRadius: 15,
      alignSelf: 'center',
      borderWidth: 1,
      borderColor: 'black',
    };

    return index === currentIndex
      ? {
          ...baseStyle,
          backgroundColor: '#C0EDDA',
          marginTop: 1,
        }
      : {
          ...baseStyle,
          backgroundColor: 'white',
        };
  };

  return (
    <View style={styles.cardStack}>
      {cards.map((card, index) => (
        <Animated.View
          key={index}
          style={[
            styles.card,
            getCardStyle(index),
            { transform: [{ translateX: card.translateX }], zIndex: card.zIndex },
          ]}
          {...panResponder.panHandlers}
        >
          {index === 2 && (
            <View>
              <Text style={groupStyles.proposeActivityText}>
                Propose{'\n'}Activity
              </Text>
              <Image source={addIcon} style={groupStyles.addIcon} />
            </View>
          )}
          {index !== 2 && (
            <Text style={styles.cardText}>{card.text}</Text>
          )}
        </Animated.View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  cardStack: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    position: 'absolute',
    elevation: 3,
  },
  cardText: {
    fontSize: 24,
    textAlign: 'center',
    padding: 20,
  },
});

export default CardStack;
