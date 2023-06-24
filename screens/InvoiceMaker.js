import {
	FlatList,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import React, { useState } from "react";
import CustomTextInput from "../components/CustomTextInput";
import TouchableButton from "../components/TouchableButton";
import AwesomeAlert from "react-native-awesome-alerts";
import { AntDesign } from "@expo/vector-icons";
import { saveInvoice } from "../databaseHelper";
import uuid from "react-native-uuid";

const InvoiceMaker = ({ navigation }) => {
	const [customerName, setCustomerName] = useState("");
	const [itemName, setItemName] = useState("");
	const [pricePerUnit, setPricePerUnit] = useState("");
	const [quantity, setQuantity] = useState("");
	const [isAddItemPressed, setIsAddItemPressed] = useState(false);
	const [isSaved, setIsSaved] = useState(false);
	const [items, setItems] = useState([]);

	const isDisabled = customerName === "" || items === [];

	const handleDeleteItem = (index) => {
		const updatedItems = [...items];
		updatedItems.splice(index, 1);
		setItems(updatedItems);
	};

	const previewInvoice = () => {
		navigation.navigate("InvoicePreview", {
			name: customerName,
			items: items,
			date: new Date().toISOString(),
		});
	};

	const saveDataToDb = async () => {
		const dateString = new Date().toISOString();
		const invoiceId = uuid.v4();
		const invoiceData = {
			name : customerName,
			items: items,
			date: dateString
		}
		await saveInvoice(invoiceId, invoiceData);
	}

	const renderItem = ({ item, index }) => {
		return (
			<View style={{ flexDirection: "row", marginHorizontal: 10 }}>
				<Text style={{ ...styles.itemRowText, marginRight: 35 }}>
					{item.item}
				</Text>
				<Text style={{ ...styles.itemRowText, marginRight: 35 }}>
					{item.price}
				</Text>
				<Text style={styles.itemRowText}>{item.unit}</Text>
				<TouchableOpacity onPress={() => handleDeleteItem(index)}>
					<AntDesign
						name="delete"
						size={15}
						color="black"
						style={{ marginVertical: 10, marginHorizontal: 2 }}
					/>
				</TouchableOpacity>
			</View>
		);
	};

	return (
		<>
			<View style={styles.container}>
				<CustomTextInput
					label="Customer Name "
					onChangeText={(txt) => setCustomerName(txt)}
					value={customerName}
				/>
				{items.length === 0 && (
					<Text style={{ marginHorizontal: "30%" }}>
						No items added yet
					</Text>
				)}
				{items.length > 0 && (
					<View style={styles.itemListHeader}>
						<Text style={styles.itemColumnHeader}>Item Name</Text>
						<Text style={styles.itemColumnHeader}>Price/Unit</Text>
						<Text style={styles.itemColumnHeader}>Quantity</Text>
						<Text></Text>
					</View>
				)}
				<FlatList
					data={items}
					renderItem={renderItem}
					keyExtractor={(item, index) => `${index}`}
					style={styles.itemsList}
				/>
				<TouchableButton
					buttonText="Add Items"
					onPressAction={() => setIsAddItemPressed(true)}
				/>
				<TouchableButton
					buttonText="Create & Save Invoice"
					disabled={isDisabled}
					onPressAction={() => {
						saveDataToDb();
						setIsSaved(true);
					}}
				/>
			</View>

			<AwesomeAlert
				show={isAddItemPressed}
				title="Item Details"
				closeOnTouchOutside={true}
				closeOnHardwareBackPress={false}
				showCancelButton={true}
				showConfirmButton={
					!(itemName === "" || pricePerUnit === "" || quantity === "")
				}
				cancelText="Cancel"
				confirmText="Add Item"
				confirmButtonColor="dodgerblue"
				cancelButtonColor="grey"
				titleStyle={{ letterSpacing: 0.3 }}
				onCancelPressed={() => setIsAddItemPressed(false)}
				onConfirmPressed={() => {
					const newItem = {
						item: itemName,
						price: pricePerUnit,
						unit: quantity,
					};
					setItems([...items, newItem]);
					setItemName("");
					setPricePerUnit("");
					setQuantity("");
					setIsAddItemPressed(false);
				}}
				onDismiss={() => setIsAddItemPressed(false)}
				customView={
					<View style={{ width: 280, margin: 10 }}>
						<CustomTextInput
							label="Item Name"
							onChangeText={(txt) => setItemName(txt)}
							value={itemName}
						/>
						<CustomTextInput
							label="Price / Unit"
							onChangeText={(txt) => setPricePerUnit(txt)}
							value={pricePerUnit}
						/>
						<CustomTextInput
							label="Qunatity"
							onChangeText={(txt) => setQuantity(txt)}
							value={quantity}
						/>
					</View>
				}
			/>
      
			<AwesomeAlert
				show={isSaved}
				title="Invoice is Saved!!"
				closeOnTouchOutside={true}
				closeOnHardwareBackPress={false}
				showCancelButton={true}
				showConfirmButton={true}
				cancelText="Go to Home"
				confirmText="View Invoice"
				confirmButtonColor="dodgerblue"
				cancelButtonColor="grey"
				titleStyle={{ letterSpacing: 0.3 }}
				onCancelPressed={() => {
					setIsSaved(false);
					navigation.navigate("Home");
				}}
				onConfirmPressed={previewInvoice}
				onDismiss={() => {
					setIsSaved(false);
					navigation.navigate("Home");
				}}
			/>
		</>
	);
};

export default InvoiceMaker;

const styles = StyleSheet.create({
	container: {
		margin: 10,
		// alignItems: "center",
	},
	itemListHeader: {
		flexDirection: "row",
		margin: 5,
		borderBottomWidth: 1,
	},
	itemColumnHeader: {
		flex: 1,
		fontWeight: "bold",
		letterSpacing: 0.3,
		fontSize: 16,
	},
	itemRowText: {
		fontWeight: "500",
		letterSpacing: 0.3,
		color: "black",
		fontSize: 16,
		width: 75,
		marginRight: 10,
	},
});
