import './sidebar.css'
import SidebarExpand from '../sidebarExpand/SidebarEx'
import SidebarCollapse from '../sidebarCollapse/SidebarCo'


function Sidebar() {
    return (
       <div className="sidebar-wrapper">
           <SidebarExpand />
       </div>
      );
}

export default Sidebar;