import React from 'react';
import '../Styles/SideMenuBar.css';
import { SidebarData } from './SidebarData';

function SideMenuBar() {
  return (
    <div className='sidebar'>
     <div className='sidebar-top'>
        <div className='logo'>
          <img src='https://dummyimage.com/80x80/000/fff&text=Logo' alt='Logo' />
        </div>
      </div>
      <ul className='sidebarList'>
        {SidebarData.map((val,key)=>{
          return ( 
            <li key={key} 
            onClick={ () => {window.location.pathname=val.link} }
            className='row'
            id={window.location.pathname === val.link? "active" : ""}
            >
              <div id='icon'>
                {val.icon}
              </div>{" "}
              <div id='title'>
                {val.title}
              </div>
            </li>
          );
        })}
      </ul>
      <div className='sidebar-bottom'>
        <div className='profile'>
          <img src='https://dummyimage.com/50x50/000/fff&text=Profile' alt='Profile' />
          <span>karthi</span>
        </div>
      </div>
    </div>
  )
}

export default SideMenuBar
