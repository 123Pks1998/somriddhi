import { CiSearch } from 'react-icons/ci'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <div >
            <header className="text-gray-600 body-font">
                <div className="container md:mx-16 lg:mx-16 mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
                    <Link to={'/'} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <img src="https://th.bing.com/th?id=OIP.dbbExRNOWSp8yPTgiA2mrgAAAA&w=231&h=96&c=8&rs=1&qlt=90&o=6&dpr=1.6&pid=3.1&rm=2" className='h-12' alt="" />
                    </Link>
                    <div className="md:ml-auto  md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <CiSearch className='-mr-5   z-50 mt-0.5' />
                        <input type="text" placeholder="Search For brand, category, coupon" className="bg-slate-200 py-1 px-6 rounded-md md:w-96" >

                        </input>

                    </div>
                    <Link className="inline-flex items-center bg-red-500 font-bold border-0 py-2 px-3 focus:outline-none text-white text-base  mt-4 md:mt-0 uppercase rounded-md">login /
                        sign up
                    </Link>
                </div>
            </header>

        </div>
    )
}

export default Header
