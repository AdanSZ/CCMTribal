import React from 'react';
import { View, Text} from 'react-native';
import { Formik } from 'formik';
import { Input, Button } from 'react-native-elements'
import {InputStyles} from '../Styles/AppStyles'
import * as Yup from 'yup';

function PersonForm(props) {
    const currentDate = new Date()
    let initialValues =  { name: '', role: '', email: '', phone: '', join_date: currentDate.toString() }    
    if(props.formData){
        initialValues = props.formData
    }

    const validationSchema = Yup.object().shape({
        name: Yup.string()
          .min(2, 'Too Short!')
          .max(50, 'Too Long!')
          .required('Required'),
        role: Yup.string()
          .min(2, 'Too Short!')
          .max(50, 'Too Long!')
          .required('Required'),
        phone: Yup.string()
          .min(6, 'Too Short!')
          .max(10, 'Too Long!')
          .required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
      });

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={values => {
                const data = {
                    "email": values.email,
                    "name": values.name,
                    "phone": values.phone,
                    "role": values.role,
                    "join_date": values.join_date
                }
                props.onPress(data)
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

                <Input
                    placeholder='Role'
                    onChangeText={handleChange('role')}
                    onBlur={handleBlur('role')}
                    value={values.role}
                    containerStyle={InputStyles.input}
                />
                {errors.role && touched.role && <Text style={InputStyles.error}>{errors.role}</Text>}

                <Input
                    placeholder='Email'
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    containerStyle={InputStyles.input}
                    keyboardType="email-address"
                />
                {errors.email && touched.email && <Text style={InputStyles.error}>{errors.email}</Text>}

                <Input
                    placeholder='Phone'
                    onChangeText={handleChange('phone')}
                    onBlur={handleBlur('phone')}
                    value={values.phone}
                    containerStyle={InputStyles.input}
                    keyboardType='numeric'
                />
                {errors.phone && <Text style={InputStyles.error}>{errors.phone}</Text>}

                <Input
                    placeholder='Join Date'
                    onChangeText={handleChange('join_date')}
                    onBlur={handleBlur('join_date')}
                    value={values.join_date}
                    containerStyle={InputStyles.input}
                    disabled
                />
                <Button onPress={handleSubmit} title="Submit" />
            </View>
            )}
        </Formik>
    );
}

export default PersonForm;