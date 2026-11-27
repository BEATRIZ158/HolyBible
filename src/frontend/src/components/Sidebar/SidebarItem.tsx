import type { LucideIcon } from 'lucide-react'

import './SidebarItem.css'

type SidebarItemProps = {
  label: string
  icon: LucideIcon
  active?: boolean
  href?: string
  onSelect?: () => void
}

function SidebarItem({ label, icon: Icon, active = false, href, onSelect }: SidebarItemProps) {
  const content = (
    <>
      <Icon className="sidebar-icon" size={22} strokeWidth={1.5} />
      <span className="sidebar-label">{label}</span>
    </>
  )

  if (href) {
    return (
      <a
        className={`sidebar-item${active ? ' active' : ''}`}
        href={href}
        title={label}
        aria-current={active ? 'page' : undefined}
      >
        {content}
      </a>
    )
  }

  return (
    <button
      type="button"
      className={`sidebar-item${active ? ' active' : ''}`}
      title={label}
      aria-current={active ? 'page' : undefined}
      onClick={onSelect}
    >
      {content}
    </button>
  )
}

export default SidebarItem
