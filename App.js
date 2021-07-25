import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ContactList from './src/screens/contactsList';
import Contact from './src/screens/contact';

const Stack = createStackNavigator();

const App = () => {
	const isDarkMode = useColorScheme() === 'dark';

	return (
		<NavigationContainer>
			<StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
			<Stack.Navigator initialRouteName="Contact List">
				<Stack.Screen name="Contact List" component={ContactList} />
				<Stack.Screen name="Contact" component={Contact} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
