import * as type from '../constants'
import * as API from '../api'


export const openModal = (obj) => ({
    type: type.OPEN_MODAL,
    obj,
})
export const closeModal = (obj) => ({
    type: type.CLOSE_MODAL,
    obj,
})


//Получение списка групп терминов

const fetchGroupsRequest = () => ({
    type: type.FETCH_GROUPS_REQUEST
})

const fetchGroupsSuccess = ({data}) => ({
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
            if (res.status === 200) {
                dispatch(fetchGroupsSuccess(res))
            } else {
                throw new Error(res.statusText)
            }
        })
        .catch(err => dispatch(fetchGroupsFailure(err)))

}

//Создание группы терминов

const createGroupRequest = () => ({
    type: type.CREATE_GROUP_REQUEST
})

const createGroupSuccess = ({data}) => ({
    type: type.CREATE_GROUP_SUCCESS
})

const createGroupFailure = (err) => ({
    type: type.CREATE_GROUP_FAILURE,
    err
})

export const createGroup = (data) => dispatch => {
    dispatch(createGroupRequest())

    API.createGroup(data)
        .then(res => {
            if (res.status === 200) {
                dispatch(createGroupSuccess(res))
                dispatch(fetchGroups())
            } else {
                throw new Error(res.statusText)
            }
        })
        .catch(err => dispatch(createGroupFailure(err)))

}


//Обновление группы терминов

const updateGroupRequest = () => ({
    type: type.UPDATE_GROUP_REQUEST
})

const updateGroupSuccess = () => ({
    type: type.UPDATE_GROUP_SUCCESS
})

const updateGroupFailure = (err) => ({
    type: type.UPDATE_GROUP_FAILURE,
    err
})

export const updateGroup = (data) => dispatch => {
    dispatch(updateGroupRequest())

    API.updateGroup(data)
        .then(res => {
            if (res.status === 200) {
                dispatch(updateGroupSuccess(res))
                dispatch(fetchGroups())
            } else {
                throw new Error(res.statusText)
            }
        })
        .catch(err => dispatch(updateGroupFailure(err)))

}


//Удаление группы терминов

const deleteGroupRequest = () => ({
    type: type.DELETE_GROUP_REQUEST
})

const deleteGroupSuccess = () => ({
    type: type.DELETE_GROUP_SUCCESS
})

const deleteGroupFailure = (err) => ({
    type: type.DELETE_GROUP_FAILURE,
    err
})

export const deleteGroup = (data) => dispatch => {
    dispatch(deleteGroupRequest())

    API.deleteGroup(data)
        .then(res => {
            if (res.status === 200) {
                dispatch(deleteGroupSuccess(res))
                dispatch(fetchGroups())
            } else {
                throw new Error(res.statusText)
            }
        })
        .catch(err => dispatch(deleteGroupFailure(err)))

}