import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { dateTimeFormatter } from "../utils";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const InvoicePreview = ({ route, navigation }) => {
	const { name, items, date } = route.params;

	useEffect(() => {
		navigation.setOptions({
			headerLeft: () => {
				return (
					<TouchableOpacity onPress={() => navigation.navigate("Home")}>
						<AntDesign name="back" size={20} color="black" style={{margin: 5}}/>
					</TouchableOpacity>
				)
			},
		});
	}, [navigation]);

	const totalSum = items.reduce(
		(acc, item) => acc + item.price * item.unit,
		0
	);

	const RenderItemListHeader = () => {
		return (
			<View style={[styles.listHeaderContainer, { marginTop: 5 }]}>
				<Text style={styles.listHeader}>Item Name</Text>
				<Text style={styles.listHeader}>PPU * Unit</Text>
				<Text style={styles.listHeader}>Total Price</Text>
			</View>
		);
	};

	const renderItem = ({ item }) => {
		const price = parseFloat(item.price);
		const unit = parseFloat(item.unit);

		return (
			<View style={styles.listHeaderContainer}>
				<Text
					style={[
						styles.listHeader,
						{
							fontWeight: "400",
							borderWidth: 0,
							marginVertical: 5,
						},
					]}
				>
					{item.item}
				</Text>
				<Text
					style={[
						styles.listHeader,
						{
							fontWeight: "400",
							borderWidth: 0,
							marginVertical: 5,
						},
					]}
				>
					{price} x {unit}
				</Text>
				<Text
					style={[
						styles.listHeader,
						{
							fontWeight: "400",
							borderWidth: 0,
							marginVertical: 5,
							paddingHorizontal: 20,
						},
					]}
				>
					{price * unit}
				</Text>
			</View>
		);
	};

	return (
		<View>
			<Text style={{ fontSize: 20, textAlign: "center" }}>
				DESH PHARMACY{" "}
			</Text>
			<Text
				style={[
					styles.shopInfo,
					{
						marginBottom: 10,
						textAlign: "center",
					},
				]}
			>
				CB 252/2, Puran Kachukhet Bazar, Dhaka Cantonment, Dhaka 1206
			</Text>
			<Text style={styles.shopInfo}>Cashier : Owner</Text>
			<Text style={styles.shopInfo}>POS: POS 1 </Text>
			<RenderItemListHeader />
			<FlatList
				horizontal={false}
				data={items}
				renderItem={renderItem}
				keyExtractor={(item, index) => `${index}`}
				style={styles.itemsList}
			/>
			<Text style={{ fontSize: 20, marginHorizontal: "30%" }}>
				-----------------------
			</Text>
			<View style={styles.textViewContainer}>
				<Text style={styles.text}>Total :</Text>
				<Text style={styles.text}>{totalSum} TK</Text>
			</View>
			<View style={styles.textViewContainer}>
				<Text style={styles.text}>Cash :</Text>
				<Text style={styles.text}>{totalSum} TK</Text>
			</View>
			<Text
				style={[
					styles.text,
					{ fontWeight: "400", marginLeft: 30, marginTop: 10 },
				]}
			>
				{dateTimeFormatter(date)}
			</Text>
		</View>
	);
};

export default InvoicePreview;

const styles = StyleSheet.create({
	listHeaderContainer: {
		flexDirection: "row",
		marginHorizontal: 10,
		marginBottom: 0,
	},
	listHeader: {
		flex: 1,
		fontWeight: "bold",
		fontSize: 16,
		letterSpacing: 0.3,
		paddingHorizontal: 20,
		borderWidth: 1,
	},
	text: {
		fontSize: 16,
		fontWeight: "bold",
		letterSpacing: 0.3,
	},
	textViewContainer: {
		marginLeft: 30,
		marginRight: 40,
		flexDirection: "row",
		justifyContent: "space-between",
	},
	shopInfo: {
		fontSize: 18,
		marginHorizontal: 10,
	},
});
