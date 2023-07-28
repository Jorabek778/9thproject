import React from 'react'
import {FaInstagram, FaFacebook , FaTwitter , FaGithub} from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='container'>
           <div className='col solutions'>
            <h6>Solutions</h6>
            <ul>
                <li className='link' href='/'>Marketing</li>
                <li className='link' href='/'>Analytics</li>
                <li className='link' href='/'>Commerce</li>
                <li className='link' href='/'>Insights</li>


            </ul>
           </div>
           <div className='col support'>
           <h6>Support</h6>
            <ul>
                <li className='link' href='/'>Pricing</li>
                <li className='link' href='/'>Documentation</li>
                <li className='link' href='/'>Guides</li>
                <li className='link' href='/'>API Status</li>


            </ul>
           </div>
           <div className='col company'>
           <h6>Company</h6>
            <ul>
                <li className='link' href='/'>About</li>
                <li className='link' href='/'>Blog</li>
                <li className='link' href='/'>Jops</li>
                <li className='link' href='/'>Press</li>


            </ul>
           </div>
           <div className='col legal'>
           <h6>Legal</h6>
            <ul>
                <li className='link' href='/'>Claim</li>
                <li className='link' href='/'>Privacy</li>
                <li className='link' href='/'>Cookies</li>
                <li className='link' href='/'>Terms</li>


            </ul>
           </div>
           <div className='col-subscribe'>
           <h6>Subscribe to our newsletter</h6>
           <p>The latest news, articles, and resources sent to your inbox weekly.</p>
           <div className='subscribe'>
            <input type='email' placeholder='Enter your email'/>
            <button>Subscribe</button>
           </div>
          </div> 
        </div>
        <div className='footer-bottom'>
            <div className='content'>
                <div className='rights'>
                    <p>© Workflow, Inc. All rights reserved.</p>
                </div>
                <div>
                    <i className='currentColor'><FaFacebook/></i>
                    <i className='currentColor'><FaInstagram/></i>
                    <i className='currentColor'><FaTwitter/></i>
                    <i className='currentColor'><FaGithub/></i>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer