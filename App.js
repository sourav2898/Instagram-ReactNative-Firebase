import { StyleSheet, Text, View,StatusBar } from 'react-native';
import Navigation from './Navigation';

export default function App() {
  return (
    <View style={styles.container}>
      <Navigation />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor:"#111",
    height: '100%'
  },
  text: {
    fontSize: 25,
    fontWeight: '500',
  }
});
