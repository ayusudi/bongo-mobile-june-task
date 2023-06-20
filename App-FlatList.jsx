import { useState } from 'react';
import { FlatList, StyleSheet, Text, View, Image, Button, TextInput, ImageBackground, ScrollView } from 'react-native';

function HeaderComponent({ addTodo }) {
  const [text, setText] = useState("ToDo List")
  const submit = () => {
    addTodo(text)
    setText("ToDo List")
  }
  return (
    <View style={
      {
        flex: 1,
        resizeMode: "cover",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: 'center',
      }
    } width={"100%"} >
      <Text style={styles.headerText}>{text}</Text>
      <Image style={{ marginVertical: 5, width: "75%", height: 50, resizeMode: 'contain', borderRadius: 5 }} source={{ uri: "https://custom-doodle.com/wp-content/uploads/doodle/bongo-cat-pixel/bongo-cat-pixel-doodle.gif" }} />
      <View style={{ width: "75%", gap: 5, flexDirection: "row", justifyContent: "center", flexWrap: "wrap" }}>
        <TextInput
          style={styles.input}
          flex={1}
          onChangeText={setText}
          value={text}
        />
        <Button onPress={submit}
          title="Submit"
          color="#841584"
          accessibilityLabel="Learn more about this purple button" />
      </View >
    </View >
  )
}

export default function App() {
  const [todos, setTodos] = useState([
    { task: "Wash your face" },
    { task: "Eat and get energy!" },
    { task: "Listening to focus music" },
    { task: "Learn react native" },
    { task: "Learn RN component" },
    { task: "Learn scrollview" },
    { task: "Learn flatlist" },
    { task: "Learn gesture handler" },
    { task: "Learn rn navigation" },
    { task: "Learn mongodb" },
    { task: "Learn redis" },
    { task: "Focus on final project idea" },
  ])
  const addTodo = (text) => {
    let temp = [...todos]
    temp.unshift({ task: text })
    setTodos(temp)
  }
  const Todo = ({ index, item }) => {
    return (
      <View style={{ width: "75%", alignSelf: "center", backgroundColor: "white", opacity: 0.7, padding: 5, margin: 5, borderRadius: 2 }}>
        <Text style={{ color: "black" }}>{item.task}</Text>
      </View>
    )
  };
  return (
    <ImageBackground style={styles.container} source={{ uri: 'https://e0.pxfuel.com/wallpapers/790/952/desktop-wallpaper-mountains-nature-landscape-digital-art-minimal.jpg' }} >
      <View width={"100%"} height={160}>
        <HeaderComponent addTodo={addTodo} />

      </View>
      < FlatList width={"100%"}
        data={todos}
        renderItem={Todo}
        keyExtractor={item => item.task}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: "cover",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: 'center',
  },
  headerText: { fontSize: 28, fontWeight: 600 },
  input: {
    height: 40,
    borderWidth: 1,
    backgroundColor: "white",
    fontStyle: "normal",
    padding: 5
  },
});
