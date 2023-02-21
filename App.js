import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Auth from './src/components/screens/Auth/Auth';
import Profil from './src/components/screens/Profil/Profil';

export default function App() {

  const [user, setUser] = useState(null);

  return (
    // <View style={styles.container}>
    //   <Text>Bonjour</Text>
    //   <StatusBar style="auto" />
    // </View>
    // 1ère voie : 
      //  <View style={classes.container}>
      //       <Text style={classes.texte}>Bonjour!</Text>
      //       <Button onPress={() => alert("Clique!")} title="Cliques moi"></Button>
      //       <StatusBar style="auto" />
      //   </View>
    // 2ème voie : 
          <View style={classes.container}>
                {user === null ? <Auth /> : <Profil />}
              <StatusBar style="auto" />
          </View>
  );
}

// 1 ere: Les composants natifs
// 2 eme: Les événements
// 3 eme le style: inLine style, StyleSheet





// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

const classes = StyleSheet.create({
  container: {
      // width: "50%",
      // backgroundColor: "red",
      // marginTop: 100,
      paddingTop: 50,
  },

  texte: {
      color: "green",
  },
});
