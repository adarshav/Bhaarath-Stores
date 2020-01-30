/* After designing the homepage
    next step is to design the menu-items so that everything is divided and and cann be manages easily*/ 
import React from 'react';
import '../menu-items/menu-items.styles.scss';

const MenuItem = ({title}) => (
    <div className = "menu-item">
         <div className = "content">
            <h1 className = "title">{title}</h1>
            <span className = "subtitle">Shop now</span>
        </div>
      </div>
)
export default MenuItem;