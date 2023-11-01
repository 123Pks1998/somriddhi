import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div>
            <header className="text-white body-font bg-slate-800 ">
                <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">

                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <Link to={'/'} className="mr-5 hover:text-red-400 hover:underline ">Home</Link>
                        <Link to={'/'} className="mr-5 hover:text-red-400 hover:underline">Deals</Link>
                        <Link to={'/'} className="mr-5 hover:text-red-400 hover:underline">Coupon</Link>
                        <Link to={'/'} className="mr-5 hover:text-red-400 hover:underline">Stores</Link>
                        <Link to={'/'} className="mr-5 hover:text-red-400 hover:underline">Contact Us</Link>
                    </nav>

                </div>
            </header>
        </div>
    )
}

export default Navbar
