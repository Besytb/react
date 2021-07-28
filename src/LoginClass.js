import React, { Component } from 'react'
import axios from 'axios'
import BankService from  './services/bank.service'
import Test from  './Test'
import  { withRouter } from  'react-router-dom'

class LoginClass extends Component{

    state = {
        username:"",
        password:"",
        enquiries:[
          "enquiry 1",
          "enquiry 2",
          "enquiry 3"
        ]
    }
    onUserNameChange = (event) =>{
 this.setState({
     username:event.target.value
    })
    }
    onPasswordChange  = (event)=>{
        this.setState({
            password:event.target.value
           })
           }
    handleSubmit = (event)=>{
       event.preventDefault()
    
      BankService.authenticateUser(this.state.username,this.state.password)  
      .then(data=>{
        alert("Logged in")
          localStorage.setItem("token",data.token)
          this.props.history.push("/home")
          
      })
    }
render(){
    return <div> <div className="container">
<div className="main">
    <div className="row">
        <div className="col"></div>
        <div className="col"><h2>Login SBI Bank</h2></div>
        <div className="col"></div>


    </div>
    {
      this.state.enquiries.map(enquiry=><Test key={enquiry} text={enquiry}/>)
}
    
    <Test text="hello" />
    <Test text="world" />
    <Test  text="haii"/>
    <br/>
    <br/>
<form  onSubmit={this.handleSubmit} >
 <div className="mb-3">
   <label for="username" className="form-label">UserName</label>
   <input type="text"  onChange={this.onUserNameChange} className="form-control" id="username"  />
   
 </div>
 <div className="mb-3">
   <label for="Password" className="form-label">Password</label>
   <input type="password"  onChange={this.onPasswordChange}  className="form-control" id="password" />
 </div>
 
 <button type="submit"  className="btn btn-primary">Login</button>
</form>
</div>
</div>
</div>

    
}
}
export default withRouter(LoginClass)