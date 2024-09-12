import { StatusBar} from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView, Image } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.row}>
        <StatusBar backgroundColor="#0077B5" />
        <Text style={styles.myName}>Vamos Explorar</Text>
        <Image
          source={require('./assets/Astronauta.jpg')}
          style={styles.myImage}
        />
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#8dbdeb',
    marginTop:25
   

  },
  myImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    marginVertical: 10
  },
  row:
  {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10


  },
  myName: {
    color: '#FFF',
    fontSize: 35,
    textAlign: 'center',

    
  },
});
