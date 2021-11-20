import * as React from 'react';
import { View } from 'react-native';
import {ContainerStyles} from '../Styles/AppStyles'

function Container({children}) {
    return (
        <View style={ContainerStyles.container}>
            {children}
        </View>
    );
  }
  
  export default Container;