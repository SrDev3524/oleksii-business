
import React from 'react';
import { Github, Linkedin, Mail, Twitter, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center mb-6">
              <span className="text-2xl font-bold">Oleksii</span>
              <span className="text-xs bg-indigo-600 dark:bg-indigo-500 px-1 ml-1 rounded">Dev</span>
            </div>
            <p className="text-slate-300 mb-6">
              Full Stack Developer specializing in modern web technologies.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-300 hover:text-white transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="mailto:oleksii.kozakov991@gmail.com" className="text-slate-300 hover:text-white transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Expertise</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Frontend Development</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Backend Systems</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">WordPress Solutions</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">API Integration</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">E-commerce</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#projects" className="text-slate-300 hover:text-white transition-colors">Projects</a></li>
              <li><a href="#features" className="text-slate-300 hover:text-white transition-colors">Skills</a></li>
              <li><a href="#testimonials" className="text-slate-300 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#global-reach" className="text-slate-300 hover:text-white transition-colors">Experience</a></li>
              <li><a href="#contact" className="text-slate-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-indigo-400" />
                <a href="mailto:oleksii.kozakov991@gmail.com" className="text-slate-300 hover:text-white transition-colors">
                  oleksii.kozakov991@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-indigo-400" />
                <a href="tel:+380635239399" className="text-slate-300 hover:text-white transition-colors">
                  +380635239399
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-slate-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Oleksii Kozakov. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Terms</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors text-sm">Privacy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
