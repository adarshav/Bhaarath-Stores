import React from 'react';
import './../directory/directory.styles.scss';
import MenuItem from './../menu-items/menu-item.component';

class Directory extends React.Component  {
    constructor() {
        super();

        this.state = {
            sections:  [
                {
                  title: 'clothing',
                  imageUrl:'https://i.ibb.co/px2tCc3/jackets.png',
                //   imageUrl: 'https://ibb.co/kBCs9NT',
                  id: 1,
                  linkUrl: 'shop/clothing'
                },
                {
                  title: 'electronics',
                  imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                  id: 2,
                  linkUrl: 'shop/eletronics'
                },
                {
                  title: 'Mobiles',
                  imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                  id: 3,
                  linkUrl: 'shop/mobiles'
                },
                {
                  title: 'shoes',
                  imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/shoes'
                },
                {
                  title: 'renting',
                  imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/renting'
                }
              ]
        }
    }
    render() {
        return(
            <div className = "directory-menu">
                {
                    this.state.sections.map(({title, imageUrl, id, size}) => (
                        <MenuItem key = {id} title = {title} imageUrl = {imageUrl} size = {size}/>
                    ))
                }
            </div>
        )
    }
}

export default Directory;