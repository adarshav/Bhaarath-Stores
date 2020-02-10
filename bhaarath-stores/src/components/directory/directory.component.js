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
                  linkUrl: 'clothing'
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
                    this.state.sections.map(({ id, ...otherSectionsProps}) => (
                        <MenuItem key = {id} {...otherSectionsProps}/>
                    ))
                    // here ...otherSectionprops means other properties of section it is used because for the easy use
                    // this can be used [...otherSectionsProps] where means if title = {title} size = {size} imageUrl = {imageUrl} at that time these can be used
                }
            </div>
        )
    }
}

export default Directory;