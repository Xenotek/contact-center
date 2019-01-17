import * as type from '../constants'
import * as API from '../api'

const fetchGroupsRequest = () => ({
    type: type.FETCH_GROUPS_REQUEST
})

const fetchGroupsSuccess = ({ data }) => ({
    type: type.FETCH_GROUPS_SUCCESS,
    items: data
})

const fetchGroupsFailure = (err) => ({
    type: type.FETCH_GROUPS_FAILURE,
    err
})

export const fetchGroups = () => dispatch => {
    dispatch(fetchGroupsRequest())

    API.fetchGroups()
        .then(res => {
            // console.log('res', res)
            if(res.status === 200){
                dispatch(fetchGroupsSuccess(res))
            }else {
                throw new Error(res.statusText)
            }
        })
        .catch(err => dispatch(fetchGroupsFailure(err)))

}


const createGroupRequest = () => ({
    type: type.CREATE_GROUP_REQUEST
})

const createGroupSuccess = ({ data }) => ({
    type: type.CREATE_GROUP_SUCCESS,
    items: data
})

const createGroupFailure = (err) => ({
    type: type.CREATE_GROUP_FAILURE,
    err
})

export const createGroup = (data) => dispatch => {
    dispatch(createGroupRequest())

    API.createGroup(data)
        .then(res => {
            // console.log('res', res)
            if(res.status === 200){
                dispatch(createGroupSuccess(res))
            }else {
                throw new Error(res.statusText)
            }
        })
        .catch(err => dispatch(createGroupFailure(err)))

}