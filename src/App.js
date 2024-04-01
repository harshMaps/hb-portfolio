import { TextGenerateEffect } from './components/ui/text-generate-effect.tsx';
import { FloatingNav } from "./components/ui/floating-navbar.tsx";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { BackgroundGradientAnimation } from './components/ui/background-gradient-animation.tsx';
import { About } from './components/About.tsx';
import { Skills } from './components/Skills.tsx';
import { Experience } from './components/Experience.tsx';
import { Contact } from './components/Contact.tsx';
import './App.css';
import React from 'react';

function App() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "#about",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Skills",
      link: "#skills",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Experience",
      link: "#experience",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Contact",
      link: "#contact",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    }
  ];

  const words = `A software engineer.`;

  return (
    <div className="App bg-dark-purple text-white">
      <BackgroundGradientAnimation>
        <div className="heading-container absolute z-50 inset-0 text-white pointer-events-none">
          <h1 className='headingFont'>
            Hi, I'm Harshneet!
          </h1>
          <TextGenerateEffect words={words} className='headingFont' />
        </div>
        <nav>
          <FloatingNav navItems={navItems} />
        </nav>
      </BackgroundGradientAnimation>
      <About />
      <Skills />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
