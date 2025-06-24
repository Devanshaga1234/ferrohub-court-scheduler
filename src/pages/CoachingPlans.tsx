
import React from 'react';
import Navbar from '@/components/Navbar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, User, Users, Calendar } from 'lucide-react';

const CoachingPlans = () => {
  const plans = [
    {
      id: 1,
      name: "1-on-1 Personal Training",
      type: "individual",
      price: 2500,
      duration: "Per Session",
      features: [
        "Personalized coaching",
        "Technique improvement",
        "Game strategy",
        "Flexible scheduling"
      ],
      coach: "Rajesh Kumar",
      icon: User
    },
    {
      id: 2,
      name: "Group Training (4 people)",
      type: "group",
      price: 4000,
      duration: "Per Month",
      features: [
        "Group dynamics",
        "Competitive play",
        "Skill building",
        "8 sessions per month"
      ],
      coach: "Priya Sharma",
      icon: Users
    },
    {
      id: 3,
      name: "Weekend Intensive",
      type: "intensive",
      price: 6000,
      duration: "Per Month",
      features: [
        "Weekend sessions",
        "Advanced techniques",
        "Tournament prep",
        "4 sessions per month"
      ],
      coach: "Arjun Reddy",
      icon: Calendar
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Coaching Plans</h1>
          <p className="text-xl text-gray-600">
            Improve your game with professional pickleball coaching
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan) => {
            const IconComponent = plan.icon;
            return (
              <Card key={plan.id} className="relative overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-2">
                    <IconComponent className="w-6 h-6 text-green-600" />
                    <CardTitle className="text-xl">{plan.name}</CardTitle>
                  </div>
                  <CardDescription>
                    Coach: {plan.coach}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <span className="text-3xl font-bold text-green-600">₹{plan.price.toLocaleString()}</span>
                    <span className="text-gray-600 text-sm ml-1">/{plan.duration}</span>
                  </div>

                  <ul className="space-y-2">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-green-600" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Subscribe to Plan
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12">
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-center">Why Choose Our Coaching?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <h3 className="font-semibold text-green-600 mb-2">Certified Coaches</h3>
                  <p className="text-sm text-gray-600">All our coaches are certified and have years of experience</p>
                </div>
                <div>
                  <h3 className="font-semibold text-green-600 mb-2">Flexible Scheduling</h3>
                  <p className="text-sm text-gray-600">Book sessions at your convenience across both locations</p>
                </div>
                <div>
                  <h3 className="font-semibold text-green-600 mb-2">Progress Tracking</h3>
                  <p className="text-sm text-gray-600">Monitor your improvement with detailed progress reports</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CoachingPlans;
