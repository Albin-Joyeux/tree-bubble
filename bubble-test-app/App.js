import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Bubble from "react-bubble-ui";

const bubbles = [
  {
    title: "Ma bulle 1",
    content: "Ceci est le contenu de la bulle 1",
  },
  {
    title: "Ma bulle 2",
    content: "Ceci est le contenu de la bulle 2",
  },
];

export default function App() {
  return (
    <View style={styles.container}>
      {bubbles.map((bubble) => (
        <View
          key={bubble.title}
          style={{ backgroundColor: "red", 
          width: 100, 
          height: 100, 
          borderRadius: 50,
        }}
        >
          <Text>{bubble.title}</Text>
          <Text>{bubble.content}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});