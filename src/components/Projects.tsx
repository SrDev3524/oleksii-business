
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: "huurnl",
    description: "Developed a streamlined rental platform allowing customers to easily book activity equipment with free delivery across the Netherlands and Belgium. Built with Laravel and Nuxt.js, featuring integrated invoicing and automated email notifications.",
    technologies: ["Laravel", "Nuxt", "TailwindCss", "PHP"],
    image: "/images/6.png",
    github: "https://github.com/Daniekdegroot/offerte-huurbijdaniek",
    liveDemo: "https://huurnu.nl/"
  },
  {
    title: "Cue Biopharma",
    description: "WordPress theme customization for a biopharmaceutical company focused on engineered biologics designed to mimic nature's signals to selectively expand and activate specific immune cells.",
    technologies: ["WordPress", "jQuery", "CSS", "PHP"],
    image: "/images/1.png",
    github: "#",
    liveDemo: "https://www.cuebiopharma.com/"
  },
  {
    title: "Primo Exchange",
    description: "Development of a token exchange platform including API integration, theme customization, custom plugin development for token exchange, and multi-language translation implementation.",
    technologies: ["WordPress", "PHP", "JavaScript", "API Integration", "Custom Plugins"],
    image: "/images/2.png",
    github: "#",
    liveDemo: "https://primo.exchange/"
  },
  {
    title: "The Valued Stats",
    description: "Implementation of member management system using Discord bot integration and custom membership plugin. Integration of payment gateway for subscription management.",
    technologies: ["WordPress", "Discord API", "PHP", "Payment Gateway Integration"],
    image: "/images/3.png",
    github: "#", 
    liveDemo: "https://thevaluedstats.com/"
  },
  {
    title: "Bizinabox",
    description: "Contributed to a platform providing website development tools for small businesses. Added Vue.js templates with Tailwind CSS, integrated payment APIs (Stripe, PayPal), and implemented Mailcow server integration.",
    technologies: ["Vue.js", "Laravel", "Tailwind CSS", "Stripe API", "PayPal API", "Mailcow"],
    image: "/images/4.png",
    github: "#",
    liveDemo: "https://www.bizinabox.com/"
  },
  {
    title: "Viali",
    description: "E-commerce website development using Flatsome theme, UX Builder, and WooCommerce for a seamless shopping experience with optimized UI/UX.",
    technologies: ["WordPress", "WooCommerce", "Flatsome Theme", "UX Builder", "PHP"],
    image: "/images/5.png",
    github: "#",
    liveDemo: "https://viali.co.uk/"
  }
  
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-payoneer-dark dark:text-slate-100 mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 dark:text-slate-300 text-lg">
            A selection of my best work across different technologies and industries.
          </p>
        </div>
        
        <div className="space-y-16 md:space-y-24">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`grid grid-cols-1 ${index % 2 === 0 ? 'md:grid-cols-[45%_55%]' : 'md:grid-cols-[55%_45%] md:flex-row-reverse'} gap-8 md:gap-12 items-center`}
            >
              <div className={`${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-[300px] md:h-[400px] object-cover"
                  />
                </div>
              </div>
              
              <div className={`${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                <h3 className="text-2xl md:text-3xl font-bold text-payoneer-dark dark:text-slate-100 mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-slate-300 text-lg mb-6">
                  {project.description}
                </p>
                
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="bg-payoneer-light dark:bg-indigo-900/30 text-payoneer-blue dark:text-indigo-300 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-payoneer-dark hover:bg-payoneer-blue" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                  <Button className="bg-payoneer-blue hover:bg-payoneer-dark" asChild>
                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
