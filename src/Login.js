import  {  useState  }  from 'react'
import BankService from  './services/bank.service'
import Test from  './Test'

function Login(){
  const  [username, setUsername ] = useState("")
  const  [password, setPassword ] = useState("")
  const  [enquiries, setEnquiries ] = useState([
    "enquiry 1",
          "enquiry 2",
          "enquiry 3"
  ])

   const onUserNameChange = (event) =>{
  setUsername(event.target.value)
       
       }
       const onPasswordChange = (event) =>{
        setPassword(event.target.value)
             
             }
         const    handleSubmit = (event)=>{
              event.preventDefault()
           
             BankService.authenticateUser(username,password)  
             .then(data=>{
               alert("Logged in")
                 localStorage.setItem("token",data.token)
                //  this.props.history.push("/home")
                 
             })
           }

    return <div> <div className="container">
    <div className="main">
        <div className="row">
            <div className="col"></div>
            <div className="col"><h2>Login SBI Bank</h2></div>
            <div className="col"></div>


        </div>
        <br/>
        <br/>
        {
      enquiries.map(enquiry=><Test key={enquiry} text={enquiry}/>)
}
        <form  onSubmit={handleSubmit} >
     <div className="mb-3">
       <label for="username" className="form-label">UserName</label>
       <input    onChange={onUserNameChange}  type="text"    className="form-control" id="username"  />
       
     </div>
     <div className="mb-3">
       <label for="Password" className="form-label">Password</label>
       <input   onChange={onPasswordChange} type="password" className="form-control" id="password" />
     </div>
     
     <button type="submit" onclick="Bank.login()" className="btn btn-primary">Login</button>
     </form>
   </div>
   </div>
</div>

}
export default Login;