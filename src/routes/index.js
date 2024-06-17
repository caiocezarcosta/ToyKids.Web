import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Welcome from '../pages/Welcome'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Home from '../pages/Cardapio'
import Menu from '../pages/menu'
import Pizza from '../pages/Pizza'
import Petisco from '../pages/Petisco'
import Doce from '../pages/Doce'
import Massa from '../pages/Massa'
import Bebida from '../pages/Bebidas'
import SobreNos from '../pages/Sobrenos'
import Agendamento from '../pages/Agendamento'
import AdminUser from '../pages/AdminUser'
const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name='Cardapio'
        component={Home}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name='Menu'
        component={Menu}
        options={{ headerShown: false }}

      />

      <Stack.Screen
        name='Massa'
        component={Massa}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Pizza'
        component={Pizza}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Doce'
        component={Doce}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Petisco'
        component={Petisco}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name='Bebida'
        component={Bebida}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name='Sobrenos'
        component={SobreNos}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name='Agendamento'
        component={Agendamento}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="AdminUser"
        component={AdminUser}
        options={{ headerShown: false }}
      />

    </Stack.Navigator>


  )
}