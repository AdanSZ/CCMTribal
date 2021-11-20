import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import { Formik } from 'formik';
import { Input, Button } from 'react-native-elements'
import { InputStyles } from '../Styles/AppStyles'
import * as Yup from 'yup';

function BusinessForm(props) {
    
    const validationSchema = Yup.object().shape({
        name: Yup.string()
          .min(2, 'Too Short!')
          .max(50, 'Too Long!')
          .required('Required')
      });

    let initialValues =  { name: ''}    
    if(props.name){
        initialValues.name = props.name
    }
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={values => {
                props.onPress(values)
            }}
            validationSchema={validationSchema}
            enableReinitialize
        >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
            <View style={{flex:1, alignItems:'center'}}>
                <Input
                    placeholder='Name'
                    onChangeText={handleChange('name')}
                    onBlur={handleBlur('name')}
                    value={values.name}
                    containerStyle={InputStyles.input}
                />
                {errors.name && touched.name && <Text style={InputStyles.error}>{errors.name}</Text>}
                <Button onPress={handleSubmit} title="Submit" />
            </View>
            )}
        </Formik>
    );
}
  
export default BusinessForm;