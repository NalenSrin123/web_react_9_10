
import { APIContext } from "../Context/ContextAPI"
import { useContext } from "react";
import './coffee.css'
import { Link } from "react-router-dom";
const Coffees = () => {
    const {coffees} = useContext(APIContext);  
  return (
    <>
        <div className="box-card">
            {coffees.map((coffee)=>{
                return(
                    <Link className="link" to={`/coffees/${coffee.id}`} key={coffee.id}>
                    <div className="cards">
                        <div className="image">
                            <img src={coffee.image} alt="" />
                        </div>
                        <div className="title">
                            <h3>{coffee.name}</h3> <br />
                            <p>Price:${coffee.price}</p>
                        </div>
                    </div>
                    </Link>
                );
            })}
        </div>
    </>
  )
}

export default Coffees