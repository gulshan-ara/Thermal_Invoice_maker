import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

return (
	<NavigationContainer>
		<Stack.Navigator>
			<Stack.Screen name="Home" component={} />
		</Stack.Navigator>
	</NavigationContainer>
);
