import React from 'react';
import { View, Text, TextInput, Button, StyleSheet} from 'react-native';
import { Formik } from 'formik';

export default function ReviewForm() {

    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
           <Formik
                initalValues={ { title:'', body:'', rating:''}}
                onSubmit={(values) => {
                    console.log(values);
                }}
            >
            
             </Formik>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        fontSize: 18,
        borderRadius: 6,
    },
});