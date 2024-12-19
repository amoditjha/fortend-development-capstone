import React from "react";
import resturantChef from "../../assets/images/restaurant-chef.jpg";
import resturantFood from "../../assets/images/restaurant-food.jpg";

function Chicago() {
  return (
    <section className="chicago" aria-labelledby="chicago-title">
      <div className="container chicago-container">
        <div className="chicago-text">
          <h2 id="chicago-title" className="section-title">
            Our Story
          </h2>
          <p>
            Little Lemon is a family-owned Mediterranean restaurant located in
            the heart of
            <br /> Chicago.Our dishes are inspired by traditional Mediterranean
            flavors, prepared fresh <br /> every day with locally sourced
            ingredients.
          </p>
          <p>
            Whether you're here for a casual lunch or a special dinner, Little
            Lemon offers a <br /> welcoming atmosphere and a memorable dining
            experience.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Chicago;
