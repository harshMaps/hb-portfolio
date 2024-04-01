import React from "react";
import { TracingBeam } from "./ui/tracing-beam.tsx";
import amexLogo from '../images/american express logo.png';
import tmobileLogo from '../images/tmobile logo.png';
import uvaLogo from '../images/uva logo.png';
import leidosLogo from '../images/leidos logo.jpg';

export const Experience = () => {
  return (
    <div id="experience">
      <div className="container mx-auto w-5/6 flex md:px-20 md:py-10 md:flex-row flex-col items-center">
        <div className="lg:flex-grow flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="text-3xl md:text-5xl mb-8" style={{ fontFamily: 'Raleway, sans-serif'}}>
            Experience
          </h1>
          <TracingBeam anchorId="experience">
            <div className="max-w-3xl mx-auto antialiased" style={{ fontFamily: 'Open Sans, sans-serif'}}>
              {dummyContent.map((item, index) => (
                <div key={`content-${index}`} className="mb-12">
                  <div className="flex flex-col mb-4 items-start ml-12 md:ml-0 mr-4 md:mr-4">
                    <div className="flex items-center">
                      <img
                        alt={item.altText}
                        src={item.logo}
                        style={{ width: '3rem'}}
                        className="mr-4"
                      />
                      <div>
                        <p className="md:text-xl">{item.title}</p>
                        <p className="md:text-sm">{item.dates}</p>
                      </div>
                    </div>
                  </div>

                  <div className="ml-8 md:ml-0">
                    {item.description}
                  </div>
                  <div className="flex flex-wrap gap-2 justify-center mt-4 ml-8 md:ml-0">
                    {item.technologies.map((tech, techIndex) => (
                      <p key={`tech-${index}-${techIndex}`} className="text-white bg-dark-purple border border-2 rounded-full text-sm px-4 py-1">
                        {tech}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </TracingBeam>
        </div>
      </div>
    </div>
  );
};

const dummyContent = [
  {
    logo: tmobileLogo,
    altText: "T-Mobile logo",
    title: "T-Mobile, Software Engineer",
    dates: "March 2021 - Present",
    description: (
      <>
        <p className="mb-4 text-left">
          Worked on numerous high priority projects within the company, adapted to new tech stacks quickly,
          and delivered within tight deadlines.
        </p>
        <div className="ml-6 text-left">
          <p className="mb-2">Key highlights:</p>
          <ul style={{ padding: 'revert', listStyleType: 'none'}}>
            <li>Developed Home Internet e-commerce flows for new and existing T-Mobile customers in Angular and React</li>
            <li>Coded REST API mircoservices using Java Spring Boot for Metro by T-Mobile</li>
            <li>Improved main T-Mobile pages' site load times and enhanced the UI in a 100-days project</li>
            <li>Taught colleagues as they transitioned from Angular to React</li>
            <li>Received a department-wide spotlight award for exceeding expectations and 
            a Values in Action award for embodying T-Mobile’s core value of ‘Never Stop Growing’</li>
          </ul>
        </div>
      </>
    ),
    technologies: ["Angular", "React", "Java", "Springboot", "Typescript", "Javascript", "JUnit", "Cypress", "Jest", "AlpineJS", "HapiJs", "NodeJS", "NX Workspace", "NGRX"],
  },
  {
    logo: amexLogo,
    altText: "Amex Logo",
    title: "American Express, Software Engineering Intern",
    dates: "July 2020 - August 2020",
    description: (
      <>
        <p className="mb-4 text-left">
          Interned on the Global Marketing Technology Team. 
        </p>
        <div className="ml-6 text-left">
          <p className="mb-2">Key highlights:</p>
          <ul style={{ padding: 'revert', listStyleType: 'none'}}>
            <li>Trained a machine learning model that extracted keywords, characters, and figures to improve the speed of the
            internal creative review process</li>
            <li>Implemented session handling allowing for increased scalability, added application logging, refactored
            code, and consolidated the settings for multiple environments into a single file
            </li>
          </ul>
        </div>
      </>
    ),
    technologies: ["Django", "HTML", "Docker", "Jenkins", "Splunk"],
  },
  {
    logo: uvaLogo,
    altText: "UVA Logo",
    title: "UVA Dependable Systems & Analytics Lab, Undergraduate Research Assistant",
    dates: "January 2019 – June 2020",
    description: (
      <>
        <p className="mb-4 text-left">
          Trained a surgical robot to be able to detect different colored blocks in its workspace. Also completed my <a 
          href="https://doi.org/10.18130/v3-fd3r-pc94" className="underline underline-offset-4 text-light-purple" target="_blank">
          capstone</a> on this.
        </p>
        <div className="ml-6 text-left">
          <p className="mb-2">Key highlights:</p>
          <ul style={{ padding: 'revert', listStyleType: 'none'}}>
            <li>Conducted research on image segmentation & object detection in a drylab surgical workspace, using transfer learning</li>
            <li>Co-authored a paper for the International Symposium on Medical Robotics (ISMR) 2020 conference once this work became a
            part of a larger scaled pipeline. Read my IEEE Xplore publication <a href="https://arxiv.org/abs/2010.04785" 
            className="underline underline-offset-4 text-light-purple" target="_blank">here</a>!</li>
            <li>Achieved a high accuracy rate with a Mask RCNN model trained on our set of annotated images</li>
          </ul>
        </div>
      </>
    ),
    technologies: ["Deep Learning", "Computer Vision", "Object Detection", "Image Augmentation", "Tensorflow", "PyTorch", "scikit-learn"],
  },
  {
    logo: leidosLogo,
    altText: "Leidos Logo",
    title: "Leidos Digital Solutions Inc., Software Engineering Intern",
    dates: "May 2019 – August 2019",
    description: (
      <>
        <p className="mb-4 text-left">
          Incrementally worked on Intranet Quorum, a workflow application used by House of Representatives
          and Senate offices.
        </p>
        <div className="ml-6 text-left">
          <p className="mb-2">Key highlights:</p>
          <ul style={{ padding: 'revert', listStyleType: 'none'}}>
            <li>Wrote and maintained source code and applied .NET framework to ship 2 features</li>
            <li>Utilized REST API calls to implement a JWT authenticated DocuSign integration, allowing users to remotely sign,
            supporting multiple document formats</li>
          </ul>
        </div>
      </>
    ),
    technologies: [".NET", "ASP.NET", "C#", "SQL"],
  },
];
