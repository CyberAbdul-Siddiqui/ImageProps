import React from "react";

const  Art=(props)=> {

    return(
        <>
        <div className="cards">
        <h2>{props.title}</h2>
        <img src={props.imgsrc} alt="" />
        <p>{props.desc}</p>
        <button>{props.btn}</button>
      </div>
        </>
    );

}

export default Art;