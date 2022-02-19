import React from 'react'
import Food_Card from '../CommonComponents/Cards/Food_Card'
/*
*****ALGORITHM******


STEP 1: SAVE THE DATA ONE VARIAVLE COMING FROM CARD_GROUP AS INPUT.
STEP 2: CALL CARD COMPONENT BY MAPPING THE FILTERED DATA WITH REQUIRED INPUT AND SAVE THE LIST IN ONE VARIABLE.
            card_list = food_data.map((item)=>{
                return (
                    <Food_card cardData = item> [SEARCH FOR GOOGLE HOW TO PASS DATA FROM ONE COMPONENT TO ANOTHER IN REACT]
                )
            })
STEP 3: RETURN THE CARD LIST TO HOME
            return(
                <div>
                    {card_list}
                </div>
            )

*/
const CardGroup = (props) => {
return (
    <div className='row justify-content-center'>
      {
        props.data.map((item) => <Food_Card item={item} />)
      }
    </div>
  )
}
export default CardGroup