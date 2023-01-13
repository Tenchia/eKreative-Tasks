import React from 'react'
import './modules-css/Footer.css'
import { Button } from './Button'
import { Link } from 'react-router-dom'

function Footer() {
    const openInNewTab = (url) => {
        window.open(url, '_blank', 'noreferrer');
      };
    return (
      <div className='footer-container'>
        <section className='footer-subscription'>
          <p className='footer-subscription-heading'>
            Join the Adventure newsletter to receive our best vacation deals
          </p>
          <p className='footer-subscription-text'>
            You can unsubscribe at any time.
          </p>
          <div className='input-areas'>
            <form>
              <input
                className='footer-input'
                name='email'
                type='email'
                placeholder='Your Email'
              />
              <Button buttonStyle='btn--outline'>Subscribe</Button>
            </form>
          </div>
        </section>
        <div class='footer-links'>
          <div className='footer-link-wrapper'>
            <div class='footer-link-items'>
              <h2>About Us</h2>
              <Link to='/sign-up'>How it works</Link>
              <Link to='/'>Testimonials</Link>
              <Link to='/'>Careers</Link>
              <Link to='/'>Investors</Link>
              <Link to='/'>Terms of Service</Link>
            </div>
            <div class='footer-link-items'>
              <h2>Contact Us</h2>
              <Link to='/'>Contact</Link>
              <Link to='/'>Support</Link>
              <Link to='/'>Destinations</Link>
              <Link to='/'>Sponsorships</Link>
            </div>
          </div>
          <div className='footer-link-wrapper'>
            <div class='footer-link-items'>
              <h2>Social Media</h2>
              <Link to='/'>Instagram</Link>
              <Link to='/'>Facebook</Link>
              <Link to='/'>Youtube</Link>
              <Link to='/'>Twitter</Link>
            </div>
          </div>
        </div>
        <section class='social-media'>
          <div class='social-media-wrap'>
            <div class='footer-logo'>
              <Link to='/' className='social-logo'>
                BLITZKRYE
              </Link>
            </div>
            <small class='website-rights'>BLITZKRYE © 2022</small>
            <div class='social-icons'>
              <Link
                class='social-icon-link discord'
                to='/'
                target='_blank'
                onClick={() => openInNewTab('https://discord.com/invite/6tNpsJyybG')}
                aria-label='Discord'
              >
                <i class='fab fa-discord' />
              </Link>
              <Link
                class='social-icon-link artstation'
                to='/'
                target='_blank'
                onClick={() => openInNewTab('https://www.artstation.com/blitzkrye')}
                aria-label='ArtStation'
              >
                <i class='fab fa-artstation' />
              </Link>
              <Link
                class='social-icon-link youtube'
                to='/'
                target='_blank'
                onClick={() => openInNewTab('https://www.youtube.com/channel/UCYncnE_ud4Weq7WzRak9nSg/videos')}
                aria-label='Youtube'
              >
                <i class='fab fa-youtube' />
              </Link>
              <Link
                class='social-icon-link twitter'
                to='/'
                target='_blank'
                onClick={() => openInNewTab('https://twitter.com/blitzkrye_team')}
                aria-label='Twitter'
              >
                <i class='fab fa-twitter' />
              </Link>
              <Link
                class='social-icon-link Reddit'
                to='/'
                target='_blank'
                onClick={() => openInNewTab('https://www.reddit.com/r/BLITZKRYE_STUDIO/')}
                aria-label='Reddit'
              >
                <i class='fab fa-reddit' />
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }
  
  export default Footer;