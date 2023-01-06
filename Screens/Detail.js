import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Card from '../shared/card';

function DeScreen({ navigation, route }) {
    return (
      <View style={styles.container}>
        <Card>
        {<Text style={styles.titletext} >{route.params.body}</Text> }
        {<Text style={styles.item} >{route.params.title}</Text> }
        <Text style={styles.item}>{route.params.rating}</Text>
        </Card>
        <Button
          onPress={() => navigation.navigate('Home')}
          title="Go To Home"
        />
      </View>
    );
};
export default DeScreen;

const styles = StyleSheet.create({
  container: {
    //height: '100%',
    // flex: 1,
  },
  titletext: {
      fontFamily: 'MyanmarFonts',
      fontSize: 20,
      fontWeight: 'bold',
      justifyContent: "center",
      textAlign: 'justify',
      paddingLeft: 15,
      paddingBottom: 2,
      paddingTop:5
  }, 
  buttonStyle: {
      textAlign: "right",
  }, 
  item:{
      justifyContent: 'center',
      textAlign: 'justify',
      padding: 10,
  }

});