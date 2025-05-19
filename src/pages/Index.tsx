
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import GlobalReach from "@/components/GlobalReach";
import ContactMe from "@/components/ContactMe";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Projects />
        <Features />
        <Testimonials />
        <GlobalReach />
        <ContactMe />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
