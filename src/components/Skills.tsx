import React from "react";

export const Skills = () => {
    return (
        <section id="skills">
            <div className="container mx-auto md:w-5/6 flex px-20 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="text-3xl md:text-5xl mb-8" style={{ fontFamily: 'Raleway, sans-serif'}}>Skills</h1>
                    <div className="grid md:grid-cols-4 gap-4" style={{ fontFamily: 'Open Sans, sans-serif'}}>
                        <div>
                            <h2 className="mb-2 text-left">Programming Languages:</h2>
                            <ul className="text-left" style={{ padding: 'revert', listStyleType: 'none'}}>
                                <li>Python</li>
                                <li>JavaScript</li>
                                <li>TypeScript</li>
                                <li>Java</li>
                                <li>C++</li>
                                <li>C</li>
                                <li>HTML/CSS</li>
                                <li>SQL</li>
                                <li>MATLAB</li>
                                <li>AJAX</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-2 text-left">Web Development Frameworks & Libraries:</h2>
                            <ul className="text-left" style={{ padding: 'revert', listStyleType: 'none'}}>
                                <li>React</li>
                                <li>Angular</li>
                                <li>Spring Boot</li>
                                <li>AlpineJS</li>
                                <li>HapiJS</li>
                                <li>NodeJS</li>
                                <li>Django</li>
                                <li>ASP.NET</li>
                                <li>NX Workspace</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-2 text-left">Testing Frameworks:</h2>
                            <ul className="text-left" style={{ padding: 'revert', listStyleType: 'none'}}>
                                <li>Cypress</li>
                                <li>JUnit</li>
                                <li>Jest</li>
                            </ul>

                            <h2 className="mt-4 mb-2 text-left">Machine Learning & Data Science:</h2>
                            <ul className="text-left" style={{ padding: 'revert', listStyleType: 'none'}}>
                                <li>Tensorflow</li>
                                <li>PyTorch</li>
                                <li>scikit-learn</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-2 text-left">Version Control & DevOps:</h2>
                            <ul className="text-left" style={{ padding: 'revert', listStyleType: 'none'}}>
                                <li>Git</li>
                                <li>Docker</li>
                                <li>Jenkins</li>
                            </ul>

                            <h2 className="mt-4 mb-2 text-left">Other:</h2>
                            <ul className="text-left" style={{ padding: 'revert', listStyleType: 'none'}}>
                                <li>Tableau</li>
                                <li>Splunk</li>
                                <li>Maven</li>
                                <li>NGRX</li>
                                <li>LATEX</li>
                                <li>Swagger</li>
                                <li>PlantUML</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
};

