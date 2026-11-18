import type { LucideIcon } from 'lucide-react'

import './SidebarItem.css'

type SidebarItemProps = {
  label: string
  icon: LucideIcon
  active?: boolean
  href?: string
}

function SidebarItem({ label, icon: Icon, active = false, href }: SidebarItemProps) {
  return (
    <a
      className={`sidebar-item${active ? ' active' : ''}`}
      href={href}
      title={label}
      aria-current={active ? 'page' : undefined}
    >
      <Icon className="sidebar-icon" size={22} strokeWidth={1.5} />
      <span className="sidebar-label">{label}</span>
    </a>
  )
}

export default SidebarItem
