
import { BiAlarm } from 'react-icons/bi'
import { AiOutlineFire } from 'react-icons/ai'
import { RiTrophyLine } from 'react-icons/ri'
import ProductSlider from "./homepage/ProductSlider"
import Dealsoftheday from "./homepage/Dealsoftheday"
import CategoryData from "./homepage/Categories"
import Popularmembership from "./homepage/Popularmembership"
import Subscribe from "./homepage/subscribe"
import Howitworks from "./homepage/Howitworks"
import Slidercompo from './homepage/Slider'
const Home = () => {
    return (
        <div className="my-10 ">

            <div className="md:mx-auto mx-auto w-3/4 justify-center rounded-3xl">
                <Slidercompo />
            </div>

            <div className="my-8">
                <div className="capitalize flex justify-center font-serif text-lg gap-6">
                    <div className="flex gap-4 hover:bg-white p-2 rounded-md ">
                        <RiTrophyLine className="mt-1" />
                        <p className="hover:text-red-600">popular coupons</p>
                    </div>

                    <div className="flex gap-4 hover:bg-white p-2 rounded-md">
                        <BiAlarm className="mt-1" />
                        <p className="hover:text-red-600">ending soon</p>
                    </div>

                    <div className="flex gap-4 hover:bg-white p-2 rounded-md">
                        <AiOutlineFire className="mt-1" />
                        <p className="hover:text-red-600">latest coupons</p>
                    </div>
                </div>

                <div>
                    <ProductSlider />
                </div>
            </div>

            <div >
                <div className="text-3xl text-center font-semibold capitalize">deals of the day</div>
                <div className="my-10">
                    <Dealsoftheday />
                </div>
            </div>

            <div>
                <div className="text-3xl text-center font-semibold capitalize">coupon by category</div>
                <div className="mt-6">
                    <CategoryData />
                </div>
            </div>

            <div className="bg-white my-8">
                <div className="md:mx-20 lg:mx-20 mx-10 w-full rounded-xl  py-4">
                    <img src="https://i.ytimg.com/vi/gOA-zK5vfzw/maxresdefault.jpg" alt="" className="w-5/6 h-48 object-fill rounded-xl" />
                </div>

                <div className="">
                    <section className="text-gray-600 body-font">
                        <div className="container px-7 py-6 mx-12">
                            <div className="mx-20 text-center my-2">
                                <h1 className=" capitalize font-bold text-2xl   text-slate-800">popular membership</h1>
                                <div className=" flex justify-center my-4">
                                    <p className="w-20 text-center  p-0.5 bg-red-600"></p>
                                </div>

                            </div>
                            <div >
                                <Popularmembership />
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            <div>
                <Subscribe />
            </div>

            <div>
                <Howitworks />
            </div>


        </div>
    )
}

export default Home
