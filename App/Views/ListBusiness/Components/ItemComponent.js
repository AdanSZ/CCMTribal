import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'


export default function ItemComponent(props) {
  return (
    <TouchableOpacity style={styles.item} onPress={props.onPress} >
        <Card>
        <ListItem style={{widt:400}} containerStyle={{width:300}}>
            <Icon
            name='work'
            color='#00aced' />
            <ListItem.Content>
            <ListItem.Title>{props.title}</ListItem.Title>
            </ListItem.Content>
        </ListItem>
        </Card>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({

  });
  