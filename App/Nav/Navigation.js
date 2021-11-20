import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddBusiness from '../Views/AddBusiness/AddBusiness';
import ListBusiness from '../Views/ListBusiness/ListBusiness';
import Business from '../Views/Business/Business';
import AddPersons from '../Views/AddPersons/AddPersons';

const Stack = createNativeStackNavigator();

const headerStyle = {
    backgroundColor: '#f7f7f7',
}
function Navigation() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Business List" component={ListBusiness} options={{headerStyle}}/>
          <Stack.Screen name="Add Business" component={AddBusiness} options={({ route }) => ({ title: route.params.title, headerStyle})}/>
          <Stack.Screen name="Business" component={Business} options={({ route }) => ({ title: route.params.name, headerStyle })} />
          <Stack.Screen name="AddPersons" component={AddPersons} options={ {title: "Add Persons", headerStyle} } />
        </Stack.Navigator> 
      </NavigationContainer>
    );
  }

  export default Navigation;