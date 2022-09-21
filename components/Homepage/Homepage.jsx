import React from 'react'
import styles from "./Homepage.module.scss"
import Dialogdoctor from "../DialogBox/Dialogdoctor"
import Dialogpatient from  "../DialogBox/Dialogpatient"
import Dashboard from "../patient/Dashboard/Dashboard"
import { useWeb3 } from "@3rdweb/hooks"
import DoctorDashboard from '../Doctor/dashboard/dashboard'


const Homepage = () => {
  return (
    <div className={styles.homepage}>
   
    <div className={styles.Top_container}>
    <img className={styles.topbar} src="./images/TopBar.png"></img>
    <div className={styles.header}>
    <img className={styles.headerbar} src="./images/Headerbar.png"></img>
    <div className={styles.title}>
        <img className={styles.heart} src="./images/heart.png"></img>
        <div className={styles.head}>
          <h1>XDC-Health</h1> <p>PRIVACY & SECURITY </p>
        </div>
    </div>
    </div>
    </div>

    <div className={styles.started}>
    <div className={styles.getstarted}>GET STARTED
    </div>
    Continue as
    </div>

    <div className={styles.slide}>
    <div className={styles.slide1}>
    <img className={styles.person} src="./images/patient.png"></img>
    </div>

    <div className={styles.slide1}>
    <div className={styles.person} > <Dashboard /></div>
    </div>

    <div className={styles.slide1}>
    <div className={styles.person} > <DoctorDashboard /> </div>
    </div>
    
    </div>

  
</div>
  
  );
}

export default Homepage