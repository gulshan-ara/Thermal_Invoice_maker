import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { dateTimeFormatter } from "../utils";

const InvoicePreview = ({ route }) => {
  const {name, items, date} = route.params;
	return (
		<ScrollView>
			<Text>InvoicePreview</Text>
      <Text>{name}</Text>
      <Text>{items.length}</Text>
      <Text>{dateTimeFormatter(date)}</Text>
		</ScrollView>
	);
};

export default InvoicePreview;

const styles = StyleSheet.create({});
