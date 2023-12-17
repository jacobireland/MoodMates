import React from 'react';
import {Text } from 'react-native';
import * as Font from 'expo-font';

const CustomText = (props) => {

	const [fontLoaded, setFontLoaded] = React.useState(false);

	React.useEffect(() => {
		async function loadFont() {
		await Font.loadAsync({
			'custom-font': require('../assets/fonts/Roboto-Light.ttf'),
		});

		setFontLoaded(true);
		}

		loadFont();
	}, []);

	if (!fontLoaded) {
		return <Text>Loading...</Text>;
	}

	return <Text style={[{fontFamily: 'custom-font', color: '#E4ECF1' }, props.style]}>{props.children}</Text>;
};

export default CustomText;