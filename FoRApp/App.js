import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import KengryTheBOT from './src/Kengry/ChatBot';
import VoiceExtract from './src/Kengry/Voice';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello FoR</Text>
      <KengryTheBOT></KengryTheBOT>
      {/* <VoiceExtract></VoiceExtract> */}
      <StatusBar style="auto" />
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
