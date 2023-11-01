import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import SliderData from '../SliderData';

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 1
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};


const Slider = () => {
    return (
        <Carousel infinite={true} showDots={true} arrows={true} responsive={responsive}>
            {SliderData.map((item) => {
                return (
                    <>
                        <div >
                            <img src={item.img} alt="" className='rounded-3xl w-full h-96 object-fill' />
                        </div>
                    </>
                )
            })}

        </Carousel>

    )
}

export default Slider
