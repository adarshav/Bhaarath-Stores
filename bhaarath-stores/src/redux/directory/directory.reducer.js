//Here we are moving the directory in the homepage to redux (it is an advanced version)
const INITIAL_STATE = {
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

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default: 
            return state;
    }
}
export default directoryReducer;