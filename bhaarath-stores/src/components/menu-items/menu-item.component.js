/* After designing the homepage
    next step is to design the menu-items so that everything is divided and and cann be manages easily*/ 
import React from 'react';
import { withRouter } from 'react-router-dom';
import '../menu-items/menu-item.styles.scss';


const MenuItem = ({title, imageUrl, size, linkUrl,history, match}) => (
    <div  className = {`${size} menu-item ` }
     onClick = {() => history.push(`${match.url}${linkUrl}`)}>
        {/* for routes props like history, match, location visit react-router-learning [E:code/React].
        Here match.url provides '/' at homepage and linkUrl is appended to it*/}
        <div className = 'background-image' 
        style = {{
            backgroundImage: `url(${imageUrl})`
    
        }}/>

                <div className = 'content'>
                    <h1 className = "title"> {title.toUpperCase()}</h1>
                    <span className = "subtitle">SHOP NOW</span>
                </div>
    </div>
)
export default withRouter(MenuItem);

//withRouter is a higher order component and function which takes component as an argument and turns as a  modified component