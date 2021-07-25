import React from 'react';
import {View, StyleSheet, TextInput, Text} from 'react-native';

const SearchBar = ({onChange}) => {
	const onChangeText = text => {
		onChange(text);
	};

	return (
		<View style={styles.container}>
			<Text style={styles.text}>🔍</Text>
			<TextInput
				onChangeText={onChangeText}
				placeholder={'Search ...'}
				style={styles.input}
				placeholderTextColor="#515151"
				autoCorrect={false}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		borderRadius: 25,
		overflow: 'hidden',
		borderColor: '#ccc',
		borderWidth: 2,
		paddingLeft: 10,
		margin: 10,
		backgroundColor: 'white',
	},
	input: {
		alignItems: 'center',
		fontSize: 16,
		color: '#515151',
	},
	text: {
		color: '#515151',
	},
});

export default SearchBar;
