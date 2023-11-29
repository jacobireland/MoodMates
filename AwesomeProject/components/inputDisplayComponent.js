import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

const InputDisplayComponent = () => {

	const [flaskData, setFlaskData] = useState('');

	const flaskUrl = 'http://localhost:5000/';

	const fetchDataFromFlask = async () => {
		try {
		// Make a GET request to Flask endpoint
		const response = await fetch("http://10.206.53.165:5000/api/get_data");
		
		// Check if the response is successful (status code 2xx)
		if (response.ok) {
			const data = await response.text();
			setFlaskData(data);
		} else {
			console.error('Error fetching data from Flask:', response.statusText);
		}
		} catch (error) {
		console.error('Error fetching data from Flask:', error);
		}
		fetch().then().catch(err => console.log(err))
	};

	useEffect(() => {
		// Fetch data from Flask when the component mounts
		fetchDataFromFlask();
	  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'gray'}}>
      	<Text style={{fontSize: 40}}>{flaskData}</Text>
    </View>
  );
};

export default InputDisplayComponent;
