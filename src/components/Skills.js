import htmlLogo from "../assets/svg/html.svg";
import cssLogo from "../assets/svg/css.svg";
import jsLogo from "../assets/svg/js.svg";
import phpLogo from "../assets/svg/php.svg";
import reactNativeLogo from "../assets/svg/react-native.svg";
import laravelLogo from "../assets/svg/laravel.svg";
import Carousel from 'react-multi-carousel';
import javalogo from '../assets/svg/java.svg';
import firebaselogo from '../assets/svg/firebase.svg';

import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
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

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>Here are some of the technologies and tools I work with:</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src={htmlLogo} alt="HTML Logo" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={cssLogo} alt="CSS Logo" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={jsLogo} alt="JavaScript Logo" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={phpLogo} alt="PHP Logo" />
                  <h5>PHP</h5>
                </div>
                <div className="item">
                  <img src={reactNativeLogo} alt="React Native Logo" />
                  <h5>React Native</h5>
                </div>
                <div className="item">
                  <img src={laravelLogo} alt="Laravel Logo" />
                  <h5>Laravel</h5>
                </div>
                <div className="item">
                  <img src={javalogo} alt="java Logo" />
                  <h5>Java</h5>
                </div>
                <div className="item">
                  <img src={firebaselogo} alt="firebase Logo" />
                  <h5>Firebase</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  )
}
