
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import { Calendar, MapPin, Users, Clock, CreditCard, Shield } from 'lucide-react';

const Index = () => {
  const features = [
    {
      icon: <Calendar className="w-8 h-8 text-green-600" />,
      title: "Easy Booking",
      description: "Book 30-minute slots with real-time availability"
    },
    {
      icon: <MapPin className="w-8 h-8 text-green-600" />,
      title: "Two Locations",
      description: "Millers Road & Budigere Cross - Premium rooftop courts"
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "Expert Coaching",
      description: "Professional coaching plans for all skill levels"
    },
    {
      icon: <Clock className="w-8 h-8 text-green-600" />,
      title: "Flexible Timing",
      description: "Available from 6 AM to 11 PM daily"
    },
    {
      icon: <CreditCard className="w-8 h-8 text-green-600" />,
      title: "Secure Payments",
      description: "UPI, Cards, and Wallets supported"
    },
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      title: "Instant Confirmation",
      description: "Get booking confirmation via email & SMS"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Premium Pickleball Courts in Bengaluru
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100">
              Book your slot at our rooftop courts • ₹750 per 30 minutes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/booking">
                <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                  Book a Court Now
                </Button>
              </Link>
              <Link to="/locations">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
                  View Locations
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose FerroHub Sports?
            </h2>
            <p className="text-xl text-gray-600">
              Experience the best pickleball facilities in Bengaluru
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-50 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Play?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join hundreds of players who trust FerroHub Sports for their pickleball needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Book Your First Slot
              </Button>
            </Link>
            <Link to="/coaching">
              <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
                Explore Coaching Plans
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">FH</span>
                </div>
                <span className="text-xl font-bold">FerroHub Sports</span>
              </div>
              <p className="text-gray-400">
                Premium rooftop pickleball courts in Bengaluru. Book your slot today!
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Locations</h3>
              <div className="space-y-2 text-gray-400">
                <p>Millers Road, Vasanth Nagar</p>
                <p>Budigere Cross, Old Madras Road</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-gray-400">
                <p>Email: info@ferrohubsports.com</p>
                <p>Phone: +91 98765 43210</p>
                <p>Hours: 6 AM - 11 PM (Daily)</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 FerroHub Sports. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
