
import React from "react";
import imagenPrueba from "../../img/rigo-baby.jpg"
const Card = (props) => {
    return (
      <>
        <div className="card" key={props.key}>
  <img src={imagenPrueba}/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.content}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
</>
    );
  }
  
  export default Card;
  