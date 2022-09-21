import React from 'react'
import Sidebar from '../../sidebar'
import styles from "./patientdetails.module.scss"

const Patientdetails = () => {
  return (
    <div className={styles.body}>
    <div className={styles.sidebar}>
    <Sidebar  />
    </div>
    <div className={styles.main}>
    <div className={styles.userdetails}>
    <h2>Patient Details</h2>
    
    <div className={styles.details}>
    <img className={styles.img} src="./images/patient.png"></img>
    <div className={styles.sub}>
        <div className={styles.detail}>Name</div>
        <div className={styles.detail1}><span>Rahul</span></div>
    </div>
    <div className={styles.sub}>
        <div className={styles.detail}>Age</div>
        <div className={styles.detail1}><span>16</span></div>
    </div>
    <div className={styles.sub}>
        <div className={styles.detail}>Sex</div>
        <div className={styles.detail1}><span>Male</span></div>
    </div>
    <div className={styles.sub}>
        <div className={styles.detail}>Blood Group</div>
        <div className={styles.detail1}><span>A+ve</span></div>
    </div>
    <div className={styles.sub}>
        <div className={styles.detail}>Height</div>
        <div className={styles.detail1}><span>171cm</span></div>
    </div>
    <div className={styles.sub}>
        <div className={styles.detail}>weight</div>
        <div className={styles.detail1}><span>70kg</span></div>
    </div>
    <div className={styles.sub}>
        <div className={styles.detail}>Ph Number</div>
        <div className={styles.detail1}><span>92822883300</span></div>
    </div>
    <div className={styles.sub}>
        <div className={styles.detail}>Emergency </div>
        <div className={styles.detail1}><span>94344382493</span></div>
    </div>
    <div className={styles.sub}>
        <div className={styles.detail}>Address</div>
        <div className={styles.detail1}><span>No: 7, TNHB</span></div>
    </div>
    <div className={styles.sub}>
        <div className={styles.detail}>place</div>
        <div className={styles.detail1}><span>Mogapppair</span></div>
    </div>
    <div className={styles.sub}>
        <div className={styles.detail}>city</div>
        <div className={styles.detail1}><span>Chennai</span></div>
    </div>
    </div>
    </div>


    <div className={styles.vital}>
    <div className={styles.vital1}>
    <h2>Vital stats Record</h2>
    <div className={styles.meddetails}>
    </div>
    </div>

    <div className={styles.vital1}>
    <h2>Current Medication</h2>
    <div className={styles.meddetails}>
    </div>
    </div>
    </div>

    
    </div>
    </div>
  )
}

export default Patientdetails