
import React from 'react';
import { Code, Database, Globe, Server, Workflow, PenTool } from 'lucide-react';

const skills = [
  {
    icon: <Code className="h-6 w-6" />,
    title: "Frontend Development",
    description: "Building responsive interfaces with React, Vue.js, jQuery and modern CSS frameworks like Tailwind."
  },
  {
    icon: <Server className="h-6 w-6" />,
    title: "Backend Development",
    description: "Creating robust APIs and server applications with Node.js, Laravel, WordPress, and Django."
  },
  {
    icon: <Database className="h-6 w-6" />,
    title: "Database & Integration",
    description: "Integrating databases (MongoDB, MySQL) and third-party APIs like Stripe, PayPal, and custom solutions."
  },
  {
    icon: <PenTool className="h-6 w-6" />,
    title: "WordPress Solutions",
    description: "Expertise in theme customization, plugin development, WooCommerce, and advanced WordPress implementations."
  },
  {
    icon: <Workflow className="h-6 w-6" />,
    title: "Project Management",
    description: "Implementing complex projects with multiple technologies and ensuring seamless integration between components."
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Multilingual Solutions",
    description: "Implementing multi-language support for global websites and applications with proper localization."
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            My Technical Skills
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-lg">
            A comprehensive toolkit for building modern web applications from concept to deployment.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm dark:shadow-slate-700/10 card-hover border border-slate-200 dark:border-slate-700"
            >
              <div className="feature-icon bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-slate-100">
                {skill.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 rounded-full text-sm font-medium">
            <span className="mr-2">●</span>
            Continuous learning and adoption of new technologies
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
