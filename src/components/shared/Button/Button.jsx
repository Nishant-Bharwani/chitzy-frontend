import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.css';

const Button = (props) => {
    return (
        <Link className={`${styles.btnLink} ms-2`} onClick={props.onClick}>
            <span className={`${styles.shape}`}>

            </span>
            <span className={`d-flex align-items-center justify-content-center ${styles.btnLink}`}>
                {props.text}
            </span>
        </Link>
    )
}

export default Button;