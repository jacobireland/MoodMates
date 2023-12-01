import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Animated, PanResponder, Image, Dimensions } from 'react-native';
import groupStyles from './groupPageStyle';
import addIcon from '../assets/addIcon.png';
import switchIcon from '../assets/3DSwitch.png';
import anxiety7 from '../assets/Anxiety8.png';
import anxiety4 from '../assets/Anxiety5.png';
import anxiety5 from '../assets/Anxiety6.png';
import MoodIcon from './moodIcon.js';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
console.log('SCREEN_WIDTH:', SCREEN_WIDTH);

const CardStack = () => {


    const [anxiety, setAnxiety] = React.useState(anxiety4)

    const [happiness, setHappiness] = React.useState('#FFEBB5')
    
    const [energy, setEnergy] = React.useState(0.7)

    const oliviaMoodIcon = (
        <View style={groupStyles.cardMoodIcon}>
          <MoodIcon
            size={40}
            happiness="#FFAAA5"  
            energy={0.8}         
            anxiety={anxiety7}   
          />
        </View>  
    );

    const myMoodIcon = (
        <View style={groupStyles.cardMoodIcon}>
          <MoodIcon
            size={40}
            happiness="#FF8B94"  
            energy={0.3}         
            anxiety={anxiety5}   
          />
        </View>  
    );


  const [cards, setCards] = useState([
    { text: 'Movie Night', translateX: new Animated.Value(0), zIndex: 2 },
    { text: 'Boardgames', translateX: new Animated.Value(0), zIndex: 1 },
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
                Animated.timing(shuffledCard.translateX, {
                    toValue: 0,
                    duration: 500, // Adjust the duration as needed
                    useNativeDriver: false,
                  }).start();
    
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

    const currentCard = cards[index];

  return index === currentIndex
    ? {
        ...baseStyle,
        backgroundColor: currentCard.text === 'Propose Activity' ? '#C0EDDA' : 'white',
        marginTop: 1,
      }
    : {
        ...baseStyle,
        backgroundColor: currentCard.text === 'Propose Activity' ? '#C0EDDA' : 'white',
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
          {card.text === 'Propose Activity' && (
            <View>
              <Text style={groupStyles.proposeActivityText}>
                Propose{'\n'}Activity
              </Text>
              <Image source={addIcon} style={groupStyles.addIcon} />
            </View>
          )}
          {card.text == 'Movie Night' && (
            <View style={groupStyles.movieNightCard}>
            <Text style={groupStyles.movieNightTitle}>Movie Night</Text>
            <Text style={groupStyles.proposedByText}>Proposed by</Text>
            <View style={groupStyles.proposerInfo}>
              {oliviaMoodIcon}
            </View>
              <Text style={groupStyles.proposerName}>Olivia</Text>
            <View style={groupStyles.dateTimeLocation}>
              <Text style={groupStyles.dateTimeLocationText}>Today</Text>
              <Text style={groupStyles.dateTimeLocationText}>10:00 PM</Text>
              <Text style={groupStyles.dateTimeLocationText}>Hogan Suite 2A</Text>
            </View>
            <Image source={switchIcon} style={groupStyles.switchIcon} />
          </View>
          )}
          {card.text == 'Boardgames' && (
            <View style={groupStyles.movieNightCard}>
            <Text style={groupStyles.movieNightTitle}>Boardgames</Text>
            <Text style={groupStyles.proposedByText}>Proposed by</Text>
            <View style={groupStyles.proposerInfo}>
              {myMoodIcon}
            </View>
              <Text style={groupStyles.proposerName}>Me</Text>
            <View style={groupStyles.dateTimeLocation}>
              <Text style={groupStyles.dateTimeLocationText}>Tomorrow</Text>
              <Text style={groupStyles.dateTimeLocationText}>9:00 PM</Text>
              <Text style={groupStyles.dateTimeLocationText}>Ruggles Suite 6B</Text>
            </View>
            <Image source={switchIcon} style={groupStyles.switchIcon} />
            </View>
          )}
        </Animated.View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  cardStack: {
    top: 126,
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