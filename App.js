import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Auth } from "./src/components/screens/Auth/Auth";
import { Profil } from "./src/components/screens/Profil/Profil";

export default function App() {
  const [user, setUser] = useState(null);
  
  return (
    <View style={styles.container}>
      {user === null ? <Auth/> : <Profil/>}
      <Text>Bonjour</Text>
      <StatusBar style="auto" />
    </View>
  );
}

// 1 ere: Les composants natifs
// 2 eme: Les événements
// 3 eme le style: inLine style, StyleSheet





const styles = StyleSheet.create({
  container: {
    //flex: 1,
    //backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
    paddingTop: 50,
  },

  texte: {
    color: "green",
  },
});


//Exercice:
//1. Créer deux composant:
// LoginForm: /src/components/containers/LoginForm/LoginForm.jsx
// SignupForm: /src/components/containers/SignupForm/SignupForm.jsx

//Dans Auth.jsx:
//2. Déclarer une varibale d'état et son setter nommée isLogin intialisée a true.

//3. Déclarer une fonction qui permet d'inverser la variable d'état.

//4. Afficher grace a la condition isLogin le composant LoginForm ou SignupForm

//5. Utiliser le composant natif TouchableOpacity, pour permettre a l'uitilisateur de switcher entre les formulaire