// /*
// *****ALGORITHM******


// STEP 1: USING USE_EFFECT CALL API
//             http.get(url).then((data.json())=>{
//                 main_data = data;
//             })
// STEP 2: AFTER SUCCESSFULL API CALL FILTER THE DATA BY CARD TYPE.
//             food_data = main_data.filter((item)=> ADD FILTER HERE)[SEARCH GOOGLE FOR IT IF YOU HAVE CONFUTION.]
// STEP 3: CALL CARD_GROUP COMPONENT AND SEND food_data ARRAY TO THAT COMPONENT AS INPUT. [SEARCH GOOGLE HOW TO PASS DATA FROM ONE COMPONENT TO ANOTHER IN REACT]

// */
import axios from 'axios';
import React, { Component } from 'react'
import Toggle from '../../Components/Toggle/Toggle'
import CardGroup from '../../Components/CardGroup/CardGroup';

export default class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      post: []
    }
  }
  componentDidMount() {
    //Api call
    axios
      .get("http://localhost:3000/asset/data.json")
      .then((res) => {
        this.setState({ post: res.data.filter((item) => item.Type === 'FOOD_01') });

      })
  }
  render() {
    return (
      <div>
        <Toggle />
        {
          this.state.post.length > 0 &&
          <CardGroup data={this.state.post} />
        }
      </div>
    )
  }
}
