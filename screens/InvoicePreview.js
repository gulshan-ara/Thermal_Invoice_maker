import { StyleSheet, Text, View } from "react-native";
import React from "react";

const InvoicePreview = ({ route }) => {
  const {name, items, date} = route.params;
	return (
		<View>
			<Text>InvoicePreview</Text>
      <Text>{name}</Text>
      <Text>{items.length}</Text>
      <Text>{date}</Text>
		</View>
	);
};

export default InvoicePreview;

const styles = StyleSheet.create({});
