import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit}) {
  //console.log(items) -good
  //console.log(onItemFormSubmit) -good
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("")

  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }
  function handleSearchChange(search){
    setSearch(search)
  }
  console.log(items);

  const categoryFilteredItems = items.filter((item) => {
    return selectedCategory === "All" || item.category === selectedCategory
  });
  const textFilteredItems = categoryFilteredItems.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));
    

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter 
        search={search}
        onCategoryChange={handleCategoryChange} 
        onSearchChange={handleSearchChange}
      />
      <ul className="Items">
        {textFilteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
