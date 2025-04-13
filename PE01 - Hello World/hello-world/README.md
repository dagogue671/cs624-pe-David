# PE01 - Hello World

This is an introductory app using the Expo and the React Framework to develop mobile apps. The main objectives of this assignment are as follows:
- Change Background Yellow
- Display Name, Degree Program, and School

!(https://drive.google.com/file/d/1tuXtm47ggtoGXzVyB_VV59NRxR4ZY5wx/view?usp=sharing)



Changes that have been made are in the app > (tabs) > index.tsx

```
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
```
