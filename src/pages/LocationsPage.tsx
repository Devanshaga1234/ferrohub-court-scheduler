import React from 'react';
import Navbar from '@/components/Navbar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Phone, Mail, Navigation } from 'lucide-react';
import { Link } from 'react-router-dom';

const LocationsPage = () => {
  const locations = [
    {
      id: 1,
      name: "Millers Road",
      area: "Vasanth Nagar",
      address: "123 Millers Road, Vasanth Nagar, Bengaluru - 560052",
      phone: "+91 98765 43210",
      email: "millersroad@ferrohubsports.com",
      timings: "6:00 AM - 11:00 PM (Daily)",
      image: "/placeholder.svg",
      features: ["Rooftop Court", "Floodlights", "Equipment Rental", "Parking Available"],
      directions: "Near Cantonment Railway Station, 5 mins from MG Road Metro"
    },
    {
      id: 2,
      name: "Budigere Cross",
      area: "Old Madras Road",
      address: "456 Budigere Cross, Old Madras Road, Bengaluru - 560049",
      phone: "+91 98765 43211",
      email: "budigere@ferrohubsports.com",
      timings: "6:00 AM - 11:00 PM (Daily)",
      image: "/placeholder.svg",
      features: ["Rooftop Court", "Floodlights", "Equipment Rental", "Parking Available"],
      directions: "Near KR Puram Railway Station, Easy access from Outer Ring Road"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Locations</h1>
          <p className="text-xl text-gray-600">
            Two premium rooftop pickleball courts across Bengaluru
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {locations.map((location) => (
            <Card key={location.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gradient-to-r from-green-400 to-green-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <MapPin className="w-16 h-16 mx-auto mb-2" />
                  <h3 className="text-2xl font-bold">{location.name}</h3>
                  <p className="text-green-100">{location.area}</p>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-green-600" />
                  <span>{location.name} - {location.area}</span>
                </CardTitle>
                <CardDescription className="text-base">
                  {location.address}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2 text-sm">
                    <Clock className="w-4 h-4 text-green-600" />
                    <span>{location.timings}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Phone className="w-4 h-4 text-green-600" />
                    <span>{location.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm col-span-full">
                    <Mail className="w-4 h-4 text-green-600" />
                    <span>{location.email}</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Features</h4>
                  <div className="flex flex-wrap gap-2">
                    {location.features.map((feature, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-start space-x-2">
                  <Navigation className="w-4 h-4 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm">Directions</h4>
                    <p className="text-sm text-gray-600">{location.directions}</p>
                  </div>
                </div>

                <div className="pt-4">
                  <Link to="/booking" state={{ selectedLocation: location.id }}>
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      Book Court at {location.name}
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Need Help Choosing?</CardTitle>
              <CardDescription>
                Both locations offer the same premium experience with professional-grade courts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-green-600 mb-2">Millers Road</h4>
                  <p>Central location, close to MG Road and Brigade Road. Perfect for city center access.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-600 mb-2">Budigere Cross</h4>
                  <p>East Bengaluru location with excellent connectivity to IT corridor and airport.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LocationsPage;
