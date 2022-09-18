import React from 'react'

import styles from "./Dashboard.module.scss"


const Dashboard = () => {
  return (
        <div className={styles.Body}>
            <div className={styles.sidebar}>
                   <div className={styles.head}> Dashboard </div>
                   <div className={styles.home}>Home</div>
                   <div className={styles.dash}>Daskboard <img src="/logos/Category.png"></img></div>
                   <div className={styles.home}>profile</div>
            </div>

            <div className={styles.container}>
            <div className={styles.header}><div className={styles.hello}>Hello Rahul</div>
            <div className={styles.welcome}>Welcome Back!</div></div>

            <div className={styles.maindiv}>
                
            
           

           

           
        
        </div>
        </div>
        </div>
    )
}

export default Dashboard