
import { APIContext } from "../Context/ContextAPI"
import { useContext } from "react";
import './coffee.css'
const Coffees = () => {
    const {coffees} = useContext(APIContext);  
  return (
    <>
        <div className="box-card">
            {coffees.map((coffee)=>{
                return(
                    <div className="card">
                <div className="image">
                    <img src={coffee.image} alt="" />
                </div>
                <div className="title">
                    <h3>{coffee.name}</h3> <br />
                    <p>Price:${coffee.price}</p>
                </div>
            </div>
                );
            })}
        </div>
    </>
  )
}

export default Coffees