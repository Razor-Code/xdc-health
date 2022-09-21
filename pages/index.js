import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useWeb3 } from "@3rdweb/hooks"
import Dashboard from '../components/patient/Dashboard/Dashboard'
import FlashPage from '../components/flashpage/FlashPage'
import Dialog from '../components/DialogBox/Dialogdoctor'
import Patientdetails from '../components/patient/Patientdetails/Patientdetails'
import Homepage from '../components/Homepage/Homepage'
import DoctorDashboard from '../components/Doctor/dashboard/dashboard'

export default function Home() {
  const { address, connectWallet } = useWeb3()
  return (
    <div>
    
     <DoctorDashboard />
    </div>
  )
}
