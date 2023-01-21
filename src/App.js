import "./sass/app.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Products from "./components/Products";
import Cart from "./components/Cart";

function App() {
  const products = [
    {
      id: 1,
      name: "Beanie",
      description: "A nice beanie",
      image: "./images/beanie-2.jpg",
      price: 9,
    },
    {
      id: 2,
      name: "Belt",
      description: "A beautiful belt",
      image: "./images/belt-2.jpg",
      price: 12,
    },
    {
      id: 3,
      name: "Cap",
      description: "Just a cap",
      image: "./images/cap-2.jpg",
      price: 11,
    },
    {
      id: 4,
      name: "Hoodie",
      description: "We love it.",
      image: "./images/hoodie-2.jpg",
      price: 19,
    },
    {
      id: 5,
      name: "Logo Hoodie",
      description: "So nice !",
      image: "./images/hoodie-with-logo-2.jpg",
      price: 19,
    },
    {
      id: 6,
      name: "Pocket Hoodie",
      description: "Keep your hands warm !",
      image: "./images/hoodie-with-pocket-2.jpg",
      price: 22,
    },
    {
      id: 7,
      name: "Zipper Hoodie",
      description: "Convenient",
      image: "./images/hoodie-with-zipper-2.jpg",
      price: 25,
    },
  ];
  return (
    <div className="app">
      <Header title="Hello World" age="18" />
      <main>
        <Products products={products} />
        <Cart />
      </main>
      <Footer />
    </div>
  );
}

export default App;
