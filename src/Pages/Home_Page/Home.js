// /*
// *****ALGORITHM DATA FETCHING, FILTERING & PASSING TO CHILD******

// STEP 1: USING USE_EFFECT CALL API
//             http.get(url).then((data.json())=>{
//                 main_data = data;
//             })
// STEP 2: AFTER SUCCESSFULL API CALL FILTER THE DATA BY CARD TYPE.
//             food_data = main_data.filter((item)=> ADD FILTER HERE)[SEARCH GOOGLE FOR IT IF YOU HAVE CONFUTION.]
// STEP 3: CALL CARD_GROUP COMPONENT AND SEND food_data ARRAY TO THAT COMPONENT AS INPUT. [SEARCH GOOGLE HOW TO PASS DATA FROM ONE COMPONENT TO ANOTHER IN REACT]

// */

// // *****ALGORITHM FOR VEG<->ALL FILTER******
/*
[ 
  STORY:
  WE ARE TRYING ACHIEVE DATA PASSING FROM CHILD TO PARENT. THE REASON IS Toggle COMPONENT IS A CHILD COMPONENT AND Home COMPONENT
  IS A PARANT COMPONENT. NOW WHEN WE CHANGE THE TOGGLE BUTTON FROM ON -> OFF OR OFF -> ON, WE ARE BASICALLY SETTING "checked"
  PROPERTY OF THAT TOGGLE BUTTON AS TRUE OR FALSE. NOW FOCUS HERE, WE NEED THESE TRUE OR FALSE VALUE TO FILTER OUR FOOD ITEM.
  CURRENTLY THESE TRUE OR FALSE VALUE ARE IN THE "Toggle" COMPONENT. AS "Toggle" IS A DIFFERENT COMPONENT AND IT IS CALLED FROM
  "Home" COMPONENT. SO BOTH THE COMPONENTS HAVE THEIR OWN SCOPE. SO THESE TRUE OR FALSE VALUE WILL NOT BE AVAILABLE IN "Home"
  COMPONENT. WE NEED TO SEND THESE VALUE TO PARENT COMPONENT (IN OUR CASE THE PARENT COMPONENT IS "Home"). SO BY FOLLWING 
  THE STEPS MENTIONED BELOW WE CAN ACHIEVE THIS.
  
                                    Home                                   Toggle
                        |````````````````````````````|         |````````````````````````````|
                        | home scope                 |         | toggle scope               |
                        | {                          |         | {                          |
                        |    state {                 |         |    state {                 |
                        |        post:[],            |         |        checked: true/false |
                        |        filteredItems:[]    | P to C  |       ... other properties |
                        |       ... other properties | ------> |       or functions()       |
                        |       or functions()       | <------ |    }                       |
                        |    }                       | C to P  | }                          |
                        | }                          |         | PROPERTIES OF Home         |
                        | PROPERTIES OF Toggle       |         | COMPONENT OR Home SCOPE    |
                        | COMPONENT OR Toggle SCOPE  |         | IS NOT AVAILABLE HERE.     |
                        | IS NOT AVAILABLE HERE.     |         |                            |
                        |____________________________|         |____________________________|
]
STEP 1: TAKE A VARIAVLE CALLED filteredItems INSITE STATE OBJECT AND TYPE OS ARRAY.
STEP 2: NOW IMPLEMENT/DEFINE A FUNCTION CALLSE "filterFoodItem" OR ANYTHING YOU WANT TO NAME IN THE "Home" COMPONENT.
        filterFoodItem (toggleValue)
          IF toggleValue === FALSE
            var tempfilteredItems = FILTER THE DATA BY ADDING FILTER FUNCTION TO THE state.post WHERE FILTER CRITERIA IS "VG_02"
            SET THE FILTERED DATA TO filteredItems variable.
          ELSE
            SET state.post DATA TO filteredItems variable.
STEP 3: SEND THE "filterFoodItem" FUNCTION TO THE "Toggle" COMPONENT BY ASSIGNING IT TO A VARIAVLE CALLED "toggleData"
        THROUGH THE <Toggle/> ELEMENT FROM "Home" COMPONENT. IT WOULD BE SAME AS DATA PASSING. USUALLY TO PASS 
        DATA YOU SEND THE VERIABLE NAME LIKE <ComponentName ChildData = {ParentData}/>, IN THE SAME WAY YOU NEED TO 
        PASS THE FUNCTION NAME. 
          <ChildComponent functionVariableName = {functionName}/>
        CHECK THE LINK FOR REFERENCE: 
        https://www.geeksforgeeks.org/how-to-pass-data-from-child-component-to-its-parent-in-reactjs/
STEP 4: SEND filteredItems TO THE CardGroup COMPONENT INSTEAD OF state.post.
STEP 5: NOW GO TO Toggle COMPONENT
STEP 6: ADD props IN THE COMPONENT
STEP 7: INSIDE handleChange FUNCTION AFTER setChecked CALL THE toggleData/functionVariableName AND SEND nextChecked AS PARAMETER,
        AS THIS nextChecked VARIABLE CONTAINS THAT TRUE OR FALSE VALUE. [ ****** ]
STEP 8: SAVE ALL CHANGES AND CHECK IN THE BROWSER

******  YOU NEED TO UNDERSTAND HOW FUNCTIONS PASSING TO CHILD AND CALLING IT AND SENDTING THE DATA TO PARENT FROM CHILD.
        IF a IS A VARIAVLE AND YOU ASSIGN 5 TO IT, TYHEN a WILL HOLD 5. SO WE CAN SAY a = 5.
        IN THE SAME WAY IF YOU ASSIGN A FUNCTION "function() => { instructions }" THEN WE CAN SAY
        a = "function() => { instructions }". NOW a IS ALSO BECAME A FUNCTION AND WILL ACT LIKE A FUNCTION. WE CAN NOW CALL 
        a LIKE THIS: a(parameter).

So the flow is like:                                      
                                                        [ 
                                                          'a' will come here and 'a' contains that function(){}.
                                                           so we can call 'a' as props.a(parameter)
                                                        ]
                                                         |`````````````````````````|
                                                         |                         v(2)
                                     Parent              |                 Child(props)
                         |````````````````````````````|  |       |`````````````````|````````````| 
                         | Parent scope               |  |       | Child scope     |            |
                         | {                          |  |       | {        |```````            | 
                   (4)|--|--> function() {            |  |       |       (3)v                   |
                      |  |      instructions          |  |       |    props.a(parameter)        |
                      |  |    }                       |  |       |          |                   |
                      |  |                            |  |       |  }       |                   |
                      |  | <Child a={function}/>      |  |       |          |                   |
                      |  |     (1)|___________        |  |       |          |                   |
                      |  | }                 |________|__|       |          |                   |
                      |  |                            |          |          |                   |
                      |  |____________________________|          |__________|___________________|
                      |_____________________________________________________| 

So passing 'a' from Parent to Child --> In Chield we are calling a(params) 
--> when we are calling a() in child basically we are calling the function() in parent. 
So data is passing from child to parent through parameters. THIS IS WHAT WE WANTED TO ACHIEVE.
*/


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
