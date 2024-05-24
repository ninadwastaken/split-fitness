import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, StyleSheet, Text, View, Platform} from 'react-native';

export default function HomeScreen() {
  return (
      <SafeAreaView style={styles.container}>
          <Text style={styles.helloText}>Hello,</Text>
          <StatusBar style="auto" />
      </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#E1E1E1',
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: 10,
    marginTop: Platform.OS === 'ios' ? 60: 40,
  },
  helloText: {
    alignSelf: 'flex-start',
    paddingLeft: 20,
    fontSize: 30,
    fontWeight: 'bold',
  }
});
