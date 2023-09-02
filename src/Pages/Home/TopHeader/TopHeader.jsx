import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import slide1 from '../../../assets/TopSlider/01.png';
import slide2 from '../../../assets/TopSlider/02.png';
import slide3 from '../../../assets/TopSlider/03.png';
import slide4 from '../../../assets/TopSlider/04.png';
import slide5 from '../../../assets/TopSlider/05.png';



const TopHeader = () => {

    return (
        <Carousel>
            <div>
                <img src={slide1} />
            </div>
            <div>
                <img src={slide2} />
            </div>
            <div>
                <img src={slide3} />
            </div>
            <div>
                <img src={slide4} />
            </div>
            <div>
                <img src={slide5} />
            </div>
        </Carousel>
    );
};

export default TopHeader;