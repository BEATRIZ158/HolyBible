import type React from 'react'

import Sidebar from '../../components/Sidebar/Sidebar'
import './MainLayout.css'

type MainLayoutProps = {
  children: React.ReactNode
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="app-layout">
      <Sidebar />
      <main className="main-content">{children}</main>
    </div>
  )
}

export default MainLayout
