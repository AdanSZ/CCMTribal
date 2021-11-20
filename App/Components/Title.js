import * as React from 'react';
import { StyleSheet, Text} from 'react-native';
  
function Title({children}) {
    return (
        <Text style={styles.title}>
            {children}
        </Text>
    );
  }
  
  const styles = StyleSheet.create({
    title: {
      fontSize:30,
      alignItems: 'center',
      paddingTop:10,
      alignSelf:'flex-start'
    }
  });
  
  export default Title;