import React, { useState } from 'react';
import { Text, View, FlatList, RefreshControl} from 'react-native';
import { Button } from 'react-native-elements'
import { useQuery } from "react-query";
import { getBusinessList } from '../../Service/BusinessService';
import Container from '../../Components/Container'
import ItemComponent from './Components/ItemComponent';

export default function ListBusiness({navigation}) {
  
  const [loading, setLoading] = useState(false)
  const { isLoading, error, data, isFetching, refetch } = useQuery("repoBusiness", () =>
      getBusinessList().then(res => res.data)
  );

  if (isLoading) return <Text>Loading...</Text> ;
  if (error) return <Text> "An error has occurred</Text>

  const renderBusiness = ({item, index}) => (
    <ItemComponent 
      key={index} 
      title={item.name} 
      id={item.businessId} 
      onPress={()=>navigation.navigate('Business',{name:item.name, id: item.businessId})} />
  );
  
  return (
    <Container>
      <View style={{flex:1}}>
        <FlatList
          data={data.businesses}
          renderItem={renderBusiness}
          keyExtractor={item => item.businessId }
          refreshControl={
            <RefreshControl
              refreshing={isFetching}
              onRefresh={refetch}
            />
          }
        />
      </View>
      <Button
        title="Create New Business"
        onPress={() => navigation.navigate('Add Business',{title:'Add Business'})}
      />
      <Text>{isFetching ? "Updating..." : ""}</Text>
    </Container>
  );
}