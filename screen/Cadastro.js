import React,{ useState} from 'react';
import {StyleSheet,View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button, CheckBox, Input, Text } from 'react-native-elements';
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
         <Text h2>Cadastre-se!</Text>
        <Input
          placeholder="E-mail"
          leftIcon={{ type: 'font-awesome', name: 'envelope' }}
          onChangeText={value => setEmail(value)}
          keyboardType="email-address"
          />
        <Input
          placeholder="Nome"
          leftIcon={{ type: 'font-awesome', name: 'lock' }}
          onChangeText={value => setNome(value)}
          secureTextEntry={true}
          />

            <Input
          placeholder="CPF"
          leftIcon={{ type: 'font-awesome', name: 'lock' }}
          onChangeText={value => setCpf(value)}
          secureTextEntry={true}
          />
  
        
            <Button
                icon={
                    <Icon
                    name="check"
                    size={15}
                    color="white"
                    backgroundColor="c7fcee"
                    />
                }
                title="Salvar"
                buttonStyle={specificStyle.button}
                onPress={()=> salvar()}
                />
<Button
                icon={
                    <Icon
                    name="check"
                    size={15}
                    color="white"
                    backgroundColor="c7fcee"
                    />
                }
                title="Login"
                buttonStyle={specificStyle.button}
                onPress={()=> entrar()}
                />

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
        margintop:10,
        backgroundColor:"#012062"
    }
})


   

