import axios from 'axios'
export const URL_GROUPS = 'http://localhost:8080/api/glossary/groups'

export const fetchGroups = () => {
    return axios.get(URL_GROUPS)
}







