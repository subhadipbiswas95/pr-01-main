import React from "react";

const Food_Card = (props) => {
  console.log("dta", props.item);
  return(
    <div className="card m-2 customcardPadding" style={{ width: '18rem' }}>
      <img src={props.item.CardImgSrc} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.item.ItemName}</h5>
      </div>
    </div>
  )
};


export default Food_Card;
