import React from 'react'
import './Sidebar.css'
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import AddIcon from "@material-ui/icons/Add"


function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebar__top">
                <h3>Chat Groups</h3>
                <ExpandMoreIcon />
            </div>
            <div className="sidebar__groups">
                <div className="sidebar__header">
                    <ExpandMoreIcon />
                    <h4>Groups</h4>
                </div>
                <AddIcon className= "sidebar__addGroup" />
            </div>
        </div>
    )
}

export default Sidebar
