import { StyleSheet, Text, View,StatusBar } from 'react-native';
import AuthNavigation from './Navigation/AuthNavigation';

export default function App() {
  return (
    <View style={styles.container}>
      <AuthNavigation />
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
