import { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput, ImageBackground, ScrollView } from 'react-native';

function HeaderComponent({ addTodo }) {
  const [text, setText] = useState("ToDo List")
  const submit = () => {
    addTodo(text)
    setText("ToDo List")
  }
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>{text}</Text>
      <Image style={{ marginVertical: 5, width: "75%", height: 50, resizeMode: 'contain', borderRadius: 5 }} source={{ uri: "https://custom-doodle.com/wp-content/uploads/doodle/bongo-cat-pixel/bongo-cat-pixel-doodle.gif" }} />
      <View style={{ width: "75%", gap: 5, flexDirection: "row", justifyContent: "center", flexWrap: "wrap" }}>
        <TextInput
          style={styles.input}
          onChangeText={setText}
          value={text}
        />
        <Button onPress={submit}
          title="Submit"
          color="#841584"
          accessibilityLabel="Learn more about this purple button" />
      </View >
    </View>
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
  return (
    <ImageBackground style={{ flex: 1, resizeMode: "cover", flexDirection: "column" }} source={{ uri: 'https://e0.pxfuel.com/wallpapers/790/952/desktop-wallpaper-mountains-nature-landscape-digital-art-minimal.jpg' }} >
      <View height={185}>
        <HeaderComponent addTodo={addTodo} />
      </View>
      <ScrollView  >
        <View style={{ marginTop: 10, flex: 1, justifyContent: "center", alignItems: "center" }}>
          {
            todos.map(el => {
              return (
                <View style={{ backgroundColor: "white", opacity: 0.7, padding: 5, margin: 5, borderRadius: 2, width: "75%" }}>
                  <Text style={{ color: "black" }}>{el.task}</Text>
                </View>
              )
            })
          }
        </View>
      </ScrollView >

    </ImageBackground >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: 'center',
    top: 40,
    position: "absolute"
  },
  headerText: { fontSize: 28, fontWeight: 600 },
  input: {
    height: 40,
    borderWidth: 1,
    width: "70%",
    backgroundColor: "white",
    fontStyle: "normal",
    padding: 5
  },
});
