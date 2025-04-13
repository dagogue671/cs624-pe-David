import { Text, View,  StyleSheet } from 'react-native';

export default function Index() {

  // Display Name, Degree Program, and School using 3 Text Components
  return (
    <View style={styles.container}>
      <Text style={styles.text}>David Gogue</Text>
      <Text style={styles.text}>MSCS</Text>
      <Text style={styles.text}>STC</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFF00',
    alignItems: 'center',
    justifyContent: 'center',
    

  },
  text: {
    color: '#000',
    // Increase Font Size
    fontSize: 40,
  },
});
