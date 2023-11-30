import React from 'react'; 
import { Text, View, Image, TextInput } from 'react-native'; 
import groupStyles from './groupPageStyle.js';
import backArrowIcon from '../assets/backArrowIcon.png';
import settingsIcon from '../assets/settingsIcon.png';
import MoodIcon from './moodIcon.js';
import anxiety0 from '../assets/Anxiety1.png';
import anxiety1 from '../assets/Anxiety2.png';
import anxiety2 from '../assets/Anxiety3.png';
import anxiety3 from '../assets/Anxiety4.png';
import anxiety4 from '../assets/Anxiety5.png';
import anxiety5 from '../assets/Anxiety6.png';
import anxiety6 from '../assets/Anxiety7.png';
import anxiety7 from '../assets/Anxiety8.png';
import anxiety8 from '../assets/Anxiety9.png';
import addIcon from '../assets/addIcon.png';



const GroupPage = () => {

const [anxiety, setAnxiety] = React.useState(anxiety4)

const [happiness, setHappiness] = React.useState('#FFEBB5')

const [energy, setEnergy] = React.useState(0.7)


function happinessSetter(value) {
    if (value == 0) {
        setHappiness('#FF7480')
    }
    if (value == 1) {
        setHappiness('#FF8B94')
    }
    if (value == 2) {
        setHappiness('#FFAAA5')
    }
    if (value == 3) {
        setHappiness('#FFD3B6')
    }
    if (value == 4) {
        setHappiness('#FFEBB5')
    }
    if (value == 5) {
        setHappiness('#DCECD1')
    }
    if (value == 6) {
        setHappiness('#CFEDC0')
    }
    if (value == 7) {
        setHappiness('#BDE6A8')
    }
    if (value == 8) {
        setHappiness('#97E384')
    }
}

function energySetter(value) {
    if (value == 0) {
        setEnergy(0.4)
    }
    if (value == 1) {
        setEnergy(0.48)
    }
    if (value == 2) {
        setEnergy(0.56)
    }
    if (value == 3) {
        setEnergy(0.64)
    }
    if (value == 4) {
        setEnergy(0.70)
    }
    if (value == 5) {
        setEnergy(0.78)
    }
    if (value == 6) {
        setEnergy(0.84)
    }
    if (value == 7) {
        setEnergy(0.90)
    }
    if (value == 8) {
        setEnergy(1.0)
    }
}

function anxietySetter(value) {
    if (value == 0) {
        setAnxiety(anxiety0)
    }
    if (value == 1) {
        setAnxiety(anxiety1)
    }
    if (value == 2) {
        setAnxiety(anxiety2)
    }
    if (value == 3) {
        setAnxiety(anxiety3)
    }
    if (value == 4) {
        setAnxiety(anxiety4)
    }
    if (value == 5) {
        setAnxiety(anxiety5)
    }
    if (value == 6) {
        setAnxiety(anxiety6)
    }
    if (value == 7) {
        setAnxiety(anxiety7)
    }
    if (value == 8) {
        setAnxiety(anxiety8)
    }
}

const oliviaMoodIcon = (
    <View style={groupStyles.oliviaMoodIconContainer}>
      <MoodIcon
        size={80}
        happiness="#FFAAA5"  // Placeholder values, replace with actual mood data
        energy={0.7}         // Placeholder values, replace with actual mood data
        anxiety={anxiety4}   // Placeholder values, replace with actual mood data
      />
    </View>  
);

const oliviaText = (
    <View style={groupStyles.moodIconTextContainer}>
      <Text style={groupStyles.oliviaMoodIconText}>Olivia</Text>
    </View>
);

return (
	<View style={groupStyles.container}>

        <View style={groupStyles.headerContainer}>
                <Image source={backArrowIcon} style={groupStyles.icon} />
                <Text style={groupStyles.headerText}>Movie Squad</Text>
                <Image source={settingsIcon} style={groupStyles.icon} />
        </View>

        <View style={groupStyles.rectangle}>
                <Text style={groupStyles.groupMoodText}>Group's Current Mood</Text>
                <View style={groupStyles.moodIconContainer}>
                    <MoodIcon size={65} happiness={happiness} energy={energy} anxiety={anxiety}/>
                </View>
        </View>

        <View style={groupStyles.card}>
                <Text style={groupStyles.proposeActivityText}>Propose{'\n'}Activity</Text>
                <Image source={addIcon} style={groupStyles.addIcon} />
        </View>

        {oliviaMoodIcon}
        {oliviaText}
       
    </View>
)}
export default GroupPage;