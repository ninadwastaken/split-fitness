import {SafeAreaView, StyleSheet, Text, View, Platform, ActivityIndicator} from 'react-native';
import AnimatedProgressWheel from 'react-native-progress-wheel';
import {useState} from "react";

export default function DietScreen({ database, user }){
    const [currCalories, setCurrCalories] = useState(2144);
    const totalCalories = 2000;

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.caloriesView}>
                <Text style={styles.caloriesHeading}>Calories</Text>
                <AnimatedProgressWheel
                    max={totalCalories}
                    size={170}
                    width={15}
                    color={'orange'}
                    progress={currCalories}
                    backgroundColor={'lightblue'}
                    showProgressLabel={true}
                    rotation={'-90deg'}
                    labelStyle={styles.wheelTitle}
                    subtitle={`Consumed`}
                    subtitleStyle={styles.wheelSubtitle}
                    rounded={true}
                />
            </View>

            <View style={styles.caloriesView}>

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    caloriesView: {
        margin: 20,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    wheelTitle: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    wheelSubtitle: {
        size: 5,
    },
    caloriesHeading: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    }
})