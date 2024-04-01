import React from "react";
import myPicture from '../images/me-pic.jpeg';

export const About = () => {
  return (
    <section id="about">
      <div className="container mx-auto md:w-5/6 flex px-20 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow lg:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="text-3xl md:text-5xl mb-8" style={{ fontFamily: 'Raleway, sans-serif'}}>
              About me
            </h1>
            <p className="mb-4 leading-relaxed" style={{ fontFamily: 'Open Sans, sans-serif'}}>
              I'm a full stack software engineer eager to work on something meaningful. I've had the
              opportunity to grow my career and expand my domain knowledge in several different areas.
              I love picking up new technologies and working in an open, collaborative environment where
              I can bounce ideas off of one another. I am detail-oriented and a quick learner, making me a
              valuable asset to any team.
            </p>
            <p className="mb-4 leading-relaxed" style={{ fontFamily: 'Open Sans, sans-serif'}}>If you're looking for someone who's passionate, adaptable, and ready to hit the ground running, then I'd love to chat!</p>
            <br></br>
            <div className="flex flex-col items-center lg:flex-row md:justify-center">
              <a href="#contact" className="inline-flex mb-4 lg:mb-0 text-dark-purple bg-white border-0 py-2 px-6 focus:outline-none hover:bg-light-purple rounded-full md:text-lg text-center">Work With Me</a>
              <a href="#experience" className="ml-0 lg:ml-4 inline-flex text-white border-2 border-white py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded-full md:text-lg text-center">View Work Experience</a>
            </div>
        </div>
        <img
          alt="me"
          src={myPicture}
          style={{ width: '15rem', borderRadius: '150px 150px 0 0' }}
          />
      </div>
    </section>
  );
}