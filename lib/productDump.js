let produts = [
    {
        id: 'Lembayung',
        productName: 'Scrub Garam & Garam Mandi Spa Perawatan Tubuh Lembayung by The Body Ritual',
        productImg: './Lembayung.jpg',
        productPrice: '55000',
        directLink: 'https://shopee.co.id/Scrub-Garam-Garam-Mandi-Spa-Perawatan-Tubuh-Lembayung-by-The-Body-Ritual-i.322074598.5860510980',
        date: '2021-01-01'
    },
    {
        id: 'Arunika',
        productName: 'Scrub Garam & Garam Mandi Spa Perawatan Tubuh Arunika by The Body Ritual',
        productImg: './Arunika.jpg',
        productPrice: '55000',
        directLink: 'https://shopee.co.id/Scrub-Garam-Garam-Mandi-Spa-Perawatan-Tubuh-Arunika-by-The-Body-Ritual-i.322074598.5473976544',
        date: '2021-01-02'
    },{
        id: 'Jenggala',
        productName: 'Scrub Garam & Garam Mandi Spa Perawatan Tubuh Jenggala by The Body Ritual',
        productImg: './Jenggala.jpg',
        productPrice: '55000',
        directLink: 'https://shopee.co.id/Scrub-Garam-Garam-Mandi-Spa-Perawatan-Tubuh-Jenggala-by-The-Body-Ritual-i.322074598.4474034552',
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