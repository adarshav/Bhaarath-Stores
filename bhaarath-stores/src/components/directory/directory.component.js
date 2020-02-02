import React from 'react';
import './../directory/directory.styles.scss';

class Directory extends React.Component  {
    constructor() {
        super();

        this.state = {
            sections:  [
                {
                  title: 'clothing',
                  imageUrl: 'https://ibb.co/kBCs9NT',
                  id: 1,
                  linkUrl: 'shop/clothing'
                },
                {
                  title: 'electronics',
                  imageUrl: 'https://ibb.co/LrGP5gg',
                  id: 2,
                  linkUrl: 'shop/eletronics'
                },
                {
                  title: 'Mobiles',
                  imageUrl: 'https://ibb.co/TPh3txt',
                  id: 3,
                  linkUrl: 'shop/mobiles'
                },
                {
                  title: 'shoes',
                  imageUrl: 'https://ibb.co/x1F6WR5',
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/shoes'
                },
                {
                  title: 'renting',
                  imageUrl: 'https://ibb.co/xLRCdqR',
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/renting'
                }
              ]
        }
    }
}