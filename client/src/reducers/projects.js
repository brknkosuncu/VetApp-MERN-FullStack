import {FETCH_ALL, CREATE, UPDATE, DELETE, FETCH_SINGLE, COMMENT } from '../constants/actionTypes';

// eslint-disable-next-line import/no-anonymous-default-export
export default (projects = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
        case FETCH_SINGLE:
            return {...projects, project: action.payload};
        case CREATE:
            return [...projects, action.payload];
        case UPDATE:
            return projects.map((project) => project._id === action.payload._id ? action.payload : project);
        case COMMENT:
            return projects?.map((project) => project._id === action.payload._id ? action.payload : project);
        case DELETE:
            return projects.filter((project) => project._id !== action.payload);    
        default:
            return projects;
    }
};