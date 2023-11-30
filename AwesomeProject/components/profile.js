import React from 'react';
import { View, Text } from 'react-native';
import { getAnxietyValue, getHappinessValue, getEnergyValue} from './mood.js'; // Update the path as per your file structure
import MoodIcon from './moodIcon';
import styles from '../style';


const Profile = () => {
  // Get the current values of anxiety, happiness, and energy
  const currentAnxiety = getAnxietyValue();
  const currentHappiness = getHappinessValue();
  const currentEnergy = getEnergyValue();

  return (
    <view>
        <View style={styles.moodIconContainer}>
            <MoodIcon size={110} happiness={currentHappiness} energy={currentEnergy} anxiety={currentAnxiety}/>
        </View>
    </view>
    
  );
};

export default Profile;