import React,{useState} from "react";
import "./App.css";
import Products from "./Products";
import { BsHeartFill } from "react-icons/bs";

function App() {
  
  const [item, setItem] = useState(Products);
  const [color, setColor] = useState(false);


  const filter = (categoryValue)=>{
      const newValue = Products.filter((filteredCategory)=>{
        return filteredCategory.category === categoryValue;
      })
      setItem(newValue)
  }
  

  return (
    <div className="App">
      <div className="title">
        <h1>Order Your Favorite product</h1>
      </div>
    
      <div className="nav">
        <button onClick={()=>{setItem(Products)}}>all</button>
        <button onClick={()=>{filter("mobile")}}>mobile</button>
        <button onClick={()=>{filter("laptop")}}>laptop</button>
        <button onClick={()=>{filter("tv")}}>television</button>
        <button onClick={()=>{filter("smart watch")}}>smart watch</button>
        <button onClick={()=>{filter("mobile accessory")}}>mobile accessories</button>
      </div>

      <div className="item-grid-container">
        {
        item.map( (products) =>{

          const { name, image, description, price} = products;

          return(
            <div className="item">
              <div className="icon"> 
              <BsHeartFill 
              onClick={()=>setColor((change)=>!change)}

               style={{color: color ? "red" : "#afb0af", fontSize:"1.3rem"}} />
              </div>
          <div className="col-1">
            <div className="item-img">
              <img src={image} alt={name} />
            </div>
          </div>

          <div className="col-2">
            <div className="item-details">
              <p className="product-name">{name}</p>
              <p>{description}</p>
              <div className="price_order">
                <div className="price">
                  <h3>{price}</h3>
                </div>
                <div className="order">
                    <button>BUY NOW</button>
                </div>
              </div>
            </div>
          </div>
        </div>
          )
        })
        }
       
      
        </div>
    </div>
  );
}

export default App;
