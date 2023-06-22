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
		height: 60,
	},
	buttonText: {
		fontSize: 20,
		color: "white",
		fontWeight: "bold",
		textAlign: "center",
		padding: 12,
	},
});
