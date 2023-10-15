import React from "react";
import {useState} from "react";
import "../styles/Menu.css";
import Card from "../components/Card";
import Filter from "../components/Filter";
import products from "../assets/fake-data/products";

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState('');

  // Extract unique categories from products
  const categories = [...new Set(products.map((foodItem) => foodItem.category))];

  // Filter food items based on the selected category
  const filteredFoodData = selectedCategory
    ? products.filter((foodItem) => foodItem.category === selectedCategory)
    : products;



  return (
    <div className="menu-container">
      .
      <div className="menu-heading">
        <h1>Menu</h1>
        </div>
        <Filter
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <div className="food-card-container">
        {filteredFoodData.map((foodItem) => (
          <Card key={foodItem.id} foodItem={foodItem} />
        ))}
      </div>
      {/* <div className="menu-list">
        {products.map((foodItem) => (
          <Card key={foodItem.id} foodItem={foodItem} />
        ))}
      </div> */}
    </div>
  );
}

export default Menu;
