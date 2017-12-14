import { CALL_API } from 'redux-api-middleware'
import { push } from 'react-router-redux'
import { USERS_ENDPOINT } from '../constants/endpoints'
import {
  LOAD_USERS_REQUEST,
  LOAD_USERS_SUCCESS,
  LOAD_USERS_FAILURE,

  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAILURE,

  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILURE,

  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE,

  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE

} from '../constants/actionTypes'

export const loadUsers = () => ({
  [CALL_API]: {
    endpoint: USERS_ENDPOINT,
    method: 'GET',
    types: [LOAD_USERS_REQUEST, LOAD_USERS_SUCCESS, LOAD_USERS_FAILURE]
  }
})

export const loadUser = (id) => ({
  [CALL_API]: {
    endpoint: `${USERS_ENDPOINT}/${id}`,
    method: 'GET',
    types: [LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAILURE]
  }
})

export const createUser = (values) => (
  (dispatch) =>
    dispatch({
      [CALL_API]: {
        endpoint: USERS_ENDPOINT,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(values),
        types: [
          CREATE_USER_REQUEST,
          {
            type: CREATE_USER_SUCCESS,
            payload: (_action, _state, res) => {
              return res.json().then((user) => {
                dispatch(push(`/users/${user.id}`))
                return user
              })
            }
          },
          CREATE_USER_FAILURE
        ]
      }
    }
  )

)

export const deleteUser = (id) => (
  (dispatch) =>
    dispatch({
  [CALL_API]: {
    endpoint: `${USERS_ENDPOINT}/${id}`,
    method: 'DELETE',
    types: [DELETE_USER_REQUEST,
      {
        type:DELETE_USER_SUCCESS,
        payload:dispatch(push(`/home`))
      },
      DELETE_USER_FAILURE]
  }
})
)

export const updateUser = (values) => (
  (dispatch) =>
    dispatch({
      [CALL_API]: {
        endpoint: `${USERS_ENDPOINT}/${values.id}`,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'PATCH',
        body: JSON.stringify(values),
        types: [
          UPDATE_USER_REQUEST,
          {
            type: UPDATE_USER_SUCCESS,
            payload: (_action, _state, res) => {
              return res.json().then((user) => {
                dispatch(push(`/users`))
                return user
              })
            }
          },
          UPDATE_USER_FAILURE
        ]
      }
    }
  )

)
