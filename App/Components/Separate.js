import React from 'react';
import { StyleSheet, View } from 'react-native';
  
function Separate() {
    return (
        <View style={styles.separate}></View>
    );
  }
  
  const styles = StyleSheet.create({
    separate: {
      height:20
    }
  });
  
  export default Separate;