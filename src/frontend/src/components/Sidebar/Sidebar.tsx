
import './sidebar.css';
import Logo from '../../assets/images/icons/holybible-icon.svg';

function Sidebar() {
    return (
        <aside className="sidebar">

            {/* Cabeçalho */}
            <header className="sidebar-header">
                <img src={Logo} alt="Logo HolyBible" className="sidebar-logo"/>
                <h1 className="sidebar-title">HolyBible</h1>
            </header>

            {/* Conteúdo central */}
            <div className="sidebar-content">

                {/* Navegação */}
                <nav className="sidebar-navigation">
                    <a className="sidebar-item">Início</a>
                    <a className="sidebar-item">Bíblia</a>
                    <a className="sidebar-item">Explore</a>
                    <a className="sidebar-item">Devocionais</a>
                    <a className="sidebar-item">Planos de Leitura</a>
                    <a className="sidebar-item">Favoritos</a>
                </nav>

                {/* Configurações */}
                <div className="sidebar-settings">
                    <hr className="sidebar-divider" />

                    <a className="sidebar-item">Configurações</a>
                </div>

            </div>

            {/* Rodapé */}
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
