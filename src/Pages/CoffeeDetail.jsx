
import React, { useContext, useState } from 'react'
import { APIContext } from '../Context/ContextAPI'
import { useParams } from 'react-router-dom';
const CoffeeDetail = () => {
    const [qty,setQty] = useState(1);
    function handleQty(e){
        setQty(e.target.value);
    }
    const id =useParams();
    const {coffees}=useContext(APIContext);
    const coffee = coffees.find((coffee) => coffee.id == id.id);
    console.log(coffee);
    
  return (
    
        <div className="detail">
        <div className="image">
            <img src={coffee.image} alt="" />
        </div>
        <div className="description">
             <h1>Name :{coffee.name}</h1>
       
             <h1>Price :{coffee.price} $</h1>
       
             <h1>QTY : {qty}</h1>
             <input min={1} type="number" name="" id="" value={qty}  onChange={handleQty}/> 
             <h1>Total :{coffee.price*qty}$</h1>
             <h1>Description</h1>
             <p>{coffee.description}</p>
             <button>Pay</button>

        </div>
    </div>
  )
}

export default CoffeeDetail