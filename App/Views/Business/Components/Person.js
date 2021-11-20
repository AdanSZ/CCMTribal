import React from 'react';
import {Text, View, VirtualizedList} from 'react-native'
import { Card, Icon, Image} from 'react-native-elements'
import Separate from '../../../Components/Separate';
import {ColorScheme, Styles, GeneralStyles} from '../../../Styles/AppStyles';

export default function Person(props) {
  return (
    <Card containerStyle={Styles.personsCardContainer}>
        
        <View style={[{flexDirection:'row', justifyContent:'space-between'}]}>
            <View style={[GeneralStyles.flexDirectionRow]}>
                <Text style={[Styles.title, Styles.primaryLabel]}>Name: </Text>
                <Text style={[Styles.title, Styles.primaryLabel]}>{props.name}</Text>
            </View>
            <View>
                <Icon
                    name='edit'
                    color='#00aced'
                    onPress={props.onPressEdit}
                />
            </View>
        </View>
        
        <View style={[GeneralStyles.flexDirectionRow]}>
            <View style={{width:'80%'}}>
                <View style={GeneralStyles.flexDirectionRow}>
                    <Text style={GeneralStyles.fontBold}>Position: </Text> 
                    <Text>{props.role}</Text>
                </View>

                <View style={GeneralStyles.flexDirectionRow}>
                    <Text style={GeneralStyles.fontBold}>Phone: </Text>
                    <Text>{props.phone}</Text>
                </View>
                
                <View style={GeneralStyles.flexDirectionRow}>
                    <Text style={GeneralStyles.fontBold}>Email: </Text>
                    <Text>{props.email}</Text>
                </View>
            </View>
            <View>
                <Image
                    style={{width:50, height:50, borderRadius:50}}
                    resizeMode="cover"
                    source={{ uri: 'https://i.pravatar.cc/300?key='+props.name }}
                />
            </View>
        </View>        
    </Card>
  );
}