import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView } from 'react-native';
import { planetas } from './planetas'

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

         
            <View style={styles.post}>
              <Text style={styles.textoPostHeader}>{planeta.nome}</Text>
              <Image style={styles.imagePost}
                source={{ uri: planeta.img }}
              />
              <View style={styles.textoPost}>
                <Text style={styles.letras1}>Average Orbital Speed</Text>
                <Text style={styles.letras2}>{planeta.velocidadeOrbitalMediaKmS} km/s</Text>
              </View>
              <View style={styles.textoPost}>
                <Text style={styles.letras1}>Satellites</Text>
                <Text style={styles.letras2}>{planeta.quantidadeSatelites}</Text>
              </View>
              <View style={styles.textoPost}>
                <Text style={styles.letras1}>Surface Area</Text>
                <Text style={styles.letras2}>{planeta.areaSuperficieKm2} km²</Text>
              </View>
              <View style={styles.textoPost}>
                <Text style={styles.letras1}>Rotation Period</Text>
                <Text style={styles.letras2}>{planeta.periodoRotacaoDias} d</Text>
              </View>

            </View>
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
  imagePost: {
    width: 250,
    height: 250,
    textAlign: 'center',


  },
  post: {
    padding: 10,
    width: '100%',
    backgroundColor: '#000',
    borderRadius: 15,
    marginBottom:5
  },

  textoPostHeader: {
    textAlign: 'center',
    fontSize: 50,
    color: '#FFF'
  },

  textoPost: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  letras1: {
    color: '#FFF',
    fontWeight: '300'
  },

  letras2: {
    color: '#FFF',
    fontWeight: 'bold',
  }
});
