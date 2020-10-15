import React from 'react'
import './Sidebar.css'
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import AddIcon from "@material-ui/icons/Add"
import SidebarChannel from "./SidebarChannel.js"


function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebar__top">
                <h3>Chat Groups</h3>
                <ExpandMoreIcon />
            </div>
            <div className="sidebar__groups">
                <div className="sidebar__groupsHeader">
                    <div className="sidebar__header">
                        <ExpandMoreIcon />
                        <h4>Groups</h4>
                    </div>
                    <AddIcon className= "sidebar__addGroup" />
                </div>
                <div className="sidebar__groupsList">
                    <SidebarChannel />
                </div>
            </div>
        </div>
    )
}

export default Sidebar
