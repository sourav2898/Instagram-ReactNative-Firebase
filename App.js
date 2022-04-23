import { StyleSheet, Text, View, SafeAreaView,StatusBar } from 'react-native';
import AddPost from './components/addPost/AddPost';
import HomeScreen from './screens/HomeScreen';

export default function App() {
  return (
      <SafeAreaView style={styles.container}>
        <AddPost />
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor:"#111"
  },
  text: {
    fontSize: 25,
    fontWeight: '500',
  }
});
