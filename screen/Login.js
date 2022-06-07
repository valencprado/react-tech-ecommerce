import React, { useState } from 'react';
import { StyleSheet, View, Image, KeyboardAvoidingView } from 'react-native';
import { Button, Divider, Input, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../style/estilo';





export default function Login({navigation}) {

  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  const entrar = () => {
    navigation.reset({
        index: 0,
        routes: [{name: "Menu"}]
    })
  }

  const Cadastro= () => {
    navigation.reset({
        index: 0,
        routes: [{name: "Cadastro"}]
    })
  }

  return (
    <View style={[specificStyle.specificContainer]}>
      <Divider>
      <Text h2 style={{textAlign:'center'}}>Login</Text>
      <br></br>
      <Input
        placeholder="E-mail"
        autoCorrect={false}
        onChangeText={value => setEmail(value)}
        keyboardType="email-address"
        style={specificStyle.input}
        />
      <Input
        placeholder="Senha"
        onChangeText={value => setPassword(value)}
        secureTextEntry={true}
        style={specificStyle.input}
        />
      <br></br>
      <Button
          title="Entrar"
          buttonStyle={specificStyle.button}
          onPress={() => entrar()}
          />
          <br></br>
          <Button
              title="Cadastrar"
              buttonStyle={specificStyle.button}
              onPress={() => Cadastro()}
              />
  </Divider>
    </View>
  );
}


const specificStyle =StyleSheet.create({
  
  specificContainer:{
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:"#c7fcee",
      padding:10,
      flex:1,
  },
  button:{
    
      width: "100%",
      backgroundColor:"#33fee7",
      flex:1,
      height:45,
     
  },
  input:{
        backgroundColor:"#FFF",
        width:'100%',
        color:"#222",
        fontSize:17,
        borderRadius: 7,
        padding: 10,
       
  },
})