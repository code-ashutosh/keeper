import React, { Component } from "react";
import firebase from "firebase";

function login(){
    const email =document.getElementById('email');
    const pass =document.getElementById('password');
    window.alert(email+"   "+pass);
}
function SignIn() {
  return (
    <div>
        <div>
            <input type="email" name="user-eamil" id="email"/>
            <br/>
            <input type="password" name="user-pass" id="password"/>
            <br/>
            <button onClick={login}></button>
        </div>
      <button
        onClick={() => {
          // Google provider object is created here.
          const googleAuth = new firebase.auth.GoogleAuthProvider();

          // using the object we will authenticate the user.
          firebase.auth().signInWithPopup(googleAuth);
        }}
      >
        Sign in with Google
      </button>
    </div>
  );
}
export default SignIn;
