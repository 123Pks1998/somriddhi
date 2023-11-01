import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CategoryData from '../CategoryData';
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 8
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
const Categories = () => {
    return (
        <div className=" md:mx-20 mx-10 ">
            <div className="flex md:w-5/5 xl:w-40 md:overflow-hidden xl:overflow-hidden sm:overflow-hidden lg:w-fit lg:gap-3 md:gap-1 mb-0.5">
                {CategoryData.map((item) => {
                    return (
                        <>
                            <div className='pb-2 bg-white rounded-tl-lg rounded-tr-lg'>
                                <img src={item.img} alt="" className="w-24 h-20 rounded-tl-lg rounded-tr-lg" />
                                <h1 className='capitalize text-center'>{item.title}</h1>
                            </div>
                        </>
                    )
                })}
            </div>


            <div>
                <section className="text-gray-600 body-font mr-10">
                    <div className=" ">

                        <Carousel className='flex container flex-wrap rounded-br-xl rounded-bl-xl' infinite={true} showDots={true} arrows={true} responsive={responsive}>


                            <div className="xl:w-3/4 ">
                                <div className="bg-white p-2 ">

                                    <div className='flex justify-center'>
                                        <img className="h-20 w-28 rounded " src="https://indianapublicmedia.org/images/news-images/amazon-logo.jpg" alt="content" />
                                    </div>
                                    <h1 className='text-center text-black'>Amazon</h1>
                                    <h1 className='text-center text-green-600 capitalize font-medium font-serif mt-6'>
                                        Flat 30% off</h1>
                                    <div className='flex justify-center '>
                                        <button className='w-44 rounded-md text-center text-sm font-serif font-semibold p-3 text-white uppercase bg-red-600 mt-8 mb-1'>
                                            grab now
                                        </button>
                                    </div>


                                </div>
                            </div>
                            <div className="xl:w-3/4     ">
                                <div className="bg-white p-2 ">

                                    <div className='flex justify-center'>
                                        <img className="h-20 w-28 rounded " src="https://indianapublicmedia.org/images/news-images/amazon-logo.jpg" alt="content" />
                                    </div>
                                    <h1 className='text-center text-black'>Amazon</h1>
                                    <h1 className='text-center text-green-600 capitalize font-medium font-serif mt-6'>
                                        Flat 30% off</h1>
                                    <div className='flex justify-center '>
                                        <button className='w-44 rounded-md text-center text-sm font-serif font-semibold p-3 text-white uppercase bg-red-600 mt-8 mb-1'>
                                            grab now
                                        </button>
                                    </div>


                                </div>
                            </div>
                            <div className="xl:w-3/4     ">
                                <div className="bg-white p-2 ">

                                    <div className='flex justify-center'>
                                        <img className="h-20 w-28 rounded " src="https://indianapublicmedia.org/images/news-images/amazon-logo.jpg" alt="content" />
                                    </div>
                                    <h1 className='text-center text-black'>Amazon</h1>
                                    <h1 className='text-center text-green-600 capitalize font-medium font-serif mt-6'>
                                        Flat 30% off</h1>
                                    <div className='flex justify-center '>
                                        <button className='w-44 rounded-md text-center text-sm font-serif font-semibold p-3 text-white uppercase bg-red-600 mt-8 mb-1'>
                                            grab now
                                        </button>
                                    </div>


                                </div>
                            </div>
                            <div className="xl:w-3/4     ">
                                <div className="bg-white p-2 ">

                                    <div className='flex justify-center'>
                                        <img className="h-20 w-28 rounded " src="https://indianapublicmedia.org/images/news-images/amazon-logo.jpg" alt="content" />
                                    </div>
                                    <h1 className='text-center text-black'>Amazon</h1>
                                    <h1 className='text-center text-green-600 capitalize font-medium font-serif mt-6'>
                                        Flat 30% off</h1>
                                    <div className='flex justify-center '>
                                        <button className='w-44 rounded-md text-center text-sm font-serif font-semibold p-3 text-white uppercase bg-red-600 mt-8 mb-1'>
                                            grab now
                                        </button>
                                    </div>


                                </div>
                            </div>
                            <div className="xl:w-3/4     ">
                                <div className="bg-white p-2 ">

                                    <div className='flex justify-center'>
                                        <img className="h-20 w-28 rounded " src="https://indianapublicmedia.org/images/news-images/amazon-logo.jpg" alt="content" />
                                    </div>
                                    <h1 className='text-center text-black'>Amazon</h1>
                                    <h1 className='text-center text-green-600 capitalize font-medium font-serif mt-6'>
                                        Flat 30% off</h1>
                                    <div className='flex justify-center '>
                                        <button className='w-44 rounded-md text-center text-sm font-serif font-semibold p-3 text-white uppercase bg-red-600 mt-8 mb-1'>
                                            grab now
                                        </button>
                                    </div>


                                </div>
                            </div>
                            <div className="xl:w-3/4     ">
                                <div className="bg-white p-2 ">

                                    <div className='flex justify-center'>
                                        <img className="h-20 w-28 rounded " src="https://indianapublicmedia.org/images/news-images/amazon-logo.jpg" alt="content" />
                                    </div>
                                    <h1 className='text-center text-black'>Amazon</h1>
                                    <h1 className='text-center text-green-600 capitalize font-medium font-serif mt-6'>
                                        Flat 30% off</h1>
                                    <div className='flex justify-center '>
                                        <button className='w-44 rounded-md text-center text-sm font-serif font-semibold p-3 text-white uppercase bg-red-600 mt-8 mb-1'>
                                            grab now
                                        </button>
                                    </div>


                                </div>
                            </div>
                            <div className="xl:w-3/4     ">
                                <div className="bg-white p-2 ">

                                    <div className='flex justify-center'>
                                        <img className="h-20 w-28 rounded " src="https://indianapublicmedia.org/images/news-images/amazon-logo.jpg" alt="content" />
                                    </div>
                                    <h1 className='text-center text-black'>Amazon</h1>
                                    <h1 className='text-center text-green-600 capitalize font-medium font-serif mt-6'>
                                        Flat 30% off</h1>
                                    <div className='flex justify-center '>
                                        <button className='w-44 rounded-md text-center text-sm font-serif font-semibold p-3 text-white uppercase bg-red-600 mt-8 mb-1'>
                                            grab now
                                        </button>
                                    </div>


                                </div>
                            </div>




                        </Carousel>
                    </div>
                </section>


            </div>

        </div>
    )
}

export default Categories
