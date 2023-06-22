import { StyleSheet, Text, View } from "react-native";
import React from "react";
import TouchableButton from "../components/TouchableButton";

const HomeScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<TouchableButton
				buttonText="Create New Invoice"
				onPressAction={() => navigation.navigate("InvoiceMaker")}
			/>
			<TouchableButton buttonText="Show Saved Invoices" />
		</View>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});
