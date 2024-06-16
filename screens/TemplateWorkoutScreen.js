import { View, StyleSheet, Text } from 'react-native';

export default function TemplateWorkoutScreen({ workout_name }) {

    return (
        <View style={styles.container}>
            <Text> {workout_name} </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})
