import React from 'react'
import Header from '@/components/common/Header'
import SideBar from '@/components/common/Sidebar'

function Dashboardlayout({ children,}: {children: React.ReactNode;}) {
  return (
    <section className="">
      <div className=" min-h-screen bg-slate-100 dark:bg-black">
        <SideBar />
        <div className="sm:ml-[6rem] " > 
          <Header />
          {children}
        </div>
      </div>
    </section>
  )
}

export default Dashboardlayout
