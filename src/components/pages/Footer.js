import React from 'react'
import { Link } from 'react-router-dom'
import {Button} from '../Button.js'
import './Footer.css'
function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
            Join the Aventure Newsletter to recieve our best vacation deals
        </p>
        <p className='footer-subscriptin-text'>
            You can Unsubscribe at any Time !
        </p>
        <div className='input-areas'>
            <form >
                <input className='footer-input'type='email'placeholder='Your Email'name="email"/>
                <Button buttonStyle='btn--outline'>Subscribe</Button>
            </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
            <div className='footer-link-items'>
                <h2>About Us</h2>
                
                <Link to="/">Testimonials</Link>
                <Link to="/">Carrears</Link>
                <Link to="/">Investors</Link>
                <Link to="/">Terms of Services</Link>
                <Link to="/sign-up">
                    <h3 className='color-foot'>How It Works</h3></Link>
            </div>
            <div className='footer-link-items'>
                <h2>Contact Us</h2>
                
                <Link to="/">Contact</Link>
                <Link to="/">Support</Link>
                <Link to="/">Destinations</Link>
                <Link to="/">Sponsorships</Link>
            </div>
        </div>
        <div className='footer-link-wrapper'>
            <div className='footer-link-items'>
                <h2>Videos</h2>
               
                <Link to="/">Submit Video</Link>
                <Link to="/">Ambassadors</Link>
                <Link to="/">Agency</Link>
                <Link to="/">Influencers</Link>
            </div>
            <div className='footer-link-items'>
                <h2>Social Media</h2>
                
                <Link to="/">Instagram</Link>
                <Link to="/">Facebook</Link>
                <Link to="/">Youtube</Link>
                <Link to="/">Twitter</Link>
            </div>
        </div>
        
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
            <div className='footer-logo'>
                <Link className='social-logo'>VENTURE<i className='fa-sharp fa-solid fa-dragon fa-beat-fade'/></Link>
            </div>
            
            
            <div className='social-icons'>
                <Link className='social-icon-link facebook'to="/"target="_blank"aria-label="facebook">
                    <i className='fab fa-facebook-f'></i>
                </Link>
                <Link className='social-icon-link instagram'to="/"target="_blank"aria-label="instagram">
                    <i className='fab fa-instagram'></i>
                </Link>
                <Link className='social-icon-link twitter'to="/"target="_blank"aria-label="twitter">
                    <i className='fab fa-twitter'></i>
                </Link>
                <Link className='social-icon-link youtube'to="/"target="_blank"aria-label="youtube">
                 <i className='fab fa-youtube'></i>
                </Link>
                <Link className='social-icon-link discord'to="/"target="_blank"aria-label="discord">
                 <i className='fab fa-discord'></i>
                </Link>.
            </div>
            
            <small className='website-rights'>VENTURE <i className="bi bi-c-circle"></i>2000</small>
        </div>
      </section>
    </div>
  )
}

export default Footer
