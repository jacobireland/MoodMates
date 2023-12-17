import React from 'react';
import {TextInput } from 'react-native';
import * as Font from 'expo-font';

const CustomTextInput = (props) => {

	const [fontLoaded, setFontLoaded] = React.useState(false);

	React.useEffect(() => {
		async function loadFont() {
		await Font.loadAsync({
			'custom-font': require('../assets/fonts/Montserrat-Regular.ttf'),
		});

		setFontLoaded(true);
		}

		loadFont();
	}, []);

	if (!fontLoaded) {
		return <TextInput>Loading...</TextInput>;
	}

	return <TextInput style={[{fontFamily: 'custom-font', color: '#1F2532', }, props.style]}>{props.children}</TextInput>;
};

export default CustomTextInput;