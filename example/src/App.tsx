import * as React from 'react';

import { StyleSheet, View, Text,useWindowDimensions } from 'react-native';
import { multiply, getScreenSize } from 'react-native-dimensions-toolkit';

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();
  const [screenSize, setScreenSize] = React.useState();

  const {height} = useWindowDimensions();
  React.useEffect(() => {
    multiply(3, 7).then(setResult);
    getScreenSize().then(data => {
      console.log("device screen size", {data});
      setScreenSize(JSON.stringify(data));
    });
  },[height]);

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
      <Text>ScreenSize: {screenSize}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
