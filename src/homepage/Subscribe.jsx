
const Subscribecompo = () => {
    return (
        <div>
            <section className="text-gray-600 w-10/12  mx-20 rounded-2xl  bg-white p-2  body-font overflow-hidden">
                <div className="container ">
                    <div className="  flex flex-wrap ">
                        <img alt="ecommerce" className="lg:w-5/12 w-full lg:h-96 h-64 object-fill object-center rounded-xl" src="https://images.vexels.com/media/users/3/155319/isolated/preview/5a0a358c8d3b1ff70639bce44ef827a0-mailwoman-delivering-letters-by-vexels.png" />
                        <div className="lg:w-5/12 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-8">

                            <h1 className="w-64 text-gray-800 text-3xl font-semibold font-serif  mb-1">Subscribe to our Newsletter!</h1>
                            <p className="my-4 w-60">Be the first to get exclusive offers and the latest news.</p>
                            <input type="text" placeholder="Enter your email address " className="w-96 py-2 px-4 rounded-lg border-gray-400 border-2" />
                            <button className="bg-red-600 text-sm font-semibold  text-white uppercase py-2 px-10 mt-5 rounded-lg w-fit">subscribe</button>

                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Subscribecompo
