import './sidebar.css';
import Logo from '../../assets/images/icons/holybible-icon.svg';
import SidebarItem from './SidebarItem';
import { Home, BookOpen, Compass, Sun, CalendarDays, Bookmark, Settings, ChevronsLeft, ChevronsRight, type LucideIcon } from 'lucide-react';
import { useState } from 'react';

interface MenuItem {
    label: string;
    icon: LucideIcon;
}

const menuItems: MenuItem[] = [
    { label: 'Início', icon: Home },
    { label: 'Bíblia', icon: BookOpen },
    { label: 'Explore', icon: Compass },
    { label: 'Devocionais', icon: Sun },
    { label: 'Planos de Leitura', icon: CalendarDays },
    { label: 'Favoritos', icon: Bookmark },
];

const settingsItem: MenuItem = { label: 'Configurações', icon: Settings };

function Sidebar() {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <aside className={`sidebar${collapsed ? ' collapsed' : ''}`}>

            {/* Sidebar Header */}
            <header className="sidebar-header">
                <div className="sidebar-brand">

                    <img
                        src={Logo}
                        alt="Logo HolyBible"/>

                    <div className="sidebar-brand-info">
                        <h1 className="sidebar-title">
                            HolyBible
                        </h1>

                        <span className="sidebar-subtitle">
                            LEITURA & ESTUDO
                        </span>
                    </div>

                </div>
            </header>

            {/* Sidebar Content */}
            <div className="sidebar-content">

                <nav className="sidebar-navigation">
                    {menuItems.map((item) => (
                        <SidebarItem key={item.label} {...item} />
                    ))}
                </nav>

                <div className="sidebar-settings">
                    <SidebarItem {...settingsItem} />
                    
                    <hr className="sidebar-divider" />
                </div>

            </div>

            {/* Sidebar Footer */}
            <footer className="sidebar-footer">
                {collapsed ? (
                    <div className="sidebar-footer-mini" aria-hidden="true">
                        <span className="sidebar-footer-quote">“</span>
                        <span className="sidebar-footer-label">DO DIA</span>
                    </div>
                ) : (
                    <div className="sidebar-footer-content">
                        <p>“Lâmpada para os meus pés é tua palavra e luz para o meu caminho.”</p>
                        <span>SALMOS 119:105</span>
                    </div>
                )}

                <button type="button"
                        className="sidebar-toggle"
                        onClick={() => setCollapsed((prev) => !prev)}
                        aria-expanded={!collapsed}
                        aria-label={collapsed ? 'Expandir sidebar' : 'Recolher sidebar'}
                        title={collapsed ? 'Expandir sidebar' : 'Recolher sidebar'}>
                        {collapsed ? 
                            ( <ChevronsRight size={24} strokeWidth={1.5} /> ) 
                                : 
                            ( <ChevronsLeft size={24} strokeWidth={1.5} /> )}
                </button>
            </footer>

        </aside>
    );
}

export default Sidebar;
