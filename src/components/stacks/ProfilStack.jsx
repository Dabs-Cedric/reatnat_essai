import { View, Text } from 'react-native'
import Profil from '../screens/Profil/Profil';
import Cam from '../screens/Cam/Cam';
import { colors } from '../../styles/colors';
import { createStackNavigator } from '@react-navigation/stack';

const Pile = createStackNavigator();

const ProfilStack = () => {
  return (
    <Pile.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: colors.primaryColor },
          headerTitleStyle: { color: colors.lightColor },
    }}
  >
    <Pile.Screen
        name="profil"
          component={Profil}
          options={{
            title: "Votre page de profil",
      }}
    />
    <Pile.Screen
        options={{
          title: "Prenez une photo",
      }}
        name="camera"
        component={Cam}
    />
    </Pile.Navigator>
  );
};

export default ProfilStack