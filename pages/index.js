import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useWeb3 } from "@3rdweb/hooks"


export default function Home() {
  const { address, connectWallet } = useWeb3()
  return (
    <div>
    {address ? (
      <>
     <h1>hello</h1>
     </>
     ) : (
        <div onClick= {() => connectWallet('injected')}><h1>connect</h1></div>
     )}
    </div>
  )
}
