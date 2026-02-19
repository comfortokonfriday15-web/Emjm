import React from 'react';

export interface Room {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  competitorPrices: {
    expedia?: number;
    hotelsng?: number;
  };
  amenities: string[];
}

export interface Amenity {
  id: string;
  name: string;
  icon: React.ComponentType<any>;
  description?: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
}