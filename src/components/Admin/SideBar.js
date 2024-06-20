import "react-pro-sidebar/dist/css/styles.css";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import {
  FaGem,
  FaGithub,
  FaAnglesLeft
} from "react-icons/fa";
import sidebarBg from "../../assets/bg2.jpg";

import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { MdDashboard } from "react-icons/md";

import { Link, useNavigate } from "react-router-dom";

import "./SideBar.scss";

const SideBar = ({ image, collapsed, toggled, handleToggleSidebar }) => {
  const navigate = useNavigate();
  
  return (
    <>
      <ProSidebar
        image={sidebarBg}
        collapsed={collapsed}
        toggled={toggled}
        breakPoint="md"
        onToggle={handleToggleSidebar}
      >
        <SidebarHeader>
          <div
            style={{
              padding: "24px",
              textTransform: "uppercase",
              fontWeight: "bold",
              fontSize: 14,
              letterSpacing: "1px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            <MdOutlineAdminPanelSettings
              size={"2.5rem"}
              style={{ color: "#fff" }}
            />
            <span className="logo" onClick={(() => navigate('/'))}> Sandy's Quiz App</span>
          </div>
        </SidebarHeader>

        <SidebarContent>
          {/* <Menu iconShape="circle">
            <MenuItem icon={<MdDashboard />}>
              Dashboard
              <Link to="/admin" />
            </MenuItem>
          </Menu> */}
          <Menu iconShape="circle">
            <SubMenu icon={<FaGem />} title="Features">
              <MenuItem>
                Manage Users
                <Link to="/admin/manage-user" />
              </MenuItem>

              <MenuItem>
                Manage Quizzes
                <Link to="/admin/manage-quiz" />
              </MenuItem>

              <MenuItem>
                Manage Questions
                <Link to="/admin/manage-questions" />
              </MenuItem>
            </SubMenu>
          </Menu>
        </SidebarContent>

        <SidebarFooter style={{ textAlign: "center" }}>
          <div
            className="sidebar-btn-wrapper"
            style={{
              padding: "20px 24px",
            }}
          >
            <a
              href="https://github.com/dhapham"
              target="_blank"
              className="sidebar-btn"
              rel="noopener noreferrer"
            >
              <FaGithub />
              <span
                style={{
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                }}
              >
                View Source
              </span>
            </a>
          </div>
        </SidebarFooter>
      </ProSidebar>
    </>
  );
};
export default SideBar;
