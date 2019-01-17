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

    return API.fetchGroups()
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