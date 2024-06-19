import {View, StyleSheet, Text, SafeAreaView, TouchableOpacity, FlatList} from 'react-native';
import Exercise from "../assets/components/exercise";

export default function TemplateWorkoutScreen({ route, navigation }) {
    const { workout_name } = route.params;
    const workout = {
        workout_name: 'best workout',
        Decline_Bench: {
            1: { reps: 8, weight: 130 },
            2: { reps: 8, weight: 150 },
        },
        incline_bench: {
            1: { reps: 12, weight: 200 },
            2: { reps: 1, weight: 90 },
        },
    }
    // workout.workout_name = workout.workout_name.split('_').join(' ')

    const exercises = Object.keys(workout);


    // TODO! make workout page acc to sample workout data

    return (
        <SafeAreaView style={styles.container}>
            {/* title */}
            <Text> {workout.workout_name} </Text>

            {/* workout list */}

            <FlatList
                data={exercises}
                renderItem={({item}) => <Exercise exercise_name={item} setsnreps={workout.item} />}
            />



            {/* sample workout data:
                workout_name:
                    e1:
                        1:
                            reps: int
                            weight: int
                        2:
                            reps: int
                            weight: int
                        ...
                    e2:
                        1:
                            reps: int
                            weight: int
                        2:
                            reps: int
                            weight: int
                        ...
                    .
                    .
                    .
            */}

            {/* timer and buttons */}
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
