import './sidebar.css';
import Logo from '../../assets/images/icons/holybible-icon.svg';
import { Home, BookOpen, Compass, Sun, CalendarDays, Bookmark, Settings, type LucideIcon, } from 'lucide-react';
import SidebarItem from './SidebarItem';

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
    return (
        <aside className="sidebar">

            <header className="sidebar-header">
                <img src={Logo} alt="Logo HolyBible" className="sidebar-logo" />
                <h1 className="sidebar-title">HolyBible</h1>
            </header>

            <div className="sidebar-content">

                <nav className="sidebar-navigation">
                    {menuItems.map((item) => (
                        <SidebarItem key={item.label} {...item} />
                    ))}
                </nav>

                <div className="sidebar-settings">
                    <hr className="sidebar-divider" />

                    <SidebarItem {...settingsItem} />
                </div>

            </div>

            <footer className="sidebar-footer">
                <p>
                    "Lâmpada para os meus pés é tua palavra
                    e luz para o meu caminho."
                </p>
                <span>SALMOS 119:105</span>
            </footer>

        </aside>
    );
}

export default Sidebar;
