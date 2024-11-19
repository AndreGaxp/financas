import { StyleSheet, Text, View } from 'react-native';

export default function financasapp() {
  return (
    <View style={styles.container}>
      <Text>
        APP FINANÇAS
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})