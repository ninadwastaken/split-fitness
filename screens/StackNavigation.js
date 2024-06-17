import { createStackNavigator } from '@react-navigation/stack';
import TabNavigation from "./TabNavigation";
import TemplateWorkoutScreen from "./TemplateWorkoutScreen";
import {NavigationContainer} from "@react-navigation/native";

const Stack = createStackNavigator();

export default function StackNavigation({ database, user }) {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={TabNavigation}>
                <Stack.Screen

                    name="TabNavigation"
                    component={TabNavigation}
                    initialParams={{
                        database: database,
                        user: user
                    }}
                />
                <Stack.Screen
                    name="TemplateWorkoutScreen"
                    component={TemplateWorkoutScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>

    );
}