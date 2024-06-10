import {SafeAreaView, StyleSheet, Text, View, Platform, ActivityIndicator, TouchableOpacity, Dimensions} from 'react-native';
import AnimatedProgressWheel from 'react-native-progress-wheel';
import {useState} from "react";

export default function DietScreen({ database, user }){
    const [consumedCalories, setConsumedCalories] = useState(1219);
    const [burntCalories, setBurntCalories] = useState(90);
    const totalCalories = 2000;


    const [carbs, setCarbs] = useState(10);
    const [protein, setProtein] = useState(10);
    const [fat, setFat] = useState(10);



    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.caloriesView}>
                <Text style={styles.caloriesHeading}>Calories</Text>
                <View style={{flexDirection: 'row'}}>
                    <AnimatedProgressWheel
                        max={totalCalories}
                        size={170}
                        width={15}
                        color={'orange'}
                        progress={consumedCalories - burntCalories}
                        backgroundColor={'lightblue'}
                        showProgressLabel={true}
                        rotation={'-90deg'}
                        labelStyle={styles.wheelTitle}
                        subtitle={`Consumed`}
                        subtitleStyle={styles.wheelSubtitle}
                        rounded={true}
                    />

                    <View style={{paddingLeft: 25}}>
                        <Text style={styles.caloriesSubHeadings}>Base Goal</Text>
                        <Text>{totalCalories}</Text>
                        <Text style={styles.caloriesSubHeadings}>Food</Text>
                        <Text>{consumedCalories}</Text>
                        <Text style={styles.caloriesSubHeadings}>Exercise</Text>
                        <Text>{burntCalories}</Text>
                    </View>
                </View>
            </View>

            <View style={styles.macrosView}>
                <View>
                    <View style={styles.macrosSubView}>
                        <Text>{protein} g</Text>
                    </View>
                    <Text style={styles.macrosNames}>Protein</Text>
                </View>
                <View>
                    <View style={styles.macrosSubView}>
                        <Text>{fat} g</Text>
                    </View>
                    <Text style={styles.macrosNames}>Fat</Text>
                </View>
                <View>
                    <View style={styles.macrosSubView}>
                        <Text>{carbs} g</Text>
                    </View>
                    <Text style={styles.macrosNames}>Carbs</Text>
                </View>
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <TouchableOpacity>
                    <View style={styles.trackButtons}>
                        <Text style={styles.trackButtonsText}>Track Meal</Text>
                    </View>

                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.trackButtons}>
                        <Text style={styles.trackButtonsText}>Track Exercise</Text>
                    </View>
                </TouchableOpacity>
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
    },
    caloriesSubHeadings: {
        paddingTop: 18,
        fontWeight: 'bold',
    },

    macrosView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20,
        marginTop: 0,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    macrosSubView: {
        backgroundColor: 'lightgrey',
        width: 50,
        borderRadius: 5,
        alignItems: 'center',
        margin: 2,
        padding: 10,
    },
    macrosNames: {
        textAlign: 'center',
    },
    trackButtons: {
        backgroundColor: 'lightgrey',
        padding: 10,
        margin: 20,
        borderRadius: 8,
        width: Dimensions.get('window').width / 2.5,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'darkgrey',
    },
    trackButtonsText: {
        textAlign: 'center',
        textWeight: 'bold',
        fontSize: 15,
    }
})