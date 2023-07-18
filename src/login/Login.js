import React from "react";
import loginImage from "../asset/webpix.png"
import Button from "../components/Button";

const Login = () =>{
    return(
        <div className="container">
        <div className="outer-div">
             <div className="avater-part">
                 <img src={loginImage} alt="" className="sign-up-img"></img>
             </div>
             <div className="form-part">
                 <div className="center-content text-center">
                    
                     <div className="container text-center form-div">
                     <h2>Welcome Back!</h2>
                     <p className="sign-up-text text-dark">Login by entering the information below</p>
                         <form>
                             <input placeholder="Email" className="mb-3 inputs" name="email" autoComplete="email"/>
                             <input placeholder="Password" className="mb-3 inputs" name="password"/>
                             <div className="d-flex justify-content-between">
                                <div class="form-check mb-3">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label class="form-check-label" for="flexCheckDefault" id="label-name">
                                        Remember me
                                    </label>
                                </div>
                                <a href="./Login" id="forgot-password">Forgot Password</a>
                                 {/* <p className="text-secondary">Already have an Account?</p> */}
                                
                             </div>

                            <Button type="submit" style={{color:'#FFF',fontWeight:'600',fontSize: '40px',width:'526px',height:'80px',backgroundColor:'#55229E',borderRadius: '12.089px',border: '1.511px solid #56229E',fontFamily:'Roboto'}}> Login</Button>
                            
                         </form>
                     </div>
                    
                 </div>
                

             </div>
        </div>
     </div>
    )

}
export default Login;