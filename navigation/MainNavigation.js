import "react-native-gesture-handler";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import InvoiceMaker from "../screens/InvoiceMaker";
import InvoicePreview from "../screens/InvoicePreview";
import InvoiceList from "../screens/InvoiceList";

const Stack = createStackNavigator();

export default function MainNavigation({ navigation }) {
	// const navigation = useNavigation();
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="Home"
					component={HomeScreen}
					options={{ headerShown: false }}
				/>
				<Stack.Screen name="InvoiceMaker" component={InvoiceMaker} />
				<Stack.Screen name="InvoiceList" component={InvoiceList} />
				<Stack.Screen
					name="InvoicePreview"
					component={InvoicePreview}
					options={""}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
