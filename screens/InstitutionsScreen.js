import { View, Text, TouchableOpacity} from 'react-native'
import React from 'react'

const InstitutionsScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={{
        fontSize: 30,
        textAlign: 'center',
        marginTop: 20,
      }}>Instituciones</Text>

      <TouchableOpacity 
        onPress={() => navigation.navigate('Fire Sectors Screen')}
        style={{
          backgroundColor: '#021D34',
          padding: 10,
          marginTop: 20,
          width: '50%',
          alignSelf: 'center',
          borderRadius: 10,
        }}
      >
        <Text 
          style={{
            fontSize: 15,
            textAlign: 'center',
            color: 'white',
          }}>
          Ir a Sectores de Fuego
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default InstitutionsScreen