
import { ArrowRight, Leaf, Heart, Database } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from 'react-router-dom';
import { toast } from "@/components/ui/use-toast";
import Navbar from '@/components/Navbar';

const Index = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    toast({
      title: "Welcome!",
      description: "Thank you for getting started with GauSeva.",
    });
    // Navigate to breeding assistant page
    navigate('/breeding-assistant');
  };

  const handleLearnMore = () => {
    // Navigate to about page
    navigate('/marketplace');
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center animate-fade-up">
          <h1 className="hero-text mb-6">
            Preserving India's Sacred Heritage
            <br />
            Through Innovation
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join us in protecting and promoting indigenous cow breeds using cutting-edge AI technology
            and sustainable practices.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-dark"
              onClick={handleGetStarted}
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={handleLearnMore}
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-earth-light/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-heading text-center mb-12">Our Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="card-hover">
              <CardContent className="pt-6">
                <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">AI-Powered Breeding</h3>
                <p className="text-gray-600">
                  Advanced analytics for optimal breeding decisions and health management.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="pt-6">
                <div className="rounded-full bg-secondary/10 w-12 h-12 flex items-center justify-center mb-4">
                  <Leaf className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Sustainable Marketplace</h3>
                <p className="text-gray-600">
                  Connect with buyers and sellers of eco-friendly cow products.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="pt-6">
                <div className="rounded-full bg-accent/10 w-12 h-12 flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Community Support</h3>
                <p className="text-gray-600">
                  Join a network of farmers, experts, and enthusiasts.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
