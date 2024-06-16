import {SafeAreaView, StyleSheet, Text, View, Platform, ActivityIndicator, FlatList} from 'react-native';
import TemplateWorkout from "../assets/components/templateWorkout";
import { createStackNavigator} from "@react-navigation/stack";
import TemplateWorkoutScreen from "./TemplateWorkoutScreen";


const Stack = createStackNavigator();
export default function WorkoutScreen({ database, user }){
    return (
        <Stack.Navigator>
            <Stack.Screen name="WorkoutList" component={WorkoutList} />
            <Stack.Screen name="TemplateWorkoutScreen" component={TemplateWorkoutScreen} />
        </Stack.Navigator>
    )
}

function WorkoutList({navigation}){
    const workout_names = ["urmom", "urdad"];
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={workout_names}
                renderItem={({item}) => <TemplateWorkout navigation={navigation} workout_name={item}/>}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})