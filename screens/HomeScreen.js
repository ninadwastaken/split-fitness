import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, StyleSheet, Text, View, Platform} from 'react-native';
import { readUserData } from '../firebase_fns/userDataFns';



const firstName = "Ninad";
const d = new Date();
const weekdays = ['Sunday', 'Monday', "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August","September", "October", "November", "December"];

export default function HomeScreen(database) {

  readUserData(database, 'ninad2eyes@gmail.com');


  return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.helloText}>Hello,</Text>
        <Text style={styles.firstNameText}>{firstName}</Text>
        <Text style={styles.dateText}>{weekdays[d.getDay()]},  {months[d.getMonth()]} {d.getDate()}</Text>
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
    fontSize: 27,
    fontWeight: 'bold',
    color: 'grey',
  },
  firstNameText: {
    alignSelf: 'flex-start',
    paddingLeft: 20,
    paddingTop: 5,
    fontSize: 30,
    fontWeight: 'bold',
  },
  dateText: {
    alignSelf: 'flex-start',
    paddingLeft: 20,
    paddingTop: 30,
    fontSize: 23,
    fontWeight: 'bold',
    color: 'grey',
  }
});
