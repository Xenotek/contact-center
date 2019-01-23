import axios from 'axios'
// export const URL_GROUPS = 'http://localhost:8080/api/glossary/groups'
export const URL_GROUPS = 'http://terms.loc'
// export const URL_GROUPS = 'http://178.214.47.132:220/api/glossary/groups'
export const URL_GROUP = 'http://localhost:8080/api/glossary/group'
// export const URL_CREATE_GROUP = 'http://178.214.47.132:220/api/glossary/group'

export const fetchGroups = () => {
    return axios.get(URL_GROUPS)
}

export const createGroup = (data) => {
    return axios.post(URL_GROUP, data)
}

export const updateGroup = (data) => {
    return axios.put(URL_GROUP, data)
}

export const deleteGroup = (data) => {
    return axios.delete(URL_GROUP, data)
}







