import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Linking} from 'react-native';
import Contacts from 'react-native-contacts';
import Avatar from '../components/avatar';

const Contact = ({route, navigation}) => {
	const [contact, setContact] = useState({});

	useEffect(() => {
		(async () => {
			const result = await Contacts.getContactById(route.params.id);
			setContact(result);
		})();
	}, [route.params.id]);

	const {givenName, phoneNumbers, hasThumbnail, thumbnailPath} = contact;

	const onDelete = async () => {
		await Contacts.deleteContact(contact);
		navigation.navigate('Contact List', {
			id: contact.recordID,
		});
	};

	const onCall = async () => {
		Linking.openURL(`tel:${phoneNumbers[0]?.number}`);
	};

	if (!Object.keys(contact).length) {
		return null;
	}

	return (
		<View style={styles.container}>
			<Avatar
				img={
					hasThumbnail
						? {uri: thumbnailPath}
						: require('../img/default-avatar.png')
				}
				width={180}
				height={180}
			/>
			<View style={styles.infoHolder}>
				<Text>Name</Text>
				<Text style={styles.name}>{givenName}</Text>
			</View>
			<View style={styles.infoHolder}>
				<Text>Phone number</Text>
				<Text style={styles.number}>{phoneNumbers[0]?.number}</Text>
			</View>
			<View style={styles.buttonsHolder}>
				<TouchableOpacity onPress={onCall} style={styles.button}>
					<View style={styles.textHolder}>
						<Text>📞</Text>
						<Text>CALL</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity onPress={onDelete} style={styles.button}>
					<View style={styles.textHolder}>
						<Text>DELETE</Text>
						<Text>❌</Text>
					</View>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		padding: 8,
	},
	infoHolder: {
		alignSelf: 'stretch',
		marginBottom: 10,
		borderBottomWidth: 1,
	},
	textHolder: {
		flexDirection: 'row',
		alignSelf: 'stretch',
		justifyContent: 'space-around',
	},
	name: {
		fontSize: 32,
	},
	number: {
		fontSize: 32,
	},
	buttonsHolder: {
		flexDirection: 'row',
		alignSelf: 'stretch',
		justifyContent: 'space-around',
		marginTop: 30,
	},
	button: {
		backgroundColor: '#ccc',
		justifyContent: 'center',
		alignItems: 'center',
		width: 125,
		padding: 8,
		paddingHorizontal: 12,
		height: 48,
		borderRadius: 30,
	},
});

export default Contact;
