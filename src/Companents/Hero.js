import React from 'react'
import {FaLayerGroup , FaStarOfLife , FaAccusoft , FaFacebook , FaTwitter , FaGithub} from 'react-icons/fa'
import './HeroStyles.css'

const Hero = () => {
  return (
    <div className='hero'>
        <div className='container'>
            <div className='content'>
                <div className='col-1'>
                    <h1>Data to enrich your</h1>
                    <h1>
                        <span className='primary-color'>
                            online businnes
                        </span>
                        </h1>
                        <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit. Architecto iure fuga deleniti sit! Cum doloribus, nesciunt laboriosam eos praesentium veritatis!</p>
                <div className='used-by'><p>USED BY</p></div>
                <div className='icons'>
                    <i><FaLayerGroup/> Staxx</i>
                    <i><FaStarOfLife/> Star All</i>
                    <i><FaAccusoft/> Accusoft</i>
                </div>
                </div>
                <div className='col-2'>
                    <div className='form-layout'>
                        <div className='form-container'>
                            <p className='sign-in-txt'>Sign in with</p>
                            <div className='social-login'>
                                <i><FaFacebook/></i>
                                <i><FaTwitter/></i>
                                <i><FaGithub/></i>
                            </div>
                            <div className='divider'>
                                <p>
                                    <span> Or </span>
                                </p>
                            </div>
                            <form>
                                <input type='text' placeholder='name'/>
                                <input type='email' placeholder='email'/>
                                <input type='ppassword' placeholder='password'/>
                                <button>Create your account</button>
                            </form>
                            <div className='form-footer'>
                                <p>By signing up, you agree to our
                                    <span className='primary-color'> Terms, Data Policy</span>
                                    and
                                    <span className='primary-color'> Cookies Policy</span> .
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero