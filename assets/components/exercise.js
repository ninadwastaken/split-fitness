import {View, StyleSheet, Text, TouchableOpacity, Dimensions, FlatList} from 'react-native';

export default function Exercise ({ exercise_name, setsnreps }) {
    return (
        <View style={styles.container}>
            <Text style={styles.exerciseNameText}>{exercise_name.split('_').join(' ')}</Text>
            <FlatList
                data={setsnreps}
                renderItem={({item}) => {
                    <Set
                        setno={data}
                    />
                }}
            />
        </View>
    )
}

function Set({ setno, reps, weight }) {
    return (
        <View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgrey',
        borderRadius: 5,
        shadowColor: 'black',
        shadowOffset: 10,
        shadowOpacity: 0.5,
        margin: 10,
        padding: 10,
    },
    exerciseNameText: {
        fontSize: 15,
        fontWeight: 'bold',
        paddingBottom: 10,

    }
})