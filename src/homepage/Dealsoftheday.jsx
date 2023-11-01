import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

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


const Dealsoftheday = () => {
    return (
        <div>

            <section className="text-gray-600 body-font">
                <div className=" md:mx-20 mx-10">

                    <Carousel className='flex flex-wrap container  ' infinite={true} showDots={true} arrows={true} responsive={responsive}>

                        <div className="xl:w-3/4  md:w-4/5 lg:w-5/6  ">
                            <div className="bg-white p-2 rounded-lg">

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
                        <div className="xl:w-3/4  md:w-4/5 lg:w-5/6  ">
                            <div className="bg-white p-2 rounded-lg">

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
                        <div className="xl:w-3/4  md:w-4/5 lg:w-5/6  ">
                            <div className="bg-white p-2 rounded-lg">

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
                        <div className="xl:w-3/4  md:w-4/5 lg:w-5/6  ">
                            <div className="bg-white p-2 rounded-lg">

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
                        <div className="xl:w-3/4  md:w-4/5 lg:w-5/6  ">
                            <div className="bg-white p-2 rounded-lg">

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
                        <div className="xl:w-3/4  md:w-4/5 lg:w-5/6  ">
                            <div className="bg-white p-2 rounded-lg">

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
                        <div className="xl:w-3/4  md:w-4/5 lg:w-5/6  ">
                            <div className="bg-white p-2 rounded-lg">

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
    )
}

export default Dealsoftheday


