import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'



const myCard = {
    title: "Bienvenue !",
    content: "Veuillez vous authentifier",
};


export default function Auth() {
    const [login, isLogin] = useState(true);

    function accesLogin() {
        isLogin(!login);
    }
  return (
    <View>
      <Text>Auth</Text>
    </View>
  )
}

const styles = StyleSheet.create({})