import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

const CustomTextInput = ({ label, onChangeText, value, style }) => {

	return (
		<View style={styles.inputContainer}>
			<Text style={styles.label}>{label} :</Text>
			<TextInput
				style={styles.inputBox}
				onChangeText={onChangeText}
				placeholder="Type here"
				value={value}
			/>
		</View>
	);
};

export default CustomTextInput;

const styles = StyleSheet.create({
	inputContainer: {
		flexDirection: "row",
		margin: 5,
	},
	label: {
		marginVertical: 8,
		fontWeight: "bold",
		fontSize: 16,
		letterSpacing: 0.3,
		flex: 2
	},
	inputBox: {
		letterSpacing: 0.3,
		flex: 1,
		backgroundColor: "lightgrey",
		color: "black",
		fontSize: 16,
		marginHorizontal: 10,
		padding: 5,
		flex: 4.5
	},
});
