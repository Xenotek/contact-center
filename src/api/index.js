import axios from 'axios'
export const URL_GROUPS = 'http://localhost:8080/api/glossary/groups'
export const URL_CREATE_GROUP = 'http://localhost:8080/api/glossary/group'

export const fetchGroups = () => {
    return axios.get(URL_GROUPS)
}

export const createGroup = (data) => {
    return axios.post(URL_CREATE_GROUP, data)
}







