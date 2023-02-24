import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors } from '../../../../styles/colors';

const Btn = ({action, children, label}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={action}>
        <View style={styles.icon}>{children}</View>
        <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
    
  );
};

export default Btn;

const styles = StyleSheet.create({
    container: {
		backgroundColor: colors.primaryColor,
		padding: 10,
		borderRadius: 5,
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	label: {
		color: colors.lightColor,
		textAlign: "center",
		fontSize: 15,
		marginHorizontal: 10,
	},
	icon: {},
});