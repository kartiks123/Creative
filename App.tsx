import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet, Button, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [display, setDisplay] = useState(false);
  const [hidePassword, setHidePassword] = useState(true);

  const resetFormData = () => {
    setDisplay(false);
    setEmail("");
    setName("");
    setPassword("");
  };

  const toggleHidePassword = () => {
    setHidePassword(!hidePassword);
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      <View style={styles.container}>
        <Text style={{ fontSize: 50 }}>Form 2.0</Text>
        <Text style={{ fontSize: 22 }}>Your Username : {name}</Text>

        <TextInput
          style={styles.textInput}
          placeholder="Enter Username here"
          onChangeText={(text) => setName(text)}
          value={name}
        />

        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Enter Password here"
            secureTextEntry={hidePassword}
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
          <TouchableOpacity style={styles.eyeButton} onPress={toggleHidePassword}>
            <Text>{hidePassword ? 'Show' : 'Hide'}</Text>
          </TouchableOpacity>
        </View>

        <TextInput
          style={styles.textInput}
          placeholder="Enter Email here"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <View style={styles.buttonContainer}>
          <Button color={"green"} title='Print Details' onPress={()=>setDisplay(true)} style={styles.button}/>
        </View>
        <View style={styles.buttonContainer}>
          <Button title='Clear Details' onPress={resetFormData} style={styles.button}/>
        </View>
        <View>
          {
            display ?
              <View>
                <Text style={{fontSize:20}}>User Name is : {name}</Text>
                <Text style={{fontSize:20}}>User Password is : {password}</Text>
                <Text style={{fontSize:20}}>User Email is : {email}</Text>
              </View> 
              : null
          }
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    fontSize: 20,
    color: 'grey',
    height: 50,
    borderColor: 'blue',
    borderWidth: 2,
    margin: 22,
    padding: 10,
    width: '70%',
  },
  passwordContainer: {
    position: 'relative',
  },
  passwordInput: {
    fontSize: 20,
    color: 'grey',
    height: 50,
    borderColor: 'blue',
    borderWidth: 2,
    margin: 22,
    padding: 10,
    paddingRight: 70,
  },
  eyeButton: {
    position: 'absolute',
    right: 35,
    top: 35, 
  },
  buttonContainer: {
    marginVertical: 10,
    width: '40%',
  },
  button: {
    height: 50,
    width: '100%',
    fontSize: 20,
  },
});

export default App;
