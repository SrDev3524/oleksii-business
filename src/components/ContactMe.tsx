
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactMe: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted!');
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Get In Touch
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-lg">
            Have a project in mind? Let's discuss how I can help bring your ideas to life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12">
          <div className="lg:col-span-2 space-y-8">
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">Contact Information</h3>
            <p className="text-slate-600 dark:text-slate-300">
              Feel free to reach out through any of the following contact methods. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-indigo-600 dark:text-indigo-400 mr-4 mt-1" />
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100">Email</h4>
                  <a href="mailto:oleksii.kozakov991@gmail.com" className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400">
                    oleksii.kozakov991@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-indigo-600 dark:text-indigo-400 mr-4 mt-1" />
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100">Phone</h4>
                  <a href="tel:+380635239399" className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400">
                    +380635239399
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-indigo-600 dark:text-indigo-400 mr-4 mt-1" />
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100">Location</h4>
                  <p className="text-slate-600 dark:text-slate-300">
                    Ozerna street, 17<br />
                    Chernihivska, Ukraine<br />
                    ZIP: 15432
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-800 p-6 md:p-8 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Name</label>
                  <Input id="name" placeholder="Your name" required className="bg-slate-50 dark:bg-slate-700 border-slate-200 dark:border-slate-600" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email</label>
                  <Input id="email" type="email" placeholder="Your email" required className="bg-slate-50 dark:bg-slate-700 border-slate-200 dark:border-slate-600" />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Subject</label>
                <Input id="subject" placeholder="Subject of your message" required className="bg-slate-50 dark:bg-slate-700 border-slate-200 dark:border-slate-600" />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Message</label>
                <Textarea id="message" placeholder="Your message" rows={5} required className="bg-slate-50 dark:bg-slate-700 border-slate-200 dark:border-slate-600" />
              </div>
              
              <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
