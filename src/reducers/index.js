import { combineReducers } from 'redux'
import * as type from '../constants'

const fetchGroups = (state = {isLoading: false, groups: []}, action) => {
    switch (action.type) {
        case type.FETCH_GROUPS_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case type.FETCH_GROUPS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                groups: action.items,
            }
        case type.FETCH_GROUPS_FAILURE:
            return {
                ...state,
                err: action.err,
                isFetching: false
            }
        default:
            return state;
    }
}

const createGroup = (state = {isLoading: false, groups: []}, action) => {
    switch (action.type) {
        case type.CREATE_GROUP_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case type.CREATE_GROUP_SUCCESS:
            return {
                ...state,
                isFetching: false,
                groups: action.items,
            }
        case type.CREATE_GROUP_FAILURE:
            return {
                ...state,
                err: action.err,
                isFetching: false
            }
        default:
            return state;
    }
}

export default combineReducers({
    fetchGroups,
    createGroup
})