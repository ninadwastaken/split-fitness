import { View, StyleSheet, Text } from 'react-native';

export default function TemplateWorkoutScreen({ route, navigation }) {
    const { workout_name } = route.params;
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
