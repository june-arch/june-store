import Layout from "../components/layout";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import WhatsappIcon from '@material-ui/icons/WhatsApp';
import Product from '../components/product'

let contactDesc = `A personal care for your body ritual needs`
let contactNum = `(+62) 877-3398-6223`
let produts = [
  {
    productName: 'Scrub Garam & Garam Mandi Spa Perawatan Tubuh Lembayung by The Body Ritual',
    productImg: './Lembayung.jpg',
    productPrice: '55000',
    directLink: 'https://shopee.co.id/Scrub-Garam-Garam-Mandi-Spa-Perawatan-Tubuh-Lembayung-by-The-Body-Ritual-i.322074598.5860510980'
  },
  {
    productName: 'Scrub Garam & Garam Mandi Spa Perawatan Tubuh Arunika by The Body Ritual',
    productImg: './Arunika.jpg',
    productPrice: '55000',
    directLink: 'https://shopee.co.id/Scrub-Garam-Garam-Mandi-Spa-Perawatan-Tubuh-Arunika-by-The-Body-Ritual-i.322074598.5473976544'
  },{
    productName: 'Scrub Garam & Garam Mandi Spa Perawatan Tubuh Jenggala by The Body Ritual',
    productImg: './Jenggala.jpg',
    productPrice: '55000',
    directLink: 'https://shopee.co.id/Scrub-Garam-Garam-Mandi-Spa-Perawatan-Tubuh-Jenggala-by-The-Body-Ritual-i.322074598.4474034552'
  }
]
export default function Home() {
  return (
    <Layout>
      <section className="bg-white py-8">
        <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">
            <nav id="store" className="w-full z-30 top-0 px-6 py-1">
                <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
                    <a className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl " href="#">Store</a>
                    <div className="flex items-center" id="store-nav-content">
                        <a className="pl-3 inline-block no-underline hover:text-black" href="#">
                            <svg className="fill-current hover:text-black" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M7 11H17V13H7zM4 7H20V9H4zM10 15H14V17H10z" />
                            </svg>
                        </a>

                        <a className="pl-3 inline-block no-underline hover:text-black" href="#">
                            <svg className="fill-current hover:text-black" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z" />
                            </svg>
                        </a>
                    </div>
              </div>
            </nav>

            {produts.map(value => 
              <Product 
                productName={value.productName}
                productImg={value.productImg} 
                productPrice={value.productPrice} 
                directLink={value.directLink} />
            )}
            
            
        </div>
      </section>
      <footer className="container mx-auto bg-white py-8 border-t border-gray-400">
        <div className="container flex px-3 py-8 ">
            <div className="w-full mx-auto flex flex-wrap">
                <div className="flex w-full lg:w-1/2 ">
                    <div className="px-3 md:px-0">
                        <h3 className="font-bold text-gray-900">Contact</h3>
                        <p className="py-2">{contactDesc}</p>
                        <p>{contactNum}</p>
                    </div>
                </div>
                <div className="flex w-full lg:w-1/2 lg:justify-end lg:text-right">
                    <div className="px-3 md:px-0">
                        <h3 className="font-bold text-gray-900">Social</h3>
                        <ul className="list-reset items-center pt-3">
                            <li>
                                <FacebookIcon/>
                                <InstagramIcon/>
                                <TwitterIcon/>
                                <WhatsappIcon/>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </footer>
    </Layout>
  )
}
