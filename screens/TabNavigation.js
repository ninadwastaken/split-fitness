import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import Ionicons from "@expo/vector-icons/Ionicons";
import WorkoutScreen from "./WorkoutScreen";
import DietScreen from "./DietScreen";

const Tab = createBottomTabNavigator();

export default TabNavigation = ({ route, navigation }) => {
    const { database, user } = route.params;
    return (
        // <NavigationContainer>
            <Tab.Navigator
            screenOptions= {{
                tabBarShowLabel: true,
            }}>
                <Tab.Screen
                    name="Home"
                    children={()=>
                        <HomeScreen
                            database={database}
                            user={user}
                        />
                    }
                    options={{
                        tabBarIcon: () => <Ionicons name="home" size={24} color="black" />,
                        headerShown: false,
                    }}
                />
                <Tab.Screen
                    name="Workout"
                    children={()=>
                        <WorkoutScreen
                            database={database}
                            user={user}
                            navigation={navigation}
                        />
                    }
                    options={{
                        tabBarIcon: () => <Ionicons name="barbell-outline" size={24} color="black" />,
                        // headerShown: false,
                    }}
                />
                <Tab.Screen
                    name="Diet"
                    children={()=>
                        <DietScreen
                            database={database}
                            user={user}
                        />
                    }
                    options={{
                        tabBarIcon: () => <Ionicons name="fast-food-outline" size={24} color="black" />,
                        // headerShown: false,
                    }}
                />
                <Tab.Screen
                    name="Profile"
                    // component={ProfileScreen}
                    children={()=><ProfileScreen />}
                    options={{
                        tabBarIcon: () => <Ionicons name="person-outline" size={24} color="black" />,
                    }}
                />
            </Tab.Navigator>
        // </NavigationContainer>
    );
}


