import React from "react";
import Sidebar from "../../sidebar";

export default function dashboard() {
  let today = new Date();
  return (
    <>      
    <div className="p-8 flex flex-col md:items-start items-center">
      <h1 className="mt-6 text-4xl">Welcome, Admin</h1>
      <h3>Today is {today.toDateString()} </h3>
      <Sidebar page="dashboard"/>
    </div>
    </>
  )
}
