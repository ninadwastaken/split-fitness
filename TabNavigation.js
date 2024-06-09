import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import Ionicons from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export default TabNavigation = ({ database }) => {
    console.log('tabnav js');
    console.log(database);

    return (
        <NavigationContainer>
            <Tab.Navigator
            screenOptions= {{
                tabBarShowLabel: true,
            }}>
                <Tab.Screen
                    name="Home"
                    // component={HomeScreen}
                    children={()=><HomeScreen database={database}/>}
                    options={{
                        tabBarIcon: () => <Ionicons name="home" size={24} color="black" />,
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


