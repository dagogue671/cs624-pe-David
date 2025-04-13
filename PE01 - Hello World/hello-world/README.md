# PE01 - Hello World

This is an introductory app assignment using the Expo and the React Frameworks to develop mobile apps. The main objectives of this assignment are as follows:
- Change Background Yellow
- Display Name, Degree Program, and School

## Prerequisites
- Expo Go installed on a physical device
- Node.js (LTS version) installed
- VS Code or any other preferred code editor or IDE installed
- A macOS, Linux, or Windows (PowerShell and WSL2) with a terminal window open

## Running App
To run app make do the following on your terminal
- change the directory to the hello-world folder
- run npx expo start

Once running, a QR would generate to connect to your Expo Go app on your mobile device or select the options in the terminal to change development platforms.


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
