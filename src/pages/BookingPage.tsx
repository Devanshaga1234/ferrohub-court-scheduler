
import React from 'react';
import Navbar from '@/components/Navbar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const BookingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Book a Court</h1>
          <p className="text-xl text-gray-600">
            Select your preferred location, date, and time slot
          </p>
        </div>

        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Court Booking</CardTitle>
            <CardDescription>
              Choose your court, date and time for a 30-minute session (₹750)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-center text-gray-600">
              Booking system coming soon...
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BookingPage;
