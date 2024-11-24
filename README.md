MoodMates

This React Native code is for a mobile app called MoodMates. Myself and my team created this for our 4000 level UI Design class during our
Fall '23 semester at Columbia University. Our app targets users/students who are mood concious and struggle to socialize with others
in a way that matches their social battery and makes them feel comfortable. We decided to implement an app that allows users to track their
daily mood and see their friends daily moods, and use this information to propose activities/hangouts with each other. Currently, our app is
not 100% functional, but every element that is necessary for navigating and testing/demoing the app is fully implemented. If you would like
to run and use the app, please follow the Getting Started instructions below.


**Getting Started**

1) Unzip the folder and cd to /AwesomeProject in the terminal

2) Install the following dependencies:
	npm install expo
	npm i --save react-native-sliders
	npx expo install expo-blur
	npm install backendless
	npm install react-native-gesture-handler
	npm i react-native-global-props --save
	npx react-native-asset
	npm install expo-font

5) Download the Expo Go app on your phone (!!make sure phone and computer are connected to the same wifi network!!)

5) Run "npx expo start" in the terminal (in directory /AwesomeProject/)

6) A QR code will pop up in the terminal, scan it with your phone's camera, and our app will open in Expo Go



**Navigating Our App**

Currently, our app is nearly 100% functional. All of the necessary components for navigating and demoing the app
to the class are entirely working and effective. You are able to select any page in the bottom Nav Bar:

	Mood:
		Our mood page displays a greeting and a prompt to the user and asks them to use the sliders to convey
		how they are feeling today. The sliders generate a 'mood icon' - play with the sliders to understand how
		the mood icon changes based off the happiness, anxiety, and energy. You can add an entry to the box aswell! If you click on the Profile icon in the top right, you will see a page showing your current mood - we used our backend to transfer the result of the sliders to render an accurate mood icon. You see how many friends and groups you have, and your mood trends. Currently, the Find Friends button is not functional. We may add this
		before class presentations.
		Click on 'Recent Logs' - you will see some fake entries as well as the entry you just wrote and saved a few minutes ago.
	
	Groups:
		The only functional button on this page is the 'Movie Squad' group button. For demo purposes, we figured it was not necessary to implement a groups page for all 3 groups - they'd be extremely similar and not highlight any unique features of the app. We plan to make the Plus icon button functional for class presentations - this lets you add a new group! Click on Movie Squad:
		You will see the members of this squad along with their moods. If you look at the icon labelled 'Me' you will
		notice it matched the mood levels you chose on the sliders originally! In the center, there is a card deck - try sliding the cards to the left! We plan to slightly edit the implementation to make the Propose Activity button functional and be able to click on each card to view more details about the activity. Hit the 'back' button to return to the Groups page.

	Activities:
		You'll see some activites - these represent all activities from all grousp, whereas the cards on the previous page represent acitivtes only for that group. Click the toggle buttons to change your RSVP status to the events! Click on the proposal labelled 'Movie Night' - you can change your RSVP request, see information about
		the event, and see whose attending (along with their mood). Click the x-icon to close off.
		Click the plus in the top right. Enter some information, and click save - you should see a new proposal generate under the 'My Proposals' tab containing the information you just entered. Of course, you're RSVPed to your own event, and this is unchangeable. Add as many proposals as you'd like!

	
	That's our app! We coded it using React Native and for our backend we used Backendless. Currently, there are a few minor pages/functions that are not fully functional, and if we decide to contine working on this project further we will implement them.


**Sources**
	For general knowledge of React Native - https://reactnative.dev/docs/components-and-apis

	For creating pop-up modal for diary text and other popups: https://blog.logrocket.com/creating-a-pop-up-modal-in-react-native/

	For creating sliders on Mood page: https://www.npmjs.com/package/react-native-sliders

	For creating Recent Logs: https://stackoverflow.com/questions/50556937/how-do-i-make-text-bold-italic-or-underline-in-react-native

	For creating card deck: https://www.codedaily.io/tutorials/Create-a-Draggable-Card-with-React-Native-Pan-Responder-and-Animateddecay
# MoodMates
