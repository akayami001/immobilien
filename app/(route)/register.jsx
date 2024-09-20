"use client"
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
import { useState } from "react";
// import apiRequest from "../../lib/apiRequest";
import Image from "next/image";
import Link from "next/link";

function Register() {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);


  
  return (
    <div className="registerPage">
      <div className="formContainer">
        <form onSubmit={()=> console.log('submit')}>
          <h1>Create an Account</h1>
          <input name="username" type="text" placeholder="Username" />
          <input name="email" type="text" placeholder="Email" />
          <input name="password" type="password" placeholder="Password" />
          <button disabled={isLoading}>Register</button>
          {error && <span>{error}</span>}
          <Link href="/login">Do you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <Image src="/bg.png" alt="background" width={24} height={32}/>
      </div>
    </div>
  );
}

export default Register;