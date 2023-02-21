import { StyleSheet, Text, View } from 'react-native'


export default function Card(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.content}>{props.content}</Text>

      <View style={styles.children}>{props.children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "royalblue",
        borderRadius: 10,
        width: "90%",
        alignSelf: "center",
    },
    header: {},
    title: {
        color: "whitesmoke",
        fontSize: 35,
        textAlign: "center",
    },
    content: {
        color: "whitesmoke",
        fontSize: 20,
        textAlign: "center",
        padding: 5,
    },
    children: {
        padding: 10,
        backgroundColor: "whitesmoke",
    },
});