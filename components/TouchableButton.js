import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const TouchableButton = ({ buttonText, onPressAction }) => {
	return (
		<TouchableOpacity onPress={onPressAction} style={styles.button}>
			<Text style={styles.buttonText}>{buttonText}</Text>
		</TouchableOpacity>
	);
};

export default TouchableButton;

const styles = StyleSheet.create({
	button: {
		backgroundColor: "dodgerblue",
		padding: 5,
		borderRadius: 20,
		margin: 5,
		width: '60%',
		marginHorizontal: '20%'
	},
	buttonText: {
		fontSize: 20,
		color: "white",
		fontWeight: "bold",
		textAlign: "center",
		paddingVertical: 5,
		paddingHorizontal: 10
	},
});
