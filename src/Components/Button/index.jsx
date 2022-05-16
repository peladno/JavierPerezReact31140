import React from 'react'
import styles from "./button.module.css"

function Button({children, type, onClick}) {
  return (
    <div>
      <button onClick={onClick} type={type} className={styles.learnMore}>
        <span className={styles.circle} aria-hidden="true">
        <span className={styles.icon+" "+ styles.arrow}></span>
        </span>
        <span className={styles.buttonText}>{children}</span>
      </button>
    </div>
  )
}

export default Button