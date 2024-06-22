import {View, StyleSheet, Text, TouchableOpacity, Dimensions, FlatList} from 'react-native';
import {set} from "firebase/database";
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function Exercise ({ exercise_name, setsnreps }) {
    return (
        <View style={styles.container}>
            <Text style={styles.exerciseNameText}>{exercise_name.split('_').join(' ')}</Text>
            <Set
                setno={"Set"}
                reps={"Reps"}
                weight={"Weight"}
            />
            <FlatList
                data={Object.keys(setsnreps)}
                renderItem={({item}) =>
                    <Set
                        setno={item}
                        reps={setsnreps[item].reps}
                        weight={setsnreps[item].weight}
                    />
                }
            />
        </View>
    )
}

function Set({ setno, reps, weight }) {
    return (
        <View style={styles.setView}>
            <Text style={{fontWeight: 'bold',}}>{setno}</Text>
            <Text>{weight}</Text>
            <Text>{reps}</Text>
            <BouncyCheckbox
                size={20}
                fillColor="black"
                unFillColor="white"
                iconStyle={{ borderColor: "red" }}
                // innerIconStyle={{ borderWidth: 2 }}
                // textStyle={{ fontFamily: "JosefinSans-Regular" }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgrey',
        borderRadius: 5,
        shadowColor: 'black',
        // shadowOffset: 10,
        // shadowOpacity: 0.5,
        margin: 10,
        padding: 10,
    },
    exerciseNameText: {
        fontSize: 15,
        fontWeight: 'bold',
        paddingBottom: 10,
        paddingLeft: 3,

    },
    setView: {
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 8,
        paddingHorizontal: 50,
        margin: 4,
        flexDirection: 'row',
        // alignItems: 'center',
        justifyContent: 'space-between',
    }
})