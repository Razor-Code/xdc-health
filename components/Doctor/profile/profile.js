import Sidebar from "../../sidebar"
import { links } from "../config"

export default function DoctorProfile() {
    return (
        <div className="flex">
            <Sidebar links={links} page="Profile" />
            <div className="flex-grow h-screen">
                Hello, World!
            </div>
        </div>
    )
}