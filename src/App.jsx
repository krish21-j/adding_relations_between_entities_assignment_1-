import React from "react";
import "./App.css";

const destinations = [
  {
    id: 1,
    name: "Bali",
    location: "Indonesia",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
    description: "Tropical paradise with beautiful beaches and vibrant culture",
    price: "$1,200"
  },
  {
    id: 2,
    name: "Paris",
    location: "France",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    description: "City of love, art, and exquisite cuisine",
    price: "$1,500"
  },
  {
    id: 3,
    name: "Santorini",
    location: "Greece",
    image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e",
    description: "Stunning sunsets and white-washed architecture",
    price: "$1,800"
  },
  {
    id: 4,
    name: "Tokyo",
    location: "Japan",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf",
    description: "Modern city with rich traditions and amazing food",
    price: "$2,000"
  }
];

const DestinationCard = ({ name, location, image, description, price }) => {
  return (
    <div className="card">
      <img src={image} alt={name} className="card-image" />
      <div className="card-content">
        <h2>{name}</h2>
        <h4>{location}</h4>
        <p>{description}</p>
        <p className="price">{price}</p>
      </div>
    </div>
  );
};

const DestinationContainer = () => {
  return (
    <div className="container">
      {destinations.map((destination) => (
        <DestinationCard key={destination.id} {...destination} />
      ))}
    </div>
  );
};

function App() {
  return (
    <div className="app">
      <h1>Top Travel Destinations</h1>
      <DestinationContainer />
    </div>
  );
}

export default App;