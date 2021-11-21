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

/**
* save business service
* @param {object} data
* @returns {Promise}
*/
export function saveBusiness(data){
    return AxiosInstance.post(url,data)
}

/**
* edit business service
* @param {number} businessid
* @param {object} data
* @returns {Promise}
*/
export function editBusinessName(businessid, data){
    return AxiosInstance.put(`${url}/${businessid}`,data)
}

/**
* delete business service
* @param {number} businessid
* @returns {Promise}
*/
export function deleteBusiness(businessid){
    return AxiosInstance.delete(`${url}/${businessid}`)
}

/**
* get all business list
* @returns {Promise}
*/
export function getBusinessList(){
    return AxiosInstance.get(url)
}

/**
* get a business by id
* @param {number} businessid
* @returns {Promise}
*/
export function getBusinessById(businessid){
    return AxiosInstance.get(`${url}/${businessid}`)
}

/**
* get the people who belong to a business
* @param {number} businessid
* @returns {Promise}
*/
export function getBusinessPersonsById(businessid){
    return AxiosInstance.get(`${url}/${businessid}/persons`)
}

/**
* add a person to a business
* @param {number} businessid
* @param {object} data
* @returns {Promise}
*/
export function saveBusinessPerson(businessid, data){
    return AxiosInstance.post(`${url}/${businessid}/persons`, data)
}

/**
* remove a person from a business
* @param {number} businessid
* @param {number} personId
* @returns {Promise}
*/
export function deleteBusinessPerson(businessid, personId){
    return AxiosInstance.delete(`${url}/${businessid}/persons/${personId}`)
}

/**
* edit a person from a business
* @param {number} businessid
* @param {number} personId
* @param {object} data
* @returns {Promise}
*/
export function editBusinessPerson(businessid, personId, data){
    return AxiosInstance.put(`${url}/${businessid}/persons/${personId}`, data)
}