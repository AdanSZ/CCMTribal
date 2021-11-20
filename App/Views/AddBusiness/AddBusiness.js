import React, { useEffect } from 'react'
import { editBusinessName, deleteBusiness, saveBusiness } from '../../Service/BusinessService'
import Container from '../../Components/Container'
import BusinessForm from '../../Forms/BusinessForm'
import { Icon } from 'react-native-elements'
import {AlertOkCancel} from '../../Components/Alert'

export default function AddBusiness({route, navigation}) {
  const { name, id } = route.params;

  useEffect(() => {
    if(id){
      navigation.setOptions({
        headerRight: () => (
          <Icon name='delete' color='red' onPress={onDeleteBusiness}/>
        ),
      });
    }
  })
 
  const onDeleteBusiness = () =>{
    AlertOkCancel("Want to delete this Business?",()=>deleteBusiness(id).then(res=>{
      alert('Business deleted')
      navigation.popToTop()
    }))
  }

  const editBusiness = (data) =>{
    editBusinessName(id, data)
    .then(res => {
      alert('Business name edited')
      navigation.popToTop()
    })
  }

  const createBusiness = (data) =>{
    saveBusiness(data).then(res=>{
      alert('Business saved')
      navigation.popToTop()
    })
  }

  return (
    <Container>
        <BusinessForm 
          name={name}
          onPress={(data)=>{
            if(id){
              editBusiness(data)
            }else{
              createBusiness(data)
            }
            
          }}
        />
    </Container>
  );
}
