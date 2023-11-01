import { Link } from "react-router-dom"
const Footer = () => {
    return (

        <footer className="text-white body-font bg-slate-900">
            <div className="container px-5 py-8 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                    <Link to={'/'} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <img src="https://th.bing.com/th?id=OIP.dbbExRNOWSp8yPTgiA2mrgAAAA&w=231&h=96&c=8&rs=1&qlt=90&o=6&dpr=1.6&pid=3.1&rm=2 " className='h-12 ' alt="" />
                    </Link>
                    <p className="mt-2 text-sm text-white">Lorem ipsum is simply dummy of the printing and type setting.</p>
                    <img src="https://www.alphatech.mobi/images/small/Download.png" className="h-12 my-2" alt="" />
                    <img src="https://zeevector.com/wp-content/uploads/2021/01/Google-Play-Store-Logo-PNG.png" className="h-12 w-32 rounded-lg my-2 bg-white" alt="" />
                </div>
                <div className="flex-grow flex flex-wrap md:pl-2 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-red-600 tracking-widest text-sm mb-3 uppercase">company</h2>
                        <nav className="list-none mb-10 capitalize ">
                            <li>
                                <a className="text-white hover:text-red-800 text-sm">about us</a>
                            </li>
                            <li>
                                <a className="text-white hover:text-red-800 text-sm">privacy policy </a>
                            </li>
                            <li>
                                <a className="text-white hover:text-red-800 text-sm">terms</a>
                            </li>
                            <li>
                                <a className="text-white hover:text-red-800 text-sm">blogs </a>
                            </li>
                            <li>
                                <a className="text-white hover:text-red-800 text-sm">branding </a>
                            </li>
                            <li>
                                <a className="text-white hover:text-red-800 text-sm">career </a>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium  tracking-widest text-sm mb-3 text-red-600 uppercase">general</h2>
                        <nav className="list-none mb-10 capitalize">
                            <li>
                                <a className="text-white hover:text-red-800 text-sm">partner with us</a>
                            </li>
                            <li>
                                <a className="text-white hover:text-red-800 text-sm">write to us </a>
                            </li>
                            <li>
                                <a className="text-white hover:text-red-800 text-sm">mobile app</a>
                            </li>
                            <li>
                                <a className="text-white hover:text-red-800 text-sm">site map</a>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-red-600 tracking-widest text-sm mb-3 uppercase">pages</h2>
                        <nav className="list-none mb-10 capitalize">
                            <li>
                                <a className="text-white hover:text-red-800 text-sm">amazon offer</a>
                            </li>
                            <li>
                                <a className="text-white hover:text-red-800 text-sm">google pay offers</a>
                            </li>
                            <li>
                                <a className="text-white hover:text-red-800 text-sm">payPal offers</a>
                            </li>
                            <li>
                                <a className="text-white hover:text-red-800 text-sm">phonePe offers</a>
                            </li>
                            <li>
                                <a className="text-white hover:text-red-800 text-sm">festival offers</a>
                            </li>
                            <li>
                                <a className="text-white hover:text-red-800 text-sm">bank offers</a>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-medium text-red-600 tracking-widest text-sm mb-3 uppercase">more</h2>
                        <nav className="list-none mb-10 capitalize">
                            <li>
                                <a className="text-white hover:text-red-800 text-sm">city offers</a>
                            </li>
                            <li>
                                <a className="text-white hover:text-red-800 text-sm">brand offers</a>
                            </li>
                            <li>
                                <a className="text-white hover:text-red-800 text-sm">product deals</a>
                            </li>
                            <li>
                                <a className="text-white hover:text-red-800 text-sm">gift cards</a>
                            </li>
                        </nav>
                    </div>
                </div>
            </div>

        </footer>

    )
}

export default Footer
