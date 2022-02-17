import React, { Component } from 'react'

export default class Contact extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       Username:'',
       Email:'',
       Ph_no:'',
       errormessage:''
    }
  }
  
  render() {
    return (
      
        <div>
          <form className='form'>
            <h1>Contact</h1>

            <label>Name</label>
            <input type="text" placeholder='Name' name='Username'/><br /><br />



            <label >Email</label>
            <input type="Email" placeholder='Email' name='Email' /><br /><br />



            <label >Phone no</label>
            <input type="number" placeholder='Phone no' name='ph_no'/><br /><br />


            <label>Message</label>
            <textarea type="text-area" placeholder='Message'></textarea><br /><br />

            <input type="button" value="Reset"  />
            <input type="submit" value="submit" />


          </form>
        </div>
      
    )
  }
}




