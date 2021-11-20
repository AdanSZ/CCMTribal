import React, { useState, useEffect } from 'react';
import { ScrollView, Text } from 'react-native';
import Container from '../../Components/Container'
import { getBusinessPersonsById } from '../../Service/BusinessService';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { useQuery } from "react-query";
import Person from './Components/Person';
import Title from '../../Components/Title'
import Separate from '../../Components/Separate'

export default function Business({route, navigation}) {
    const { name, id } = route.params;
    const [persons, setPersons] = useState([])

    const { isLoading, error, data, isFetching, refetch} = useQuery("repoBusinessPersons", () =>
      getBusinessPersonsById(id).then(res => res.data)
    );

    useEffect(() => {
      navigation.setOptions({
        headerRight: () => (
          <Icon name='edit' color='#00aced' onPress={()=>navigation.navigate('Add Business', {name, id, title:"Edit Business"})}/>
        ),
      });
    }, [navigation])

    if (isLoading) return <Text>Loading...</Text> ;
    if (error) return <Text> "An error has occurred</Text>
    
    const refresh = () => {
      refetch()
    }

  return (
    <Container>
        <Title>Persons</Title>
        <ScrollView>
        {
          data.persons.map((item, idx)=>
            <Person 
              key={idx}
              name={item.name}
              role={item.role}
              email={item.email}
              phone={item.phone}
              onPressEdit={()=>navigation.navigate('AddPersons', {name: name, businessId:id, formData: item, handleBack:refresh})}
            />
          )
        }
        </ScrollView>
        <Separate /> 
        <Button
        title="Add Person"
        onPress={()=>navigation.navigate('AddPersons',{name: name, businessId:id, handleBack:refresh})}
      />
      <Text>{isFetching ? "Updating..." : ""}</Text>
    </Container>
  );
}

  