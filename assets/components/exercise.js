import { View, StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native';

export default function Exercise ({ exercise_name, setsnreps }) {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{exercise_name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})