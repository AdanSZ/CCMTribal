import axios from 'axios';

const url = "https://us4b9c5vv0.execute-api.us-east-1.amazonaws.com/prod/business"
const apiKey = "AoIvywHZCr94Xt4LTtO36qn8MZoz3jV4ny6k3ru9"

const AxiosInstance = axios.create({
    timeout: 20000,
    headers: {
        'x-api-key': apiKey
    }
})

AxiosInstance.interceptors.response.use((response) =>{
    return response;
}, (error) => {
    alert('An error occurred')
    return false
})

export function saveBusiness(data){
    return AxiosInstance.post(url,data)
}

export function editBusinessName(businessid, data){
    return AxiosInstance.put(`${url}/${businessid}`,data)
}

export function deleteBusiness(businessid){
    return AxiosInstance.delete(`${url}/${businessid}`)
}

export function getBusinessList(){
    return AxiosInstance.get(url)
}

export function getBusinessById(businessid){
    return AxiosInstance.get(`${url}/${businessid}`)
}

export function getBusinessPersonsById(businessid){
    return AxiosInstance.get(`${url}/${businessid}/persons`)
}

export function saveBusinessPerson(businessid, data){
    return AxiosInstance.post(`${url}/${businessid}/persons`, data)
}

export function deleteBusinessPerson(businessid, personId){
    return AxiosInstance.delete(`${url}/${businessid}/persons/${personId}`)
}

export function editBusinessPerson(businessid, personId, data){
    return AxiosInstance.put(`${url}/${businessid}/persons/${personId}`, data)
}