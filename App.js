import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView } from 'react-native';
import { planetas } from './planetas';
import {Planeta}from './Planeta';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor="#0077B5" />
      <View style={styles.header}>
        <View style={styles.rowHeader}>
          <Text style={styles.textHeader}>Vamos Explorar</Text>
          <Image
            source={require('./assets/Astronauta.jpg')}
            style={styles.imageHeader}
          />
        </View>

        <ScrollView>
          {  
            planetas.map((planeta) =>(
              
         <Planeta planeta={planeta}></Planeta>
    
               ))
          }
        </ScrollView>
      </View>


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 20,
    flex: 1,
    backgroundColor: '#8dbdeb',
    marginTop: 25,
    alignItems: 'center'


  },
  imageHeader: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    marginVertical: 10
  },
  rowHeader:
  {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10


  },
  textHeader: {
    color: '#FFF',
    fontSize: 35,
    textAlign: 'center',


  },
  
});
