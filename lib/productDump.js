let produts = [
    {
        id: 'design-1',
        productName: 'June Design Website number 1',
        productImg: './web1.jpg',
        productPrice: '50000',
        directLink: '#',
        date: '2021-01-01'
    },
    {
        id: 'design-2',
        productName: 'June Design Website number 2',
        productImg: './web2.jpg',
        productPrice: '50000',
        directLink: '#',
        date: '2021-01-02'
    },{
        id: 'design-3',
        productName: 'June Design Website number 3',
        productImg: './web3.jpg',
        productPrice: '50000',
        directLink: '#',
        date: '2021-01-03'
    }
]

export function getSortedProductData() {

  // Sort posts by date
  return produts
}

export function getAllProductIds() {
   
    return produts.map(value => {
      return {
        params: {
          id: value.id
        }
      }
    })
}

export async function getProductData(id) {
    let data = produts.find(value => value.id == id);
    return data
}