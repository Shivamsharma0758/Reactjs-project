import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat enim omnis harum ex sint, consectetur repudiandae id voluptate reiciendis quis voluptates minus incidunt odio quod praesentium! Est assumenda quisquam nisi?</p>
                 <div className='footer-social-icons'>
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                 </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delievery</li>
                    <li>Privacy policy</li>
                </ul>   
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91 212-456-876</li>
                    <li>contact@HealthyFood.com</li>
                </ul>
            </div>  
        </div>
        <hr />
        <p className="footer-copyright"> Copyright 2024 @ Healthyfoo.com- All Right Reserved</p>

      
    </div>
  )
}

export default Footer
