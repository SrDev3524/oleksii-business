
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "David Miller",
    position: "CTO at TechVision",
    testimonial: "Oleksii delivered an exceptional e-commerce platform that surpassed our expectations. His expertise in both frontend and backend development resulted in a seamless, high-performing solution.",
    rating: 5,
  },
  {
    name: "Sarah Johnson",
    position: "Product Manager at DataFlow",
    testimonial: "Working with Oleksii was a pleasure. His deep understanding of MERN stack helped us deliver our data visualization tool on time and under budget.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    position: "Founder at StartupHub",
    testimonial: "Oleksii's proficiency in multiple frameworks like Vue and Laravel allowed us to choose the best tech stack for our specific needs. The result was a highly scalable application.",
    rating: 5,
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-payoneer-dark dark:text-slate-100 mb-4">
            Client Testimonials
          </h2>
          <p className="text-gray-600 dark:text-slate-300 text-lg">
            Don't take my word for it. Here's what my clients have to say about my work.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md card-hover border border-gray-100 dark:border-slate-700">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-payoneer-blue text-payoneer-blue" />
                ))}
              </div>
              <p className="text-gray-600 dark:text-slate-300 italic mb-4">"{testimonial.testimonial}"</p>
              <div className="flex items-center mt-4">
                <div className="w-10 h-10 bg-payoneer-light dark:bg-indigo-900/30 text-payoneer-blue dark:text-indigo-300 rounded-full flex items-center justify-center font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold dark:text-slate-100">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500 dark:text-slate-400">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
