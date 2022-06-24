import React from 'react';
import Navigation from './Navigation';
import '../css/home.css'
import girlcode from '../images/girlcode.JPG';


const Home = () => (
  <>
    <Navigation />
    <section className='welcome'>
      {/* <h1 className="magic-title">Welcome to our page!</h1> */}

      {/* {Banner-section} */}
      <div className="banner">
       <div className='sub-banner'>
       <h1 className='banner-title'> YOUTH UNITED FOR AFRICAN TRANSFORMATION</h1>
        <p className='banner-para'>YUFAT makes sure that refugee persons with disability are also equipped with computer skills
        </p>
       </div>
    </div>

    {/* About-section */}
    <div className='about-section'>
      <div className='about-headings'>
      <h1 className='about-title'>About Us</h1>
      <p className='about-description'>YUFAT is a charity organisation based in Kyaka II refugee Settlement, Uganda.
      </p>
      </div>

      <div className='about-row'>
        <div className='about-container'>
        {/* {about-card-1} */}
          <div className='about-card'>
            <h3 className='about-card-heading'>Vision</h3>
            <p className='about-card-text'>
                 Equip the community with creative mindset for better Africa. Through web and software development, jobless and poverty can be fought against in Africa.
            </p>
          </div>

           {/* {about-card-2} */}
           <div className='about-card'>
            <h3 className='about-card-heading'>Vision</h3>
            <p className='about-card-text'>
                 Equip the community with creative mindset for better Africa. Through web and software development, jobless and poverty can be fought against in Africa.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* {What we do-section} */}
    <section className='aim-section'>
      <div className='aim-row'>
        <div className='aim-container'>
          <div className='aim-img-container'>
            <img src={girlcode} alt="girl code"/>
          </div>

          <div className='aim-text-container'>
            <h2 className='aim-text-title'>#CodeWithHer</h2>
            
          </div>
        </div>
      </div>
    </section>
    </section>
</>
);

export default Home;