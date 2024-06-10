import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Product from "./components/Product";
import About from "./components/About";
import TotalPrice from "./components/TotalPrice";

export default function App() {
  // Gave inventory an id so there would been a key for it index with. It does so auto automatically but kept giving a warning.
  const inventory = [
    {
      id: 1,
      title: "Tennis Ball",
      price: 3,
      description: "Lorem",
      image:
        "https://images.unsplash.com/photo-1510697963685-53101e615777?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title: "Volleyball",
      price: 10,
      description: "Lorem",
      image:
        "https://images.unsplash.com/photo-1593115379577-a21ea97d6645?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      title: "Football",
      price: 20,
      description: "Lorem",
      image:
        "https://images.unsplash.com/photo-1486286701208-1d58e9338013?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      title: "Cricket Ball",
      price: 5,
      description: "Lorem",
      image:
        "https://images.unsplash.com/photo-1587385789097-0197a7fbd179?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      title: "Rugby Ball",
      price: 20,
      description: "Lorem",
      image:
        "https://images.unsplash.com/photo-1626708272693-41c200198130?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 6,
      title: "Bowling Ball",
      price: 50,
      description: "Lorem",
      image:
        "https://images.unsplash.com/photo-1560293671-7d3b1ca9823d?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 7,
      title: "Golf ball",
      price: 10,
      description: "Lorem",
      image:
        "https://images.unsplash.com/photo-1562204320-31975a5e09ce?q=80&w=2047&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 8,
      title: "Baseball",
      price: 2,
      description: "Lorem",
      image:
        "https://images.unsplash.com/photo-1554591203-d6433caa8495?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 9,
      title: "Ping Pong Ball",
      price: 0.5,
      description: "Lorem",
      image:
        "https://images.unsplash.com/photo-1622389993209-dbdd7239a5ca?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 10,
      title: "Basket Ball",
      price: 3,
      description: "Lorem",
      image:
        "https://images.unsplash.com/photo-1567113379515-6e85e7168eb1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  // Use state for total price to be passed as props to receive onClick from Products and pass the value to TotalPrice.
  const [totalPrice, setTotalPrice] = useState(0);

  // Buy button onClick handler
  const addPrice = (e) => {
    setTotalPrice(parseFloat(e.target.value) + totalPrice);
  };

  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          path="/products"
          element={
            <div>
              {/* TotalPrice renders by default at the moment  */}
              <TotalPrice totalPrice={totalPrice} />
              <div id="productDisplay">
                {/* For each object in the inventory array a Product const is made with the values of that object */}
                {inventory.map((item) => (
                  <Product
                    key={item.id}
                    title={item.title}
                    price={item.price}
                    description={item.description}
                    image={item.image}
                    // Passing the handler
                    addPrice={addPrice}
                  />
                ))}
              </div>
            </div>
          }
        />
        <Route
          path="/about"
          element={
            <div>
              <TotalPrice totalPrice={totalPrice} />
              <About />
            </div>
          }
        />
      </Routes>
    </div>
  );
}
