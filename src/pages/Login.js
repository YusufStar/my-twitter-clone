import React, { useEffect, useState } from 'react'
import HomeBG from "./images/homeBG.png"
import {GrTwitter} from "react-icons/gr"
import jwt_decode from "jwt-decode"
import { useNavigate } from 'react-router-dom';

function Login({setUser}) {
    const navigate = useNavigate();

    function handleCallbackResponse(response) {
        console.log("Encoded JWT ID token: " + response.credential);
        var userObject = jwt_decode(response.credential)
        console.log(userObject);
        setUser(userObject)
        setTimeout(() => {
            navigate('/home')
        }, 250);
    }
    useEffect(() => {
        {/* Global Google */}
        window.google.accounts.id.initialize({
            client_id: "635363300035-9k3jdkusc1q03tdbo8kbq0bffquj5l8c.apps.googleusercontent.com",
            callback: handleCallbackResponse
        })

        window.google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            {theme: "outline", size: "large", width: "250px", height: "100px"}
        );
    }, [])

  return (
    <div className='h-screen flex items-center flex-col bg-black'>
        {/* Login Content */}
        <div className="h-[95%] w-[100%] flex justify-between flex-row">
            {/* Left Content */}
            <div className="w-[55%] h-[100%] flex items-center relative justify-center">
                <img draggable="false" src={HomeBG} className="absolute z-0 w-[100%] h-[100%]" />
                <div className="h-[50%] w-[100%] flex items-center justify-center">
                    <GrTwitter draggable="false" className="w-[350px] z-20 h-[350px] fill-white"/>
                </div>
            </div>

            {/* Right Content */}
            <div className="w-[44%] flex flex-col items-start justify-center">
                <GrTwitter className='w-[43px] h-[35px] fill-white mb-10'/>
                <h1 className='text-white text-6xl font-bold mb-10'>Happening now</h1>
                <h1 className='text-white text-4xl font-bold mb-10'>Join Twitter today.</h1>
                <div id="signInDiv"></div>
            </div>
        </div>

        {/* Footer */}
        <ul className='h-[5%] w-[80%] flex items-center justify-between flex-row text-[12px] text-[#6a6f74]'>
            <li>About</li>
            <li>Help Centre</li>
            <li>Terms of Service</li>
            <li>Privact Policy</li>
            <li>Cookie Policy</li>
            <li>Accessiblity</li>
            <li>Ads info</li>
            <li>Blog</li>
            <li>Status</li>
            <li>Careers</li>
            <li>Brand Resources</li>
            <li>Advertising</li>
            <li>Marketing</li>
            <li>Twitter for Business</li>
            <li>Developers</li>
            <li>Directory</li>
            <li>Settings</li>
            <li>© 2022 Twitter, Inc.</li>
        </ul>
    </div>
  )
}

export default Login