import SideBar from "./SideBar";
import './Admin.scss';
import { FaHeart, FaBars } from 'react-icons/fa';
import { useState } from "react";
import { Outlet } from "react-router-dom";
import PerfectScrollbar from 'react-perfect-scrollbar'

const Admin = (porps) => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <div className="admin-container">
            <div className="admin-sidebar">
                <SideBar collapsed={collapsed} />
            </div>
            <div className="admin-cotent">
                <div className="admin-header">
                    <FaBars onClick={() => setCollapsed(!collapsed)} />
                    content goes here
                </div>

                <div className="admin-main">
                    <PerfectScrollbar>
                        < Outlet />
                    </PerfectScrollbar>
                </div>

            </div>

        </div>
    )
}
export default Admin