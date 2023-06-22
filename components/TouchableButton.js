import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const TouchableButton = ({ buttonText, onPressAction, disabled }) => {
	const bgColor = disabled && disabled === true ? "grey" : "dodgerblue";
	return (
		<TouchableOpacity onPress={onPressAction} style={{...styles.button, backgroundColor: bgColor}} disabled={disabled}>
			<Text style={styles.buttonText}>{buttonText}</Text>
		</TouchableOpacity>
	);
};

export default TouchableButton;

const styles = StyleSheet.create({
	button: {
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
