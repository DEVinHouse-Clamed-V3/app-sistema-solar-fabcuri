import { Text, View, Image, TouchableOpacity, Vibration, StyleSheet } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export function Planeta({ planeta }) {

    return (


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
    )
}

const styles = StyleSheet.create({

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
  