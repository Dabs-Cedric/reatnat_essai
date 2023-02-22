import { StyleSheet, Text, View } from 'react-native';
import Card from '../../HOC/Card/Card';


export default function Auth() {
  return (
    <View>
        <Card title ="Bienvenue" content="Veuillez vous authentifier"/>
      <Text>Composant potentiel</Text>
    </View>
  )
}

const styles = StyleSheet.create({})