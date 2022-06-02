import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={{
        fontSize: 30,
        textAlign: 'center',
        marginTop: 20,
      }}>FireLoad NB - Inicio</Text>

      <TouchableOpacity 
        onPress={() => navigation.navigate('Institutions')}
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
          Mis Estudios de Carga de Fuego
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen