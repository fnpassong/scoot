import heroMobile from '../assets/images/home-hero-mobile.jpg';
import heroTablet from '../assets/images/home-hero-tablet.jpg';
import heroDesktop from '../assets/images/home-hero-desktop.jpg';

import right from '../assets/patterns/right-arrow.svg';



import '../scss/stylos/hero.scss';
import { Boton } from './Boton';


export const Hero = () => {

    const text = 'get scooting';

  return (
     <div className="hero">

        <picture className="hero__img">
            <source srcSet= {heroDesktop} media='(min-width:1440px)' />
            <source srcSet= {heroTablet}  media='(min-width:768px)' />
            <img src= {heroMobile}  alt="" />            

        </picture>

        <div className="hero__text">

            <div className="hero__title">
                <h3>Scooter sharing made simple</h3>
            </div>

            <div className="hero__paragraph">
                <p>Scoot takes the hassle out of urban mobility. Our bikes are placed in convenient locations in each of our cities. Use our app to locate the nearest bike, unlock it with a tap, and you’re away!</p>
            </div>

            <Boton texto= {text} />

            <div className="shapes">
                <img src= {right} alt="" />
                <div className="circles">

                    <div></div>
                    <div></div>
                    <div></div>

                </div>
            </div>


        </div>

            
       




     </div>
  )
}
