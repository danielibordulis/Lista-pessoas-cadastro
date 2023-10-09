import {Text, TextInput, Touchable, TouchableOpacity, View, Alert} from 'react-native';
import { styles } from './style';
import { useState } from 'react';

export default function HomeMap(){
  
    return(
        <View style={styles.container}>

            <Text style={styles.title}>Convidados - Festa do Breno</Text>

            <Text style={styles.itemList}>
                Danieli Paiva
            </Text>

            <Text style={styles.itemList}>
                Ryan Costa
            </Text>

            <Text style={styles.itemList}>
                Zuma
            </Text>

            <Text style={styles.itemList}>
                João
            </Text>

            <Text style={styles.itemList}>
               Dalison
            </Text>

      </View>
    )
}