import React from 'react'
import styles from '../../components/styles/modal.module.css'

function AuthModal(props) {
    const {text} = props
    return (
        <div className={styles.modal}>
            <div className={styles.logOutWrap}>
                <p>{text}</p>
                <i class="far fa-check-circle"></i>
            </div>
        </div>
    )
}

export default AuthModal
