import { StyleSheet, Text, View, Button } from 'react-native';

import * as ReactNativeDimensionsToolkit from 'react-native-dimensions-toolkit';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{ReactNativeDimensionsToolkit.hello()}</Text>
      <Button title='Click me' onPress={() => {
          const result = ReactNativeDimensionsToolkit.getRealScreenSize()
          console.log("result is ====", result)
      }
      }>

      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
