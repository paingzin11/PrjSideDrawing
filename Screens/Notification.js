import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

function NotiScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        
        <Button
          onPress={() => navigation.navigate('Home')}
          title="Go To Home"
        />
      </View>
    );
};
export default NotiScreen;