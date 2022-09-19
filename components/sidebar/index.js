export default function Sidebar() {
  return (
    <div className="flex flex-col w-64 h-screen px-4 py-8 absolute top-0 left-0 bg-green-400 border-r dark:bg-gray-200 dark:border-gray-100">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-black">XDC Health</h2>

        <div className="relative mt-6">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                    <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
            </span>

            <input type="text" className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-200 dark:text-gray-300 dark:border-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring" placeholder="Search" />
        </div>

        <div className="flex flex-col justify-between flex-1 mt-6">
            <nav>
                <a className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-md dark:bg-gray-100 dark:text-gray-800" href="#">
                    <img className="object-cover h-7 w-7 drop-shadow-sm" src="/assets/dashboard.png" alt="avatar" />

                    <span className="mx-2 font-medium">Dashboard</span>
                </a>

                <a className="flex items-center px-4 py-2 mt-5 text-gray-800 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                    <img className="object-cover h-7 w-7 drop-shadow-sm" src="/assets/profile.png" alt="avatar" />


                    <span className="mx-2 font-medium">Profile</span>
                </a>

                <a className="flex items-center px-4 py-2 mt-5 text-gray-800 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                    <img className="object-cover h-7 w-7 drop-shadow-sm" src="/assets/appointment.png" alt="avatar" />

                    <span className="mx-2 font-medium">Appointments</span>
                </a>

                <a className="flex items-center px-4 py-2 mt-5 text-gray-800 transition-colors duration-300 transform rounded-md dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                    <img className="object-cover h-7 w-7 drop-shadow-sm" src="/assets/document.png" alt="avatar" />

                    <span className="mx-2 font-medium">Documents</span>
                </a>

                </nav>

            <div className="flex items-center px-4 -mx-2">
                <img className="object-cover mx-2 rounded-full h-9 w-9" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="avatar" />
                <h4 className="mx-2 font-medium text-gray-800 dark:text-gray-800 hover:underline">Org Admin</h4>
            </div>
        </div>
    </div>
  )
}