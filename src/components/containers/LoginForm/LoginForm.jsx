import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const LoginForm = () => {
    const [emailInput, setEmailInput] = useState("");
    const [emailError, setEmailError] = useState();

    const [passwordInput, setPasswordInput] = useState("");
    const [passwordError, setPasswordError] = useState();

    function handleEmail(text) {
        setEmailInput(text);
    }

    function handlePassword(text) {
        setPasswordInput(text);
    }

    function login() {
        setEmailError(!emailInput.includes("@") ? "Email incorrect!" : "");
        setPasswordError(passwordInput.length < 6 ? "Mot de passe trop court!" : "");

        if (emailInput.includes("@") && passwordInput.length >= 6) {
            //Envoyé les données vers une back-end
            alert("Connexion réussie!");
            return;
        }
    }




  return (
    <View style={styles.container}>
        <TextInput
                placeholder="exemple@exemple.com"
                onChangeText={handleEmail}
                value={emailInput}
                keyboardType="email-address"
            />
      <Text>{emailError}</Text>
      <TextInput
                placeholder="password"
                onChangeText={handlePassword}
                value={passwordInput}
                keyboardType="default"
                secureTextEntry={true}
            />
        <Text>{passwordError}</Text>
        <TouchableOpacity onPress={login}>
            <Text>Se connecter</Text>
        </TouchableOpacity>
    </View>
  );
};

export default LoginForm

const styles = StyleSheet.create({
    container: {},
});