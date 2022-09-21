import { useState } from "react";
import Sidebar from "../../sidebar"
import Table from "../comps/table";
import Tabs from "../comps/tab";
import { dashboardTabs, links } from "../config"
import { useWeb3 } from "@3rdweb/hooks"

export default function DoctorDashboard() {
    let today = new Date();
    const [currentTab, setCurrentTab] = useState("Upcoming Applications")

    const handleTabClick = (value) => {
        console.log(value)
        if (value != currentTab) setCurrentTab(value)
    }

    const { address, connectWallet } = useWeb3()

    return (
        
        <>
        {address ? (
        <div className="flex w-screen">
            <Sidebar links={links} page="Dashboard" />
            <div className="flex-grow h-screen flex justify-center flex-col p-6">
                <div className="">
                    <h1 className="mt-6 text-4xl">Welcome, Doctor</h1>
                    <h3>Today is {today.toDateString()} </h3>
                </div>
                <div className="py-3">
                    <Tabs onClick={handleTabClick} tabs={dashboardTabs} current={currentTab} />
                </div>
                <div>
                    <Table />
                </div>
            </div>
        </div>
        ) : (
            <div onClick= {() => connectWallet('injected')}><img className="person" src="./images/Doctor1.png"></img></div>
        )}
        </>
    )
}