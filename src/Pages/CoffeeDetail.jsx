
import React, { useContext, useState } from 'react'
import { APIContext } from '../Context/ContextAPI'
import { useParams } from 'react-router-dom';
import Payment from './Payment';
const CoffeeDetail = () => {
  const [togglePay,setTogglePay]=useState(true);
    const [qty,setQty] = useState(1);
    function handleQty(e){
        setQty(e.target.value);
    }
    const id =useParams();
    const {coffees}=useContext(APIContext);
    const coffee = coffees.find((coffee) => coffee.id == id.id);
    function handlePayment(){
        setTogglePay(!togglePay);
    }
  return (
      <>

      
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
             <button onClick={handlePayment}>Pay</button>
        </div>
    </div>
    {togglePay ? '':<Payment />}
    </>
  )
}

export default CoffeeDetail