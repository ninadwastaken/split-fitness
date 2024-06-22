import {View, StyleSheet, Text, SafeAreaView, TouchableOpacity, FlatList, Dimensions} from 'react-native';
import Exercise from "../assets/components/exercise";
import { useRef, useEffect } from "react";
import StopwatchTimer, { StopwatchTimerMethods } from 'react-native-animated-stopwatch-timer';
import Ionicons from "@expo/vector-icons/Ionicons";

export default function TemplateWorkoutScreen({ route, navigation }) {
    const { workout_name } = route.params;
    const workout = {
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
    console.log(exercises)
    console.log(workout.Decline_Bench);


    // TODO! make workout page acc to sample workout data

    const stopwatchTimerRef = useRef(null);

    // Methods to control the stopwatch
    function play() {
        stopwatchTimerRef.current?.play();
    }

    function pause() {
        stopwatchTimerRef.current?.pause();
    }

    function reset() {
        stopwatchTimerRef.current?.reset();
    }

    useEffect(() => {


        play()
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            {/* title */}
            <Text> {workout_name} </Text>

            {/* workout list */}

            <FlatList
                data={exercises}
                renderItem={({item}) => <Exercise exercise_name={item} setsnreps={workout[item]}/>
                }
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


            <View style={styles.timerAndButtons}>
                <View style={styles.timer}>
                    <Ionicons
                        name='time-outline'
                        size={50}
                    />
                    <StopwatchTimer
                        ref={stopwatchTimerRef}
                        digitStyle={{fontWeight: 'bold', paddingTop: 5}}
                    />
                </View>
                <View>
                    <TouchableOpacity onPress={() => {navigation.navigate('TabNavigation')}}>
                        <Text>Finish Workout</Text>
                    </TouchableOpacity>


                    <TouchableOpacity onPress={() => {navigation.navigate('TabNavigation')}}>
                        <Text>End Workout</Text>
                    </TouchableOpacity>

                </View>


            </View>
                {/*onPress={() => {navigation.navigate('TabNavigation')}}*/}


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
    },
    timerAndButtons: {
        position: 'absolute',
        bottom: 10,
        borderWidth: 1,
        height: Dimensions.get('window').height / 6,
        width: Dimensions.get('window').width,
        padding: 10,
        flexDirection: 'row',
    },
    timer: {
        padding: 20,
        alignItems: 'center',
    }
})
