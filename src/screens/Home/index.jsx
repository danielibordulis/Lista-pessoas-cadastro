
import {Text, TextInput, Touchable, TouchableOpacity, View, Alert} from 'react-native';
import { styles } from './style';
import { useState } from 'react';

export default function Home(){
    const [name, setName]= useState('')
    const [gender, setGender]= useState('')
    const [birth, setBirth]= useState('')

    function handleUserAdd(){
        console.log('Nome:'+name 
        +"\nGênero:"+gender 
        +"\nData de Nascimento:"+birth)

        Alert.alert('Nome:'+name 
        +"\nGênero:"+gender 
        +"\nData de Nascimento:"+birth)
    }
   
    return(
        <View style={styles.container}>

            <Text style={styles.title}>Preencha os Dados</Text>

            <TextInput
            style={styles.Input}
            placeholder='Nome completo'
            placeholderTextColor='black'
            value={name}
            onChangeText={setName}
            />

            <TextInput
            style={styles.Input}
            placeholder='Gênero'
            placeholderTextColor='black'
            value={gender}
            onChangeText={setGender}
            />

            <TextInput
            style={styles.Input}
            placeholder='Data de nascimento'
            placeholderTextColor='black'
            value={birth}
            onChangeText={setBirth}
            />

            <TouchableOpacity style={styles.btn} onPress={handleUserAdd}>
                <Text style={styles.btnTxt}>Cadastrar</Text>
            </TouchableOpacity>


      </View>
    )
}