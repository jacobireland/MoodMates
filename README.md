# UI-Proj
UI Design Fall '23 Semester Project

Getting Started:

1) clone the git repo

2) cd to AwesomeProject

3) run "npx install expo" and "npm i --save react-native-sliders"

4) download expo go app on your phone (make sure phone and computer are connected to the same wifi network)

5) run "npx expo start"

6) scan QR code that shows up in terminal on your phone camera

7) our app should open in the Expo Go app and have real time refresh so you
can see your changes as you code

Start Coding:

1) make sure app is not running (if 'npx expo go' was run, hit CTRL-C in terminal to end it)

2) make a new git branch (do all of your code in this branch only)

3) create a new .js file in the components folder and name it appropriately to match the page
you are coding

4) paste this into the empty .js file:

import React from 'react';
import { Text, View, Image, TextInput } from 'react-native';
import styles from './STYLE_SHEET_NAME.js;

const SOME_NAME = () => {

	return (
		<View></View>

)}

export default SOME_NAME;


All of your code can be written in the return () statement. Look at my other
files for guidance

5) Create a stylesheet for your page. Create a new file in the components folder and give it a name. In your
app page .js file, the name of this stylesheet file should replace STYLE_SHEET_NAME on line 3.

6) Go to App.js, and replace "<MoodIcon/>" with <SOME_NAME/>

7) Run 'npx expo start' and begin adding code to your SOME_NAME.js file and styling it
in your STYLE_SHEET_NAME.js file. As you add code and save your changes, you will see it
appear in the Expo Go app!

8) When you have completely finished coding a page (statically), switch to the master branch,
copy and paste your two files into the components folder, and commit/push. That's it!


** if something isnt working or you're unable to run the app or something let me know pls!


