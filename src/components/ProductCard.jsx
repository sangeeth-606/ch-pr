/* eslint-disable react/prop-types */

import RatingWidget from "./RatingWidget";

const ProductCard = ({ product, onRatingSubmit }) => {
  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "8px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        overflow: "hidden",
        transition: "box-shadow 0.3s ease",
      }}
    >
      <img
        src={product.image}
        alt={product.name}
        style={{ width: "100%", height: "192px", objectFit: "cover" }}
      />
      <div style={{ padding: "24px" }}>
        <h2
          style={{ fontSize: "20px", fontWeight: "600", marginBottom: "8px" }}
        >
          {product.name}
        </h2>
        <p style={{ color: "#4b5563", marginBottom: "16px" }}>
          {product.description}
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "16px",
          }}
        >
          <span style={{ color: "#f59e0b", fontWeight: "bold" }}>
            {product.avgRating.toFixed(1)}
          </span>
          <span style={{ color: "#6b7280", marginLeft: "4px" }}>
            ({product.totalRatings} ratings)
          </span>
        </div>
        <RatingWidget productId={product.id} onRatingSubmit={onRatingSubmit} />
      </div>
    </div>
  );
};

export default ProductCard;
