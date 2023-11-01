import { RiCouponLine, RiCoupon4Line } from 'react-icons/ri'
import { AiOutlineLogin } from 'react-icons/ai'

const Howitworks = () => {
    return (
        <div>
            <section className="text-gray-600 bg-zinc-100 my-10 body-font">
                <div className="container pr-8 py-6 mx-auto">
                    <div className="text-center mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font capitalize text-gray-900 mb-4">how it works</h1>

                        <div className="flex mt-6 justify-center">
                            <div className="w-20 h-1  bg-red-600 inline-flex"></div>
                        </div>
                    </div>
                    <div className="flex justify-center gap-24 sm:-m-4  -mb-10 -mt-4 md:space-y-0 space-y-6">
                        <div className="py-6 md:w-1/4 bg-white  rounded-xl flex flex-col text-center items-center">
                            <div className="w-16 h-16 inline-flex items-center justify-center rounded-xl bg-pink-100 text-black text-2xl mb-5 flex-shrink-0">
                                <AiOutlineLogin />
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-gray-800 text-lg font-serif font-medium mb-3">Signup</h2>
                                <p className="w-60 leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy.</p>

                            </div>
                        </div>

                        <div className="py-6 md:w-1/4 bg-white rounded-xl flex flex-col text-center items-center">
                            <div className="w-16 h-16 inline-flex items-center justify-center rounded-xl bg-pink-100 text-black text-2xl mb-5 flex-shrink-0">
                                <RiCouponLine />
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-gray-800 text-lg font-serif font-medium mb-3">Choose Goupon</h2>
                                <p className="w-60 leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy.</p>

                            </div>
                        </div>
                        <div className="py-6 md:w-1/4 bg-white rounded-xl flex flex-col text-center items-center">
                            <div className="w-16 h-16 inline-flex items-center justify-center rounded-xl bg-pink-100 text-black text-2xl mb-5 flex-shrink-0">
                                <RiCoupon4Line />
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-gray-800 text-lg font-serif font-medium mb-3">Grab Coupon</h2>
                                <p className="w-60 leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy.</p>

                            </div>
                        </div>

                    </div>
                </div>

                <div className='flex bg-pink-200 w-10/12 mt-10 rounded-2xl mx-20'>
                    <div className='px-14 py-10'>
                        <h1 className='w-40 text-red-600 text-lg font-serif font-semibold'>Want to be a <br />part of our team</h1>
                        <p className='w-48 mt-4'>Be a part of best site of discount coupons</p>
                        <div className='flex w-full gap-8 mt-4'>
                            <img src="https://www.alphatech.mobi/images/small/Download.png" className="h-12 my-2" alt="" />
                            <img src="https://zeevector.com/wp-content/uploads/2021/01/Google-Play-Store-Logo-PNG.png" className="h-12 w-40 rounded-xl my-2 bg-white" alt="" />
                        </div>
                    </div>
                    <div className='flex justify-end w-full h-60'>
                        <img src="https://www.pngplay.com/wp-content/uploads/7/Android-Mobile-Download-Free-PNG.png" alt="" className='w-96 h-60 flex justify-end' />
                    </div>
                </div>


                <div className='flex w-10/12 mx-20  my-14'>
                    <div className='w-80 '>
                        <div className='rounded-xl'>
                            <img src="https://i.pinimg.com/originals/68/c7/56/68c7561123ffc4118faee2d62a1acad4.png" alt="" className='w-60 h-56 bg-orange-200 rounded-tl-2xl' />
                        </div>
                        <div className='bg-orange-300 rounded-bl-2xl text-center'>
                            <p className='uppercase text-xs w-full font-serif text-white font-semibold'>wekeend only</p>
                            <div className='flex justify-center text-center'>
                                <h1 className='text-2xl w-24 text-white font-semibold font-serif uppercase '>summer sale </h1>
                            </div>
                            <p className='text-lg text-white font-semibold font-serif uppercase '>up to 50 %</p>
                        </div>
                    </div>
                    <div className='w-full  bg-white rounded-r-2xl'>

                        <div className='mt-4 w-60  mx-32 capitalize text-xl text-black font-bold'>
                            <h1 className='text-center'>popular category</h1>
                            <p className="w-20 h-0.5 mx-10 bg-red-600 inline-flex"></p>
                        </div>
                        <div className='mx-12 flex justify-center mt-4'>
                            <table className='w-96 h-56 border-2 capitalize'>
                                <tr className='text-center'>
                                    <td className='border-2'>flight</td>
                                    <td className='border-2'>bus</td>
                                    <td className='border-2'>entertainment</td>
                                    <td className='border-2'>jewellery</td>
                                </tr>

                                <tr className='text-center'>
                                    <td className='border-2'>medicines</td>
                                    <td className='border-2'>hosting</td>
                                    <td className='border-2'>flowers</td>
                                    <td className='border-2'>beauty</td>
                                </tr>

                                <tr className='text-center'>
                                    <td className='border-2'>oTT</td>
                                    <td className='border-2'>bills</td>
                                    <td className='border-2'>kids</td>
                                    <td className='border-2'>travel</td>
                                </tr>

                                <tr className='text-center'>
                                    <td className='border-2'>food</td>
                                    <td className='border-2'>eyewear</td>
                                    <td className='border-2'>lifestyle</td>
                                    <td className='border-2'>kitchen</td>
                                </tr>

                                <tr className='text-center'>
                                    <td className='border-2'>recharge</td>
                                    <td className='border-2'>electronics</td>
                                    <td className='border-2'>hotel</td>
                                    <td className='border-2'>footwear</td>
                                </tr>

                                <tr className='text-center'>
                                    <td className='border-2'>lab</td>
                                    <td className='border-2'>education</td>
                                    <td className='border-2'>services</td>
                                    <td className='border-2'>furniture</td>
                                </tr>

                                <tr className='text-center'>
                                    <td className='border-2'>fashion</td>
                                    <td className='border-2'>pizza</td>
                                    <td className='border-2'>bike</td>
                                    <td className='border-2'>novelities</td>
                                </tr>
                            </table>
                        </div>

                    </div>
                </div>
            </section >

        </div >
    )
}

export default Howitworks
