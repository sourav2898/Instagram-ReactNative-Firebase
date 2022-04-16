import { StyleSheet, Text, View, SafeAreaView,StatusBar } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import HomeScreen from './screens/HomeScreen';

export default function App() {
  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <HomeScreen />
      </SafeAreaView>
    </PaperProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor:"#444"
  },
  text: {
    fontSize: 25,
    fontWeight: '500',
  }
});
