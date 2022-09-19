import React from 'react'

import styles from "./Dashboard.module.scss"


const Dashboard = () => {
  return (
        <div className={styles.Body}>
            <div className={styles.sidebar}>
                   <div className={styles.head}> Dashboard </div>
                   <div className={styles.home}> Record </div>
                   <div className={styles.dash}> Appointments<img src="./icons/Category.png"></img></div>
                   <div className={styles.home}>profile</div>
            </div>

            <div className={styles.container}>
            <div className={styles.header}><div className={styles.hello}>Hello Rahul</div>
            <div className={styles.welcome}>Welcome Back!</div></div>

            <div className={styles.maindiv}>
                
            <div className={styles.userdetails}>
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
            </div>

            <div className={styles.userdiv}>
              <h2 className={styles.h2}>Records</h2>
              
            
            <div className={styles.list}>
                <div className={styles.userList}> 
                    <div className={styles.sNo}>
                        <div className={styles.date}>Date</div>
                        <div className={styles.date1}><span>22 Aug 2022</span></div>
                    </div>
                    <div className={styles.Notes}>
                        <div className={styles.date}>Notes</div>
                        <div className={styles.date1}><span>#routine #vaccination</span></div>
                    </div>
                    <div className={styles.medication}>
                        <div className={styles.date}><span>Medication</span></div>
                        <div className={styles.date1}><span>none</span></div>
                    </div>
                    <div className={styles.weight}>
                        <div className={styles.date}><span>weight</span></div>
                        <div className={styles.date1}><span>120lbs</span></div>
                    </div>
                </div>

                <div className={styles.userList}> 
                    <div className={styles.sNo}>
                        <div className={styles.date}>Date</div>
                        <div className={styles.date1}><span>22 Aug 2022</span></div>
                    </div>
                    <div className={styles.Notes}>
                        <div className={styles.date}>Notes</div>
                        <div className={styles.date1}><span>#routine #vaccination</span></div>
                    </div>
                    <div className={styles.medication}>
                        <div className={styles.date}><span>Medication</span></div>
                        <div className={styles.date1}><span>none</span></div>
                    </div>
                    <div className={styles.weight}>
                        <div className={styles.date}><span>weight</span></div>
                        <div className={styles.date1}><span>120lbs</span></div>
                    </div>
                </div>

                <div className={styles.userList}> 
                <div className={styles.sNo}>
                    <div className={styles.date}>Date</div>
                    <div className={styles.date1}><span>22 Aug 2022</span></div>
                </div>
                <div className={styles.Notes}>
                    <div className={styles.date}>Notes</div>
                    <div className={styles.date1}><span>#routine #vaccination</span></div>
                </div>
                <div className={styles.medication}>
                    <div className={styles.date}><span>Medication</span></div>
                    <div className={styles.date1}><span>none</span></div>
                </div>
                <div className={styles.weight}>
                    <div className={styles.date}><span>weight</span></div>
                    <div className={styles.date1}><span>120lbs</span></div>
                </div>
            </div>

            <div className={styles.userList}> 
            <div className={styles.sNo}>
                <div className={styles.date}>Date</div>
                <div className={styles.date1}><span>22 Aug 2022</span></div>
            </div>
            <div className={styles.Notes}>
                <div className={styles.date}>Notes</div>
                <div className={styles.date1}><span>#routine #vaccination</span></div>
            </div>
            <div className={styles.medication}>
                <div className={styles.date}><span>Medication</span></div>
                <div className={styles.date1}><span>none</span></div>
            </div>
            <div className={styles.weight}>
                <div className={styles.date}><span>weight</span></div>
                <div className={styles.date1}><span>120lbs</span></div>
            </div>
        </div>

         <div className={styles.userList}> 
                    <div className={styles.sNo}>
                        <div className={styles.date}>Date</div>
                        <div className={styles.date1}><span>22 Aug 2022</span></div>
                    </div>
                    <div className={styles.Notes}>
                        <div className={styles.date}>Notes</div>
                        <div className={styles.date1}><span>#routine #vaccination</span></div>
                    </div>
                    <div className={styles.medication}>
                        <div className={styles.date}><span>Medication</span></div>
                        <div className={styles.date1}><span>none</span></div>
                    </div>
                    <div className={styles.weight}>
                        <div className={styles.date}><span>weight</span></div>
                        <div className={styles.date1}><span>120lbs</span></div>
                    </div>
                </div>
            </div>
            </div>
           

           

           
        </div>
        </div>
        </div>
        
    )
}

export default Dashboard