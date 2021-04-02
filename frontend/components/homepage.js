import React, { useEffect } from 'react'
import fetchAccountDetails from '../utils/fetchAccountDetails'
import { LOAD_START, LOAD_SUCCESS, LOAD_FAILURE } from '../store'
import { useDispatch, useSelector } from 'react-redux'

export const HomePage = () => {
    const dispatch = useDispatch()
    const user = useSelector( state => state.user)

    useEffect(() => {
        dispatch({ type: LOAD_START })
            fetchAccountDetails(user)
            .then( res => {
                // debugger
                dispatch({ type: LOAD_SUCCESS, payload: res.data })
            })
            .catch( err => {
                dispatch({ type: LOAD_FAILURE, payload: err})
            })
    }, [dispatch])
    
    return (
        <div>
                <h1>
                    This is the homepage
                </h1>
        </div>
    )
}
 