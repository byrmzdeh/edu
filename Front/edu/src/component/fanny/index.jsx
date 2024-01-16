import React from 'react'
import '../fanny/style.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Fany = () => {


    return (
        <div className='fany'>

                <div className='slider1'>
                    <p className='number'>99</p>
                    <h1>Fanny Spencer</h1>
                    <div className="icons">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <p>
                        As conscious traveling Paup ers we must always be oncerned about our dear Mother <br /> Earth. If you think about it, you travel
                        across her face </p>
                </div>





            <div className="picture">
                <img width={100} src="https://preview.colorlib.com/theme/educature/img/testimonial/t1.jpg" alt="" />
                <img width={100} src="https://preview.colorlib.com/theme/educature/img/testimonial/t2.jpg" alt="" />
                <img width={100} src="https://preview.colorlib.com/theme/educature/img/testimonial/t3.jpg" alt="" />
                <img width={100} src="https://preview.colorlib.com/theme/educature/img/testimonial/t4.jpg" alt="" />

            </div>

        </div>
    )
}

export default Fany

