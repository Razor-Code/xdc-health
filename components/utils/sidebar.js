import Link from "next/link"

function SidebarLinks(props) {
    return (
        <div>
            <Link href={props.link}>
                <div className={"flex flex-col items-center w-20 py-1" + (props.isCurrent ? " bg-[#C9ECEA]" : "")}>
                    <img src={props.icon} alt="" className="w-12 h-12" />
                    <p className="text-xs text-white">{props.name}</p>
                </div>
            </Link>
        </div>
    )
}

function Sidebar(props) {
    return (
        <div className="h-screen w-20 bg-primary flex flex-col items-center">
            <SidebarLinks link="/dashboard" icon="/imgs/dashboard.png" name="dashboard" isCurrent={props.page == "dashboard" ? true : false} />
            <SidebarLinks link="/appointment" icon="/imgs/appointment.png" name="appointment" isCurrent={props.page == "appointment" ? true : false} />
            <SidebarLinks link="/user-profile" icon="/imgs/profile.png" name="profile" isCurrent={props.page == "profile" ? true : false} />
            <SidebarLinks link="/documents" icon="/imgs/document.png" name="documents" isCurrent={props.page == "documents" ? true : false} />
        </div>
    )
}

export default Sidebar