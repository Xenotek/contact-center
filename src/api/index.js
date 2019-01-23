import axios from 'axios'
// export const URL_GROUPS = 'http://localhost:8080/api/glossary/groups'
export const URL_GROUPS = 'http://terms.loc'
// export const URL_GROUPS = 'http://178.214.47.132:220/api/glossary/groups'
export const URL_CREATE_GROUP = 'http://localhost:8080/api/glossary/group'
// export const URL_CREATE_GROUP = 'http://178.214.47.132:220/api/glossary/group'

export const fetchGroups = () => {
    return axios.get(URL_GROUPS)
}

export const createGroup = (data) => {
    // console.log('fetch',data);
    return axios.post(URL_CREATE_GROUP, data)

    // return fetch(URL_CREATE_GROUP, {
    //     method: 'post',
    //     headers: {
    //         'Accept': 'application/json, text/plain, */*',
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(data)
    // }).then(res=>res.json())
}







