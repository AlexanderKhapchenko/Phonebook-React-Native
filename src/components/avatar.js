import React from 'react';
import {View, Image, StyleSheet} from 'react-native';

const Avatar = ({img, width, height, style}) => {
	return (
		<View
			style={[styles.container, style, {width, height, borderRadius: width}]}>
			<Image style={styles.image} source={img} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		overflow: 'hidden',
		backgroundColor: 'gray',
	},
	image: {
		alignSelf: 'stretch',
		width: undefined,
		height: undefined,
		flex: 1,
	},
});

export default Avatar;
