import React,{ useState} from 'react';
import {StyleSheet,View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button, Divider, Input, Text } from 'react-native-elements';
import styles from '../style/estilo';



export default function Cadastro({navigation}) {

    const [email, setEmail]= useState(null)
    const [nome, setNome]=useState(null)
    const [cpf, setCpf]=useState(null)

    const entrar = () => {
        navigation.reset({
            index: 0,
            routes: [{name: "Login"}]
        })
      }  
      const salvar = () => {
        navigation.reset({
            index: 0,
            routes: [{name: "Login"}]
        })
      }
    return (
        <View style={[styles.container, specificStyle.specificContainer]}>
          <Divider>
         <Text h2>Cadastre-se!</Text>
        <Input
          placeholder="E-mail"
          onChangeText={value => setEmail(value)}
          keyboardType="email-address"
          style={specificStyle.input}
          />
        <Input
          placeholder="Nome"
          onChangeText={value => setNome(value)}
          secureTextEntry={true}
          style={specificStyle.input}
          />

            <Input
          placeholder="CPF"
          onChangeText={value => setCpf(value)}
          secureTextEntry={true}
          style={specificStyle.input}
          />
  
        <br></br>
            <Button
                title="Salvar"
                buttonStyle={specificStyle.button}
                onPress={()=> salvar()}
                />
                <br></br>
              <Button
                title="Login"
                buttonStyle={specificStyle.button}
                onPress={()=> entrar()}
                />

                
                </Divider>
        </View>
       

    );
}

const specificStyle =StyleSheet.create({
    specificContainer:{
        backgroundColor:"#f0fff0",
        padding:10
    },
    button:{
    
      width: "100%",
      backgroundColor:"#012062",
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


   

