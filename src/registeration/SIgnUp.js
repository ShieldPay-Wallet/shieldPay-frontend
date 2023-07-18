import React, { useEffect, useRef, useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal"
import "./style.css"
import signImage from "../asset/signup.png";



const SignUp = () =>{
    const [show,setShow]= useState(false)
    const modalRef = useRef(null)
     
    const handleSubmit = (e) =>{
        e.preventDefault();
        setShow(true)
    }
    const handleCancelClick = (event)=>{
        if(modalRef.current && !modalRef.current.contains(event.target)){
            setShow(false);
        }
    }
    useEffect(()=>{
        document.addEventListener('click', handleCancelClick);
        return () => {
        document.removeEventListener('click', handleCancelClick);
        }
    },[])
    return(
        <div className="container">
           <div className="outer-div">

                <div className="avater-part">
                    <img src={signImage} alt="" className="sign-up-img"></img>
                </div>
                <div className="form-part">
                    <div className="center-content text-center">
                       
                        <div className="container text-center form-div">
                        <h2>Welcome!</h2>
                        <p className="sign-up-text text-dark">Sign up by entering the information below</p>
                            <form onSubmit={handleSubmit}>
                                <input placeholder="First Name" className="mb-3 inputs" name="firstName" autoComplete="given-name"/>
                                <input placeholder="Last Name" className="mb-3 inputs" name="lastName" autoComplete="name"/>
                                <input placeholder="Email" className="mb-3 inputs" name="email" autoComplete="email"/>
                                <input placeholder="Password" className="mb-3 inputs" name="password"/>
                                <div className="d-flex justify-content-between">
                                    <p className="text-secondary">Already have an Account?</p>
                                    
                                    <a href="./Login">Login</a>
                                </div>
                                <Modal show={show} ref={modalRef}> 
                                    <p>Kindly check your email to get your OTP number <br/> for Account verification</p>
                                </Modal>

                               <Button type="submit" style={{color:'#FFF',fontWeight:'600',fontSize: '40px',width:'526px',height:'80px',backgroundColor:'#55229E',borderRadius: '12.089px',border: '1.511px solid #56229E',fontFamily:'Roboto'}}> sign up</Button>
                             
                               
                            </form>
                        </div>
                       
                    </div>
                   

                </div>
           </div>
        </div>
    );
  
}
export default SignUp;