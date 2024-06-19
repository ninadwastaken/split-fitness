import { createStackNavigator } from '@react-navigation/stack';
import TabNavigation from "./TabNavigation";
import TemplateWorkoutScreen from "./TemplateWorkoutScreen";
import {NavigationContainer} from "@react-navigation/native";

const Stack = createStackNavigator();

export default function StackNavigation({ database, user }) {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={TabNavigation}
                screenOptions={{
                    // headerShown: false,
                }}
            >
                <Stack.Screen

                    name="TabNavigation"
                    component={TabNavigation}
                    initialParams={{
                        database: database,
                        user: user
                    }}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="TemplateWorkoutScreen"
                    component={TemplateWorkoutScreen}
                    options={({route}) => ({ title: route.params.workout_name})}
                />
            </Stack.Navigator>
        </NavigationContainer>

    );
}