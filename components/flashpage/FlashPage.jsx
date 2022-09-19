import React from 'react'
import styles from "./FlashPage.module.scss"
import { useState, useEffect } from 'react';
import Homepage from '../../components/Homepage/Homepage';




const FlashPage = () => {

  const [loading, setLoading] = useState(false);

useEffect(() => {
  setLoading(true);
  setTimeout(() => {
    setLoading(false);
  }, 3000);
}, []);

  return (
    <div className={styles.body}>
    { loading ? 
      <div className={styles.div}>
      <img className={styles.img} src="./images/heart-bg.png">
      </img>
      <img className={styles.img2} src="./images/xdc_heart.png"></img>
      </div>
     : 
      <Homepage />
    }
    </div>
  )
}

export default FlashPage