import React from 'react'; 
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native'; 
import groupStyles from './groupPageStyle.js';
import backArrowIcon from '../assets/backArrowIcon.png';
import settingsIcon from '../assets/settingsIcon.png';
import MoodIcon from './moodIcon.js';
import CardStack from './cardStack.js';
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
import { useTheme } from './themeContext';



const GroupPage = ({screenChoose}) => {

const { theme } = useTheme();

const [userAnxiety, setUserAnxiety] = React.useState(anxiety4)

const [userHappiness, setUserHappiness] = React.useState('#FFEBB5')

const [userEnergy, setUserEnergy] = React.useState(0.7)

//takes the value of the anxiety slider and sets the image for anxiety squiggles
function anxietyPicker(value) {
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

const onError = error => {
	console.error('Server reported an error: ', error.message)
	console.error('error code: ', error.code)
	console.error('http status: ', error.status)
}

const setUserMood = (userMood) => {
	setUserHappiness(`${ userMood.userHappiness }`)
	setUserEnergy(parseFloat(`${ userMood.userEnergy }`))
	anxietyPicker(`${ userMood.userAnxiety }`)
}

Backendless.Data.of('UserMood').findLast()
	.then(setUserMood)
	.catch(onError)

const [anxiety, setAnxiety] = React.useState(anxiety4)

const [happiness, setHappiness] = React.useState('#FFEBB5')

const [energy, setEnergy] = React.useState(0.7)

const oliviaMoodIcon = (
    <View style={groupStyles.oliviaMoodIconContainer}>
      <MoodIcon
        size={85}
        happiness="#FFAAA5"  
        energy={0.8}         
        anxiety={anxiety7}   
      />
    </View>  
);

const oliviaText = (
    <View style={groupStyles.moodIconTextContainer}>
      <Text style={[groupStyles.oliviaMoodIconText, { color: theme.textColor }]}>Olivia</Text>
    </View>
);

const benMoodIcon = (
    <View style={groupStyles.benMoodIconContainer}>
        <MoodIcon
            size={85}
            happiness="#DCECD1"  
            energy={0.2}         
            anxiety={anxiety2}   
        />
    </View>  
);

const benText = (
    <View style={groupStyles.moodIconTextContainer}>
        <Text style={[groupStyles.benMoodIconText, { color: theme.textColor }]}>Ben</Text>
    </View>
);

const justinMoodIcon = (
    <View style={groupStyles.justinMoodIconContainer}>
        <MoodIcon
            size={85}
            happiness="#FFEBB5"  
            energy={0.7}         
            anxiety={anxiety1}   
        />
    </View>  
);

const justinText = (
    <View style={groupStyles.moodIconTextContainer}>
        <Text style={[groupStyles.justinMoodIconText, { color: theme.textColor }]}>Justin</Text>
    </View>
);

const jacobMoodIcon = (
    <View style={groupStyles.jacobMoodIconContainer}>
        <MoodIcon
            size={85}
            happiness="#BDE6A8" 
            energy={0.9}         
            anxiety={anxiety8}  
        />
    </View>  
);

const jacobText = (
    <View style={groupStyles.moodIconTextContainer}>
        <Text style={[groupStyles.jacobMoodIconText, { color: theme.textColor }]}>Jacob</Text>
    </View>
);

const mayaMoodIcon = (
    <View style={groupStyles.mayaMoodIconContainer}>
        <MoodIcon
            size={85}
            happiness="#FF7480"  
            energy={0.3}         
            anxiety={anxiety2}   
        />
    </View>  
);

const mayaText = (
    <View style={groupStyles.moodIconTextContainer}>
        <Text style={[groupStyles.mayaMoodIconText, { color: theme.textColor }]}>Maya</Text>
    </View>
);

const anishMoodIcon = (
    <View style={groupStyles.anishMoodIconContainer}>
        <MoodIcon
            size={85}
            happiness="#FFD3B6"  
            energy={0.9}         
            anxiety={anxiety6}   
        />
    </View>  
);

const anishText = (
    <View style={groupStyles.moodIconTextContainer}>
        <Text style={[groupStyles.anishMoodIconText, { color: theme.textColor }]}>Anish</Text>
    </View>
);

const charlieMoodIcon = (
    <View style={groupStyles.charlieMoodIconContainer}>
        <MoodIcon
            size={85}
            happiness="#97E384"  
            energy={0.4}         
            anxiety={anxiety0}   
        />
    </View>  
);

const charlieText = (
    <View style={groupStyles.moodIconTextContainer}>
        <Text style={[groupStyles.charlieMoodIconText, { color: theme.textColor }]}>Charlie</Text>
    </View>
);

const myMoodIcon = (
    <View style={groupStyles.myMoodIconContainer}>
        <MoodIcon
            size={85}
            happiness={userHappiness}
            energy={userEnergy}         
            anxiety={anxiety}
        />
    </View>  
);

const myText = (
    <View style={groupStyles.moodIconTextContainer}>
        <Text style={[groupStyles.myMoodIconText, { color: theme.textColor }]}>Me</Text>
    </View>
);

return (
	<View style={groupStyles.container}> 

        <View style={groupStyles.headerContainer}>
				<TouchableOpacity onPress={() => screenChoose('GroupsPage')}>
                	<Image source={backArrowIcon} style={[groupStyles.icon, { tintColor: theme.textColor }]} />
				</TouchableOpacity>
                <Text style={[groupStyles.headerText, { color: theme.textColor }]}>Movie Squad</Text>
                <Image source={settingsIcon} style={[groupStyles.icon, { tintColor: theme.textColor }]} />
        </View>

        <View style={groupStyles.rectangle}>
                <Text style={[groupStyles.groupMoodText, { color: theme.textColor }]}>Group's Current Mood</Text>
                <View style={groupStyles.moodIconContainer}>
                    <MoodIcon size={65} happiness={happiness} energy={energy} anxiety={anxiety}/>
                </View>
        </View>

        

        <CardStack />

        {oliviaMoodIcon}
        {oliviaText}

        {benMoodIcon}
        {benText}

        {justinMoodIcon}
        {justinText}

        {mayaMoodIcon}
        {mayaText}

        {jacobMoodIcon}
        {jacobText}

        {charlieMoodIcon}
        {charlieText}

        {anishMoodIcon}
        {anishText}

        {myMoodIcon}
        {myText}
       
    </View>
)}
export default GroupPage;