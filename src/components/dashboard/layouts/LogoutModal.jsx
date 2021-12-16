import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { updateUserDetails, userLoggedIn } from '../../../theStore/actions'
import styles from '../../styles/modal.module.css'

function LogoutModal(props) {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const logout = () => {
        localStorage.removeItem('token')
        dispatch(updateUserDetails({}))
        dispatch(userLoggedIn(false))
        navigate('/signin')
    }
    return (
        <div className={ styles.modal}>
            <div className={ styles.logOutWrap}>
                <p>Are you sure you want to log out?</p>
                <div className={ styles.buttonWrap}>
                <button className={ styles.warning} onClick={logout}>Yes</button>
                <button className={ styles.blue} onClick={props.function}>No</button>
                </div>
            </div>
        </div>  
    )
}

export default LogoutModal
