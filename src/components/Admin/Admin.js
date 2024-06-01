import SideBar from "./SideBar";
import './Admin.scss';
import { FaHeart, FaBars } from 'react-icons/fa';
import { useState } from "react";
const Admin = (porps) => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <div className="admin-container">
            <div className="admin-sidebar">
                <SideBar collapsed={collapsed}/>
            </div>
            <div className="admin-cotent">
                <FaBars onClick={() =>setCollapsed(!collapsed)}/>
                content goes here
            </div>

        </div>
    )
}
export default Admin