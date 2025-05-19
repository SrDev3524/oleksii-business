
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-800 text-slate-900 dark:text-white">
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gradient">
              Oleksii Kozakov
            </h1>
            <p className="text-xl md:text-2xl font-light mb-2">Full Stack Developer</p>
            <p className="text-lg md:text-xl opacity-90 mb-8 text-slate-700 dark:text-slate-300">
              Building robust, scalable web applications with MERN, Vue, Laravel, and Django. Let's turn your ideas into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white text-base font-semibold px-8 py-6">
                <a href="#projects">View Projects</a>
              </Button>
              <Button variant="outline" className="bg-transparent border-slate-400 text-slate-800 dark:border-slate-600 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700 text-base font-semibold px-8 py-6">
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
            <div className="mt-8 flex items-center space-x-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className={`w-8 h-8 rounded-full bg-indigo-${i*100} border-2 border-white dark:border-slate-800`}></div>
                ))}
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                <span className="font-bold">5+</span> years of development experience
              </p>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute inset-0 bg-indigo-300/20 dark:bg-indigo-500/20 rounded-2xl -rotate-6"></div>
              <div className="relative bg-white/20 dark:bg-slate-800/20 backdrop-blur-sm p-6 rounded-2xl border border-white/30 dark:border-slate-700/30">
                <div className="bg-white/90 dark:bg-slate-800/90 rounded-xl p-6 shadow-lg">
                  <h3 className="text-slate-900 dark:text-white font-bold text-xl mb-4">Skills Overview</h3>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center">
                      <div className="w-4 h-4 rounded-full bg-indigo-500 mr-2"></div>
                      <span className="text-slate-700 dark:text-slate-300">MERN Stack (MongoDB, Express, React, Node.js)</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 rounded-full bg-indigo-500 mr-2"></div>
                      <span className="text-slate-700 dark:text-slate-300">Vue.js & Laravel</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 rounded-full bg-indigo-500 mr-2"></div>
                      <span className="text-slate-700 dark:text-slate-300">WordPress & WooCommerce</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-4 rounded-full bg-indigo-500 mr-2"></div>
                      <span className="text-slate-700 dark:text-slate-300">Django & Python Web Development</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
