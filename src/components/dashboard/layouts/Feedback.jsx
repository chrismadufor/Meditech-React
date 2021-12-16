import React from 'react'
import styles from '../../styles/feedback.module.css'

function Feedback(props) {
    console.log('Comp mount')
    return (
        <div className = {styles.wrap}>
            <p class = {styles.text}>{props.text}</p>
        </div>
    )
}

export default Feedback
