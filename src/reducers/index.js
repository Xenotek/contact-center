import { combineReducers } from 'redux'
import * as type from '../constants'

function modals(state = { modals: []}, action) {
    switch (action.type) {
        case type.OPEN_MODAL:
            return {
                ...state,
                modals: state.modals.concat(action.obj)
            };
        case type.CLOSE_MODAL:
            return {
                ...state,
                modals: state.modals.filter(item => item.id !== action.obj.id),
            };
        default:
            return state;
    }
}


const fetchGroups = (state = {isFetching: false, groups: []}, action) => {
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

const createGroup = (state = {isFetching: false}, action) => {
    switch (action.type) {
        case type.CREATE_GROUP_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case type.CREATE_GROUP_SUCCESS:
            return {
                ...state,
                isFetching: false
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

const updateGroup = (state = {isFetching: false}, action) => {
    switch (action.type) {
        case type.UPDATE_GROUP_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case type.UPDATE_GROUP_SUCCESS:
            return {
                ...state,
                isFetching: false
            }
        case type.UPDATE_GROUP_FAILURE:
            return {
                ...state,
                err: action.err,
                isFetching: false
            }
        default:
            return state;
    }
}

const deleteGroup = (state = {isFetching: false}, action) => {
    switch (action.type) {
        case type.DELETE_GROUP_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case type.DELETE_GROUP_SUCCESS:
            return {
                ...state,
                isFetching: false
            }
        case type.DELETE_GROUP_FAILURE:
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
    createGroup,
    updateGroup,
    deleteGroup,
    modals
})