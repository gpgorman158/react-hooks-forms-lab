import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  console.log(onItemFormSubmit)
  const [formName, setFormName] = useState("")
  const [formCategory, setFormCategory] = useState("")

  function handleSubmit (event){
    event.preventDefault();

    onItemFormSubmit({
      id : uuid(),
      name : formName,
      category : formCategory})
  }

  function handleTextInput (event){
    setFormName(event.target.value)
  }
  function handleCategory (e) {
    setFormCategory(e.target.value)
  }


  return (
    <form onSubmit={handleSubmit} className="NewItem">
      <label>
        Name:
        <input type="text" name="name" onChange={handleTextInput} value={formName} />
      </label>

      <label>
        Category:
        <select onChange={handleCategory} value={formCategory} name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
