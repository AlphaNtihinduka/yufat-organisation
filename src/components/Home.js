import React from 'react';
import Navigation from './Navigation';
import '../css/home.css'
import '../images/yufat3.jpg';

const Home = () => (
  <>
    <Navigation />
    <section className='welcome'>
      {/* <h1 className="magic-title">Welcome to our page!</h1> */}
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
          <div className='about-card'>
            <h3 className='about-card-heading'>Vision</h3>
            <p className='about-card-text'>
                 Equip the community with creative mindset for better Africa. Through web and software development, jobless and poverty can be fought against in Africa.
            </p>
          </div>
        </div>
      </div>
    </div>
    </section>
</>
);

export default Home;