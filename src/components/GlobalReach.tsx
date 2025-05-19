
import React from 'react';

const experiences = [
  { value: "5+", label: "Years Experience" },
  { value: "50+", label: "Projects Completed" },
  { value: "20+", label: "Happy Clients" },
  { value: "4", label: "Tech Stacks Mastered" }
];

const GlobalReach: React.FC = () => {
  return (
    <section id="global-reach" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 dark:from-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-payoneer-dark dark:text-slate-100 mb-4">
            Professional Experience
          </h2>
          <p className="text-gray-600 dark:text-slate-300 text-lg">
            A track record of delivering high-quality software solutions across multiple industries.
          </p>
        </div>
        
        <div className="relative mb-16">
          <div className="globe-gradient absolute inset-0 rounded-full"></div>
          <div className="relative flex justify-center">
            <div className="w-full max-w-4xl h-[300px] md:h-[400px] rounded-xl bg-payoneer-light/20 dark:bg-indigo-900/20 flex items-center justify-center">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-payoneer-blue/10 dark:bg-indigo-800/30 flex items-center justify-center relative">
                <div className="w-48 h-48 md:w-60 md:h-60 rounded-full bg-payoneer-blue/20 dark:bg-indigo-700/40 flex items-center justify-center">
                  <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-payoneer-blue/30 dark:bg-indigo-600/50 flex items-center justify-center">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-payoneer-blue dark:bg-indigo-500 flex items-center justify-center text-white font-bold text-xl">
                      Dev
                    </div>
                  </div>
                </div>
                
                {/* Connection Points */}
                {[...Array(8)].map((_, index) => {
                  const angle = (index * 45) * Math.PI / 180;
                  const radius = 140;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;
                  
                  return (
                    <div 
                      key={index}
                      className="absolute w-3 h-3 bg-payoneer-blue dark:bg-indigo-400 rounded-full"
                      style={{
                        transform: `translate(${x}px, ${y}px)`,
                        boxShadow: '0 0 10px rgba(51, 195, 240, 0.6)'
                      }}
                    ></div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {experiences.map((stat, index) => (
            <div key={index} className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm card-hover dark:border dark:border-slate-700">
              <div className="text-3xl md:text-4xl font-bold text-payoneer-blue dark:text-indigo-400 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 dark:text-slate-300">{stat.label}</div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-6 md:p-8 bg-payoneer-dark rounded-xl text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to start your project?</h3>
          <p className="mb-6 text-slate-200">Let's collaborate to create a solution tailored to your specific needs.</p>
          <button className="bg-payoneer-blue hover:bg-payoneer-accent text-white px-8 py-3 rounded-lg font-medium transition-colors">
            <a href="#contact">Get In Touch</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GlobalReach;
