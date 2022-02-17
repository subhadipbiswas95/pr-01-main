import React, { useEffect, useState } from 'react'
import Food_card from '../../Components/CommonComponents/Cards/Food_card'
import Toggle from '../../Components/Toggle/Toggle'
import axios from 'axios'
import CardGroup from '../../Components/CardGroup/CardGroup'

/*
*****ALGORITHM******


STEP 1: USING USE_EFFECT CALL API
            http.get(url).then((data.json())=>{
                main_data = data;
            })
STEP 2: AFTER SUCCESSFULL API CALL FILTER THE DATA BY CARD TYPE.
            food_data = main_data.filter((item)=> ADD FILTER HERE)[SEARCH GOOGLE FOR IT IF YOU HAVE CONFUTION.]
STEP 3: CALL CARD_GROUP COMPONENT AND SEND food_data ARRAY TO THAT COMPONENT AS INPUT. [SEARCH GOOGLE HOW TO PASS DATA FROM ONE COMPONENT TO ANOTHER IN REACT]

*/



const Home = () => {
  const [users, setUsers] = useState([])
  const foodList=[]
  // const getUsers = async () => {
    // const response = await fetch("http://localhost:3000/asset/data.json");
    // setUsers(await response.json());
    // console.log(users);
    // const food_data = users.filter((items) => items.Type === 'FOOD_01')
    // console.log("food_data",food_data)
    // return(
    //   <div></div>
    // )
//     axios.get("http://localhost:3000/asset/data.json")
//     .then((response)=>{
//       console.log("response",response.data);
//       return <div></div>
//     })
//     .catch((err)=>{
//       console.log("err",err);
//     })
//   };

//   // useEffect(() => {
//   //   getUsers();
//   // },[]);

//   //filter data form JSON

//   return (
//     <div>
//       {getUsers()}
//       {/* <h1>Welcome to Home page</h1>
//       <Toggle />
//       <Food_card data={food_data}/> */}

//     </div>
//   )
useEffect(() => {
  axios
    .get("http://localhost:3000/asset/data.json")
    .then((res) => {
      setUsers(res.data)
      foodList=users.filter((item)=>
        item.Type=='FOOD_01'
      )
    })
})

return (
  foodList.length > 0 && 
    <CardGroup data={foodList} />
  
)

}

export default Home
