import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { getInvoices } from "../databaseHelper";
import { dateTimeFormatter } from "../utils";

const InvoiceList = () => {
	const [invoices, setInvoices] = useState([]);

	useEffect(() => {
		const fetchInvoices = async () => {
			try {
				const retrievedInvoices = await getInvoices();
				setInvoices(retrievedInvoices);
			} catch (error) {
				console.log(error);
			}
		};

		fetchInvoices();
	}, []);

  console.log(invoices, "here");

	return (
		<ScrollView>
			<Text>InvoiceList</Text>
      {Object.keys(invoices).map((invoiceId) => {
        const invoice = invoices[invoiceId];
        return (
          <TouchableOpacity key={invoiceId}>
            <Text>{invoice.name}</Text>
            <Text>Date: {dateTimeFormatter(invoice.date)}</Text>
          </TouchableOpacity>
        );
      })}
		</ScrollView>
	);
};

export default InvoiceList;

const styles = StyleSheet.create({});
