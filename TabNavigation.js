import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import Ionicons from "@expo/vector-icons/Ionicons";
import WorkoutScreen from "./screens/WorkoutScreen";
import DietScreen from "./screens/DietScreen";

const Tab = createBottomTabNavigator();

export default TabNavigation = ({ database, user }) => {

    return (
        <NavigationContainer>
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
                        />
                    }
                    options={{
                        tabBarIcon: () => <Ionicons name="barbell-outline" size={24} color="black" />,
                        headerShown: false,
                    }}
                />
                <Tab.Screen
                    name="Diet"
                    children={()=>
                        <DietScreen
                        />
                    }
                    options={{
                        tabBarIcon: () => <Ionicons name="fast-food-outline" size={24} color="black" />,
                        headerShown: false,
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
        </NavigationContainer>
    );
}


