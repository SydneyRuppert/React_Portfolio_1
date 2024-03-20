import React from 'react';
import Profile from "../../assets/home.jpg";
import { Link } from 'react-router-dom';
import { FaArrowRight} from "react-icons/fa6";
import "./home.css";

const Home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt="" className="home__img" />

      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>
              Hi, I am Sydney Ruppert.
            </span>
            Frontend Web Developer
          </h1>
          <p className="home__description">
          Overachieving sales representative and fiercely passionate Plant Biologist turned Front-End developer.
           A deep love for solving complex situations from a strategic perspective only further developed and honed through completing Coding Temple’s bootcamp 
           of which I gained immense knowledge on the top languages in the industry. Excellent at time management which is evident through working multiple jobs  while successfully
           passing this course and using my drive and excitement for where this industry is going to pave my own path as a developer…To be the pioneer of my own programming future.
          </p>

          <Link to = '/about' className='button'>
            More About Me{' '}
            <span className='button__icon'>
              <FaArrowRight/>
            </span>
          </Link>
        </div>
      </div>

      <div className="color__block"></div>
    </section>
  );
};

export default Home
