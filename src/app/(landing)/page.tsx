import { CTA } from './_components/CTA';
import { Features } from './_components/Features';
import { Footer } from './_components/Footer';
import { Hero } from './_components/Hero';
import { Nav } from './_components/Nav';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Nav />
      {/* Hero Section */}
      <Hero />
      {/* Features Section */}
      <Features />
      {/* Rest of the sections with added motion... */}
      {/* CTA Section */}
      <CTA />
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;
