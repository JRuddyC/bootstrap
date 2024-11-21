import { useSidebar } from "../../hooks/useSidebar";
import { MenuButton } from "../MenuButton";
import { Sidebar } from "../Sidebar";
import { SidebarOpenButton } from "../SidebarOpenButton";
import "./Layout.css";
const Layout = ({ children }) => {
    const { isSidebarOpen, toggleSidebar, closeSidebar } = useSidebar();
    return (
        <div className="d-flex flex-column vh-100">
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <SidebarOpenButton onClick={toggleSidebar} />
                    <span className="navbar-brand">LOGO</span>
                </div>
            </nav>
            <div className="d-flex flex-grow-1 overflow-hidden">
                <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar}>
                    <ul className="nav flex-column w-100 mt-5">
                        <li className="nav-item">
                            <MenuButton label="Home" onClick={closeSidebar} />
                        </li>
                        <li className="nav-item">
                            <MenuButton label="Users" onClick={closeSidebar} />
                        </li>
                        <li className="nav-item">
                            <MenuButton label="Products" onClick={closeSidebar} />
                        </li>
                    </ul>
                </Sidebar>
                <div className="pt-4 flex-grow-1 overflow-auto">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Layout;
