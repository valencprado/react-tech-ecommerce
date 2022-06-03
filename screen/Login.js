import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
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
    <View style={[styles.container, specificStyle.specificContainer]}>
      <Divider>

      <Text h2>Login</Text>
      <Input
        placeholder="E-mail"
        leftIcon={{ type: 'font-awesome', name: 'envelope' }}
        onChangeText={value => setEmail(value)}
        keyboardType="email-address"
        />
      <Input
        placeholder="Senha"
        leftIcon={{ type: 'font-awesome', name: 'lock' }}
        onChangeText={value => setPassword(value)}
        secureTextEntry={true}
        />
      <br></br>
      <Button
        icon={
          <Icon
            name="check"
            size={15}
            color="white"
            />
          }
          title="Entrar"
          buttonStyle={specificStyle.button}
          onPress={() => entrar()}
          />
          <br></br>
          <Button
            icon={
              <Icon
              name="user"
              size={15}
              color="white"                
           />
              }
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
      backgroundColor:"#c7fcee",
      padding:10,
  },
  button:{
      width: "100%",
      backgroundColor:"#33fee7"
  }
})