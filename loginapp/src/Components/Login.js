import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
    state = {
        email:'',
        password:'',
        errorMsg:'',
        isValid:true
      } 
     handeleInput=(e)=>{
         this.setState({
            [ e.target.name]: e.target.value
         })
     }
      
     loginDetails=(e)=>{
        e.preventDefault();
        let payload={
            "email":this.state.email,
            "password":this.state.password
            }
        console.log(payload);
        axios.post(`http://18.197.144.240:3000/auth/login`,payload)
             .then(res => {
                 console.log(res)
                if(res.data.token){
                    localStorage.setItem("Token",res.data.token)
                    console.log(res.data.token);
                    this.props.history.push("/dispay");
                }else{
                    this.setState({
                        errorMsg:res.data.message
                    })
                }
              
                
             }).catch((error) => {
                this.setState({
                    errorMsg:error
                })
                });
     }
  render() {
    return (
      <div className="container wrap">
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">Login Page</h4>
                <form>
                <div className="form-group">
                    <label htmlFor="email">Email address:</label>
                    <input type="text" name="email" className="form-control" placeholder="UserName" onChange={this.handeleInput}/><br/>
                </div>
                <div className="form-group">
                    <label htmlFor="pwd">Password:</label>
                    <input type="password" name="password" className="form-control" placeholder="Password" onChange={this.handeleInput}/><br/>
                </div>   
                    {this.state.errorMsg ? (<p className="text-danger">{this.state.errorMsg}</p>):null}
                    <button className="btn btn-primary" onClick={this.loginDetails}>Login</button>
                </form>
            </div>
        </div>
         
            

      </div>
    );
  }
}

export default Login;
