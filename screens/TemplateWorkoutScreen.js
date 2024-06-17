import {View, StyleSheet, Text, SafeAreaView, TouchableOpacity} from 'react-native';

export default function TemplateWorkoutScreen({ route, navigation }) {
    const { workout_name } = route.params;
    const exercises = ['incline bench', 'decline bench'];

    return (
        <SafeAreaView style={styles.container}>
            <Text> {workout_name} </Text>
            <TouchableOpacity
                onPress={() => {navigation.navigate('TabNavigation')}}
                style={[styles.endWorkoutButton, {bottom: 90}]}
            >
                <View>
                    <Text style={styles.endWorkoutButtonText}>
                        Finish Workout
                    </Text>
                </View>

            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {navigation.navigate('TabNavigation')}}
                style={styles.endWorkoutButton}
            >
                <View>
                    <Text style={styles.endWorkoutButtonText}>
                        End Workout
                    </Text>
                </View>

            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    endWorkoutButtonText: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
    endWorkoutButton: {
        borderRadius: 10,
        backgroundColor: 'white',
        borderWidth: 1,
        margin: 10,
        padding: 10,
        position: 'absolute',
        bottom: 30,
        right: 10,
    }
})
