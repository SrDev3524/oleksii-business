
import React from 'react';
import { Button } from '@/components/ui/button';

const solutions = [
  {
    title: "B2B Payments",
    description: "Optimize your accounts payable and receivable with our flexible global payment solutions.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=2426&h=1728&auto=format&fit=crop&q=80",
    features: ["Supplier payments", "Batch payments", "API integration", "Payment approvals"]
  },
  {
    title: "Cross-Border Commerce",
    description: "Expand globally and accept payments from customers and marketplaces worldwide.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=3882&h=2584&auto=format&fit=crop&q=80",
    features: ["Marketplace withdrawals", "Store management", "Tax solutions", "Currency conversion"]
  },
  {
    title: "Enterprise Solutions",
    description: "Custom payment solutions for large organizations with complex global payment needs.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=4846&h=3431&auto=format&fit=crop&q=80",
    features: ["Mass payouts", "Enterprise dashboard", "Dedicated support", "Custom integrations"]
  }
];

const Solutions: React.FC = () => {
  return (
    <section id="solutions" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-payoneer-dark mb-4">
            Business Payment Solutions
          </h2>
          <p className="text-gray-600 text-lg">
            Tailored payment services to help your business grow in the global marketplace.
          </p>
        </div>
        
        <div className="space-y-16 md:space-y-24">
          {solutions.map((solution, index) => (
            <div 
              key={index} 
              className={`grid grid-cols-1 ${index % 2 === 0 ? 'md:grid-cols-[45%_55%]' : 'md:grid-cols-[55%_45%] md:flex-row-reverse'} gap-8 md:gap-12 items-center`}
            >
              <div className={`${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src={solution.image} 
                    alt={solution.title} 
                    className="w-full h-[300px] md:h-[400px] object-cover"
                  />
                </div>
              </div>
              
              <div className={`${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                <h3 className="text-2xl md:text-3xl font-bold text-payoneer-dark mb-4">
                  {solution.title}
                </h3>
                <p className="text-gray-600 text-lg mb-6">
                  {solution.description}
                </p>
                
                <ul className="grid grid-cols-2 gap-x-4 gap-y-3 mb-8">
                  {solution.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <div className="w-5 h-5 rounded-full bg-payoneer-light text-payoneer-blue flex items-center justify-center mr-2">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button className="bg-payoneer-blue hover:bg-payoneer-dark">
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
