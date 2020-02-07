import React , { Component } from 'react';
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity, Button} from 'react-native';

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} 
          source={require('../RNproject/src/img/logo.png')}/>
          <Text style={styles.title}>This is the Login page!</Text>
        </View>
        <View style={styles.formContainer}>
          <TextInput placeholder=" username or email"
          style={styles.input}/>
          <TextInput placeholder=" password"
          style={styles.input}/>
          <TouchableOpacity>
          <Text style={{textAlign: 'center', color: 'white'}}>Don't have an account? Sign Up here!</Text>
          </TouchableOpacity>
        </View>
        <View style={{width: 150, marginHorizontal: 130, marginBottom: 20}}>
        <Button
          title="Login"
          onPress={() => Alert.alert('Simple Button pressed')}
        />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3A3030'
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  logo: {
    width: 200,
    height: 100
  },
  title: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom:35,
    borderRadius: 20,
    color: 'white',
    paddingHorizontal: 20
  },
  formContainer: {
    marginBottom: 100,
  }
});

