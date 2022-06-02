import * as React from 'react';
import { Text, View, Image } from 'react-native';
import {Button, Card} from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { color } from 'react-native-reanimated';
import { ScrollView } from 'react-native-gesture-handler';
import styles from '../style/estilo';

// const sair = () => {
//   navigation.reset({
//       index: 0,
//       routes: [{name: "Login"}]
//   })
// }



function Computadores() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', display:'flex' }}>
     
      <ScrollView style={{width:'100%'}}>
      <Card style={{width:'100px'}}>
     <Card.Title>Monitor</Card.Title>
     <Card.Divider></Card.Divider>
    <Image
    style={{width:'100%', height:100}}
    resizeMode="contain"
    source={{uri:"https://a-static.mlcdn.com.br/800x560/monitor-led-195-hdmi-vga-widescreen-19-5-fox-fox-racer/foxonline/616/ba95e2c262a344f72096d7bdf5059170.jpg"}}
    />
     <Text>R$600,00</Text>
     <Button title="Comprar" onPress={() => alert('Compra concluída!')}/>
      </Card>  

      <Card>
     <Card.Title>Mouse</Card.Title>
     <Card.Divider></Card.Divider>
     <Image
    style={{width:'100%', height:100}}
    resizeMode="contain"
    source={{uri:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.r3OBFHYuyBTZw_md4CXaqgHaHa%26pid%3DApi&f=1"}}
    />
     <Text>R$150,00</Text>
      </Card>
      <Card>
     <Card.Title>Mousepad</Card.Title>
     <Card.Divider></Card.Divider>
     <Image
    style={{width:'100%', height:100}}
    resizeMode="contain"
    source={{uri:"https://img.terabyteshop.com.br/produto/g/mousepad-gamer-rise-mode-grande-scorpion-red-rg-mp-05-sr_51200.jpg"}}
    />
     <Text>R$100,00</Text>
      </Card>
      <Card>
     <Card.Title>Teclado</Card.Title>
     <Card.Divider></Card.Divider>
     <Image
        style={{width:'100%', height:100}}
        resizeMode="contain"
        source={{uri:"https://static3.tcdn.com.br/img/img_prod/374123/teclado_mecanico_gamer_alloy_origins_rgb_switch_hyperx_red_abnt2_hx_kb6rdx_br_kingston_31933_3_20200817153406.jpg"}}
        /> 
     <Text>R$250,00</Text>
      </Card> 
      <Card>
     <Card.Title>Gabinete</Card.Title>
     <Card.Divider></Card.Divider>
        <Image
        style={{width:'100%', height:100}}
        resizeMode="contain"
        source={{uri:"https://www.oceanoinformatica.com.br/media/catalog/product/cache/1/thumbnail/2000x2000/9df78eab33525d08d6e5fb8d27136e95/2/0/2000000018710F5EF4F.jpg"}}
        />
     <Text>R$400,00</Text>
      </Card>
      </ScrollView>
    </View>
  );
}

function Jogos() {
  return (
    <View style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center' }}>
      <ScrollView  style={{width:'100%'}}>
      <Card>
     <Card.Title>GTA V</Card.Title>
     <Card.Divider></Card.Divider>
     <Image
     style={{width:'100%', height:100}}
     resizeMode="contain"
     source={{uri:"https://hipertextual.com/wp-content/uploads/2021/05/GTA-5-1-scaled.jpg"}}
     />
     <Text>R$150</Text>
      </Card>  
      <Card>
     <Card.Title>Minecraft</Card.Title>
     <Card.Divider></Card.Divider>
            <Image
            style={{width:'100%', height:100}}
            resizeMode="contain"
            source={{uri:"https://unblockedgames7766.com/wp-content/uploads/2021/03/minecraft-unblocked.jpg"}}
            />  
            <Text>R$100,00</Text>
      </Card>
      <Card>
     <Card.Title>Red Dead Redemption 2</Card.Title>
     <Card.Divider></Card.Divider>
            <Image
            style={{width:'100%', height:100}}
            resizeMode="contain"
            source={{uri:"https://img.hype.games/cdn/2db186b8-c5bf-46d2-823b-8b11fbd31a5bRed-Dead-Redemption-2-Special-Edition-Cover.jpg"}}
            />
            <Text>R$250</Text>
      </Card>
      <Card>
     <Card.Title>Club Penguin</Card.Title>
     <Card.Divider></Card.Divider>
            <Image
            style={{width:'100%', height:100}}
            resizeMode="contain"
            source={{uri:"http://2.bp.blogspot.com/-Zj_DUCH75aY/TbtGhx-jTSI/AAAAAAAAAkU/oKJV4doCnpI/s1600/52_lrg-1024.jpg"}}
            />
              <Text>R$50,00</Text>
      </Card> 
      <Card>
     <Card.Title>Goat Simulator</Card.Title>
     <Card.Divider></Card.Divider>
            <Image
            style={{width:'100%', height:100}}
            resizeMode="contain"
            source={{uri:"https://1.bp.blogspot.com/-yD-gvp39psk/Xmw3SOF3wJI/AAAAAAAAEZA/lD_Xk-iT8GIY17r0qgpniD0Com9GKYhiACLcBGAsYHQ/s1600/4b658add449484c6cb298c48638e.png"}}
            />
            <Text> R$100,00</Text>
      </Card>
      </ScrollView>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function Principal() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: '#74eef3',
        
        
      }}
    >

      <Tab.Screen
        name="Computadores"
        component={Computadores}
        options={{
          tabBarLabel: 'Computadores',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="laptop" color={color} size={size} />
            ),
          }}
      />
          <Tab.Screen
            name="Jogos"
            component={Jogos}
            options={{
              tabBarLabel: 'Jogos',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="controller-classic" color={color} size={size} />
              ),
            }}
          />
    </Tab.Navigator>
  );
}
// const specificStyle =StyleSheet.create({
//   button:{
//       width: "40px",
//       margintop:10,
//       backgroundColor:"#ffd100",
//       color:"#fff"
//   }
// })