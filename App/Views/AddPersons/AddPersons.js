import React from 'react';
import { Text } from 'react-native';
import Container from '../../Components/Container';
import PersonForm from '../../Forms/PersonForm';
import {saveBusinessPerson, deleteBusinessPerson, editBusinessPerson} from '../../Service/BusinessService';
import { Icon } from 'react-native-elements'
import {AlertOkCancel} from '../../Components/Alert'

function AddPersons({route, navigation}) {
    const { name, businessId, formData } = route.params;   
    
    const goBack = () =>{
        route.params.handleBack()
        navigation.goBack()
    }
    const savePerson = async (data) =>{
        if(!formData){
            if(await saveBusinessPerson(businessId, data)){
                alert('Person saved')
                goBack()
            }
        }else{
            if(await editBusinessPerson(businessId, formData.personId, data)){
                alert("Person edited")
                goBack()
            }
        }
    }

    const deletePerson = () =>{
        AlertOkCancel("Want to delete this person?",async ()=>{
            if(await deleteBusinessPerson(businessId, formData.personId)){
                alert('Person deleted')
                goBack()
            }
        })        
    }

    return (
        <Container> 
            {
                formData && <Icon name='delete' color='red' containerStyle={{alignSelf:"flex-end"}} onPress={deletePerson}/>
            }
            <Text>{name}</Text>
           <PersonForm 
                onPress={(formData=>savePerson(formData))}
                formData={formData ? formData : null}
           />
        </Container>
    );
}
export default AddPersons;