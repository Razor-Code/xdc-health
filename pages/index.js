import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useWeb3 } from "@3rdweb/hooks"
import Dashboard from '../components/patient/Dashboard/Dashboard'
import FlashPage from '../components/flashpage/FlashPage'
import Dialog from '../components/DialogBox/Dialog'

export default function Home() {
  const { address, connectWallet } = useWeb3()
  return (
    <div>
    {address ? (
      <>
     <h1><Dialog /></h1>
     </>
     ) : (
        <div onClick= {() => connectWallet('injected')}><h1 className='bg-gray-200 p-10 px-20 rounded-xl text-black max-w-[400px]'>connect</h1></div>
     )}
    </div>
  )
}
