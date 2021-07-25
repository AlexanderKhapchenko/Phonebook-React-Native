import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';

const SearchBar = ({onChange}) => {
	const onChangeText = text => {
		onChange(text);
	};

	return (
		<View>
			<TextInput
				onChangeText={onChangeText}
				placeholder={'Search..'}
				style={styles.input}
				placeholderTextColor="#515151"
				autoCorrect={false}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		padding: 8,
	},
	input: {
		alignItems: 'center',
	},
});

export default SearchBar;
