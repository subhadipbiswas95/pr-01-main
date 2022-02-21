import React, { useState } from "react";
import ModalComp from "../Modal/Modal";

const Food_Card = (props) => {
  const[openmodal,setOpenmodal]=useState(false)
  const onOpen = () =>{
    setOpenmodal(true)
  }
  const close=(flag)=>{
    setOpenmodal(flag);
  }
  return (
    <div className="card m-2 customcardPadding" style={{ width: '18rem', cursor:'pointer' }} onClick={onOpen}>
      {openmodal==true&&<ModalComp openmodal={openmodal} close={close} imgPath={props.item.CardImgSrc} 
      ingredients={props.item.ModalData.ItemIngredients}/>}
      <img src={props.item.CardImgSrc} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.item.ItemName}</h5>
        <div className="row">
          <div className="col-sm-6">
            <h6 className="card-subtitle mb-2 text-muted">Price:</h6>
          </div>
          <div className="col-sm-6">
            <h6 className="card-subtitle mb-2 customFontSize">{props.item.ItemPrice}</h6>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <h6 className="card-subtitle mb-2 text-muted">Rating:</h6>
          </div>
          <div className="col-sm-6">
            <h6 className="card-subtitle mb-2 customFontSize">{props.item.Rating}</h6>
          </div>
        </div>
        <div className="row">
          <h6 className="card-subtitle mb-2 text-muted">Description:</h6>
        </div>
        <div className="row">
          <h6 className="card-subtitle mb-2 customFontSize textJustify">{props.item.Description}</h6>
        </div>
      </div>
    </div>
  )
};


export default Food_Card;
