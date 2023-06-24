import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { deleteInvoice, getInvoices } from "../databaseHelper";
import { dateTimeFormatter } from "../utils";
import AwesomeAlert from "react-native-awesome-alerts";

const InvoiceList = ({ navigation }) => {
	const [invoices, setInvoices] = useState([]);
	const [popDelete, setPopDelete] = useState(false);
	const [invoiceToDeleteId, setInvoiceToDeleteId] = useState("");

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

	const selectInvoiceToDelete = (id) => {
		setInvoiceToDeleteId(id);
		setPopDelete(true);
	};

	const handleDelete = async (id) => {
		{
			try {
				await deleteInvoice(id);
				setInvoices((prevInvoices) => {
					const updatedInvoices = { ...prevInvoices };
					delete updatedInvoices[invoiceToDeleteId];
					return updatedInvoices;
				});
			} catch (error) {
				console.log(error);
			}
		}
		setPopDelete(false);
	};

	return (
		<>
			<ScrollView>
				{Object.keys(invoices).map((invoiceId) => {
					const invoice = invoices[invoiceId];
					return (
						<TouchableOpacity
							key={invoiceId}
							style={styles.itemContainer}
							onLongPress={() => selectInvoiceToDelete(invoiceId)}
							onPress={() => {
								navigation.navigate("InvoicePreview", {
									name: invoice.name,
									items: invoice.items,
									date: invoice.date,
								});
							}}
						>
							<Text style={[styles.item, { fontWeight: "bold" }]}>
								{invoice.name}
							</Text>
							<Text style={styles.item}>
								Date: {dateTimeFormatter(invoice.date)}
							</Text>
						</TouchableOpacity>
					);
				})}
			</ScrollView>

			<AwesomeAlert
				show={popDelete}
				title="Delete Invoice!!"
				closeOnTouchOutside={true}
				closeOnHardwareBackPress={false}
				showCancelButton={true}
				showConfirmButton={true}
				cancelText="Cancel"
				confirmText="Delete"
				confirmButtonColor="red"
				cancelButtonColor="dodgerblue"
				titleStyle={{ letterSpacing: 0.3 }}
				onCancelPressed={() => {
					setPopDelete(false);
					setInvoiceToDeleteId("");
				}}
				onConfirmPressed={() => handleDelete(invoiceToDeleteId)}
				onDismiss={() => {
					setPopDelete(false);
					setInvoiceToDeleteId("");
				}}
			/>
		</>
	);
};

export default InvoiceList;

const styles = StyleSheet.create({
	itemContainer: {
		margin: 5,
		backgroundColor: "lightgrey",
		padding: 10,
	},
	item: {
		fontSize: 16,
	},
});
