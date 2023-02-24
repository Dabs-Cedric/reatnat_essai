import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useState } from 'react'
import InputWithError from '../ui/InputWithError/InputWithError';
import Btn from '../ui/Btn/Btn';
import { AntDesign } from "@expo/vector-icons";
import { getEmailError, getPasswordError, validatePassword } from '../../../utils/validations';


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

    // function login() {
    //     setEmailError(!emailInput.includes("@") ? "Email incorrect!" : "");
    //     setPasswordError(passwordInput.length < 6 ? "Mot de passe trop court!" : "");

    //     if (emailInput.includes("@") && passwordInput.length >= 6) {
    //         //Envoyé les données vers une back-end
    //         alert("Connexion réussie!");
    //         return;
    //     }
    function login() {
		setEmailError(getEmailError(emailInput));
		setPasswordError(getPasswordError(passwordInput));

		if (validateEmail(emailInput) && validatePassword(passwordInput)) {
			//Envoyer les données vers une back-end
			alert("Connexion réussie!");
			return;
		}


    }




  return (
    // <View style={styles.container}>
    //     <TextInput
    //             placeholder="exemple@exemple.com"
    //             onChangeText={handleEmail}
    //             value={emailInput}
    //             keyboardType="email-address"
    //         />
    //   <Text>{emailError}</Text>
    //   <TextInput
    //             placeholder="password"
    //             onChangeText={handlePassword}
    //             value={passwordInput}
    //             keyboardType="default"
    //             secureTextEntry={true}
    //         />
    //     <Text>{passwordError}</Text>
    //     <TouchableOpacity onPress={login}>
    //         <Text>Se connecter</Text>
    //     </TouchableOpacity>
    // </View>

    <View style={styles.container}>
			<InputWithError
				holder="Email"
				valeur={emailInput}
				action={handleEmail}
				errorMessage={emailError}
				type="email-address"
			/>

			<InputWithError
				holder="Mot de passe"
				valeur={passwordInput}
				action={handlePassword}
				errorMessage={passwordError}
				type="default"
				isPassword
			/>

			<Btn action={login} label="Se connecter">
				<AntDesign name="login" size={24} color="whitesmoke" />
			</Btn>
		</View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
    container: {},
});