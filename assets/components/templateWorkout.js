import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import TemplateWorkoutScreen from "../../screens/TemplateWorkoutScreen";

export default function TemplateWorkout({ navigation, workout_name }){

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => {
                navigation.navigate('TemplateWorkoutScreen');
            }}
        >

            <Text style={styles.name_text}>{workout_name}</Text>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        borderWidth: 1,

    },
    name_text: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    }
})