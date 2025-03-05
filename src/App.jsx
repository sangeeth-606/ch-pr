import { useState } from "react";
import ProductCard from "./components/ProductCard";

const App = () => {
  // Static products array (provided in the boilerplate)
  const initialProducts = [
    {
      id: 1,
      name: "Product 1",
      description: "This is the first product.",
      image: "https://via.placeholder.com/150",
      avgRating: 0,
      totalRatings: 0,
    },
    {
      id: 2,
      name: "Product 2",
      description: "This is the second product.",
      image: "https://via.placeholder.com/150",
      avgRating: 0,
      totalRatings: 0,
    },
    {
      id: 3,
      name: "Product 3",
      description: "This is the third product.",
      image: "https://via.placeholder.com/150",
      avgRating: 0,
      totalRatings: 0,
    },
  ];


  const [products, setProducts] = useState(initialProducts);

  // Handler for rating submission
  const handleRatingSubmit = (productId, newRating) => {
    setProducts((befoProd) =>
      befoProd.map((product) =>
        product.id === productId
          ? {
              ...product,
              avgRating:
                (product.avgRating * product.totalRatings + newRating) /
                (product.totalRatings + 1),
              totalRatings: product.totalRatings + 1,
            }
          : product
      )
    );
  };

  return (
    <div
      style={{
        padding: "32px",
        backgroundColor: "#f9fafb",
        minHeight: "100vh",
      }}
    >
      <h1
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "32px",
        }}
      >
        Product Ratings
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "24px",
        }}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onRatingSubmit={handleRatingSubmit}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
