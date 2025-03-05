/* eslint-disable react/prop-types */
import { useState } from "react";

const RatingWidget = ({ productId, onRatingSubmit }) => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);


  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
  };


  const handleStarHover = (hoveredRating) => {
    setHoveredRating(hoveredRating);
  };


  const handleSubmit = () => {
    if (rating < 1 || rating > 5) {
      alert("Please select a rating between 1 and 5.");
      return;
    }
    onRatingSubmit(productId, rating);
    setRating(0); 
    setHoveredRating(0); 
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div style={{ display: "flex", gap: "4px" }}>
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => handleStarClick(star)}
            onMouseEnter={() => handleStarHover(star)}
            onMouseLeave={() => handleStarHover(0)}
            style={{
              cursor: "pointer",
              border: "none",
              background: "none",
              color: star <= (hoveredRating || rating) ? "#f59e0b" : "#d1d5db",
              fontSize: "24px",
              padding: "0",
            }}
          >
            ★
          </button>
        ))}
      </div>
      <button
        onClick={handleSubmit}
        style={{
          width: "100%",
          backgroundColor: "#3b82f6",
          color: "white",
          padding: "8px 16px",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
          fontSize: "16px",
          fontWeight: "500",
          transition: "background-color 0.3s ease",
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "#2563eb")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "#3b82f6")}
      >
        Submit Rating
      </button>
    </div>
  );
};

export default RatingWidget;