import './App.css';
import React, {useState} from 'react';


function App() {

  const [items, setItems] = useState([
    {name: "Oat Milk", isPurchased: false}, 
    {name: "Beans", isPurchased: false},
    {name: "Pokemon Cards", isPurchased: false},
    {name: "Olive Bread", isPurchased: false}
  ]);

  const [newItem, setNewItem] = useState("");

  const itemNodes = items.map((item, index) => {
    return(
      <li key={index} className={item.isPurchased ? "purchased" : "not-purchased"}>
        <span>{item.name}</span>
        {item.isPurchased ? 
        <span className="purchased">Purchased</span> : 
        <button onClick={() => purchaseItem(index)}>Purchase</button>}
      </li>
    )
  });
  
  const saveNewItem = (event) => {
    event.preventDefault(); //prevent the default behaviour of forms
    const newItemArr = [...items]; //clone the items array
    newItemArr.push( {name:newItem, isPurchased:false} ); //push new object to cloned arr
    setItems(newItemArr); //set the items state
    setNewItem(""); //reset newItems
    
    
  }

  const handleInputChange = (event) => {
    setNewItem(event.target.value);
  }

  const purchaseItem = (index) => {
    const newItemArr = [...items];
    newItemArr[index].isPurchased = true;
    setItems(newItemArr);

  }

  return (
    <div className="App">

      <h1>Shopping List</h1>
      <hr></hr>

      <form onSubmit={saveNewItem}>
        <label htmlFor='"new-item"'>Add new items</label>
        <input type="text" 
        id="new_item" 
        value={newItem} 
        onChange={handleInputChange}>
        </input>
        <input type="submit" value="save-new-item"/>
      </form>

      <ul>
        {itemNodes}
      </ul>

      <form>
      </form>

    </div>
  );
}

export default App;
