import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import '../css/home.css'
import girlcode from '../images/girlcode.JPG';
import cssicon from '../images/cssicon.png';
import htmlicon from '../images/htmlicon.png';
import javascripticon from '../images/javascripticon.png';
import pythonicon from '../images/pythonicon.png';


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

        {/* [aim-container-1] */}
        <div className='aim-container'>
          <div className='aim-img-container'>
            <img src={girlcode} alt="girl code"/>
          </div>

          <div className='aim-text-container'>
            <h2 className='aim-text-title'>#CodeWithHer</h2>
              <p className='aim-text-paragraph'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione ipsa consectetur perferendis similique! Lorem ipsum dolor sit
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione ipsa consectetur perferendis similique! Lorem ipsum dolor sit
               ipsLorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione ipsa consectetur perferendis similique! Lorem ipsum dolor sit
             ipLorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione ipsa consectetur perferendis similique! Lorem ipsum dolor sit
             dolor, sit amet consectetur adipisicing elit. Ratione ipsa consectetur perferendis similique! Lorem ipsum dolor sit
              </p>
          </div>
        </div>


         {/* [aim-container-2] */}
         <div className='aim-container'>
          <div className='aim-img-container'>
            <img src={girlcode} alt="girl code"/>
          </div>

          <div className='aim-text-container'>
            <h2 className='aim-text-title'>#CodeWithHer</h2>
              <p className='aim-text-paragraph'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione ipsa consectetur perferendis similique! Lorem ipsum dolor sit
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione ipsa consectetur perferendis similique! Lorem ipsum dolor sit
               ipsLorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione ipsa consectetur perferendis similique! Lorem ipsum dolor sit
             ipLorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione ipsa consectetur perferendis similique! Lorem ipsum dolor sit
             dolor, sit amet consectetur adipisicing elit. Ratione ipsa consectetur perferendis similique! Lorem ipsum dolor sit
              </p>
          </div>
        </div>

         {/* [aim-container-3] */}
         <div className='aim-container'>
          <div className='aim-img-container'>
            <img src={girlcode} alt="girl code"/>
          </div>

          <div className='aim-text-container'>
            <h2 className='aim-text-title'>#CodeWithHer</h2>
              <p className='aim-text-paragraph'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione ipsa consectetur perferendis similique! Lorem ipsum dolor sit
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione ipsa consectetur perferendis similique! Lorem ipsum dolor sit
               ipsLorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione ipsa consectetur perferendis similique! Lorem ipsum dolor sit
             ipLorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione ipsa consectetur perferendis similique! Lorem ipsum dolor sit
             dolor, sit amet consectetur adipisicing elit. Ratione ipsa consectetur perferendis similique! Lorem ipsum dolor sit
              </p>
          </div>
        </div>
      </div>
    </section>

    {/* {langs-covered} */}
    <section className='lungs-section'>
      <div className='lungs-container'>
       {/* {lung-card-1} */}
        <div className='lungs-card-image'>
        <img src={cssicon} alt="css icon" />
        </div>

       {/* {lung-card-2} */}
        <div className='lungs-card-image'>
        <img src={htmlicon} alt="html icon" />
        </div>

       {/* {lung-card-3} */}
        <div className='lungs-card-image'>
        <img src={javascripticon} alt="javascript icon" />
        </div>

       {/* {lung-card-4} */}
        <div className='lungs-card-image'>
        <img src={pythonicon} alt="python icon" />
        </div>
      </div>
    </section>
    <Footer />
    </section>
</>
);

export default Home;