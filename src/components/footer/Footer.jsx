import React from 'react';
import { render } from '@testing-library/react';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaYoutubeSquare } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import './footer.scss';


function Footer (props) {
  return (
    <div className='footer'>
      <div className='footer__links'>
        <ul className='footer__links-column'>
          <a className='link' href='about:blank' target="_blank"><li className='footer__links-column-title'>Pizza</li></a>
          <a className='link' href='about:blank' target="_blank"> <li className='footer__links-column-item'>Order Online</li></a>
          <a className='link' href='about:blank' target="_blank"><li className='footer__links-column-item'>Nutritional Information</li></a>
          <a className='link' href='about:blank' target="_blank"><li className='footer__links-column-item'>Our Menu</li></a>
          <a className='link' href='about:blank' target="_blank"><li className='footer__links-column-item'>Student Discounts</li></a>
          <a className='link' href='about:blank' target="_blank"><li className='footer__links-column-item'>InstaGift</li></a>
          <a className='link' href='about:blank' target="_blank"><li className='footer__links-column-item'>Join the VIP Club</li></a>
        </ul>
        <ul className='footer__links-column'>
          <a className='link' href='about:blank' target="_blank"><li className='footer__links-column-title'>Contact Us</li></a>
          <a className='link' href='about:blank' target="_blank"><li className='footer__links-column-item'>Call 131 888</li></a>
          <a className='link' href='about:blank' target="_blank"><li className='footer__links-column-item'>Contact Details</li></a>
          <a className='link' href='about:blank' target="_blank"><li className='footer__links-column-item'>Feedback</li></a>
        </ul>
        <ul className='footer__links-column'>
          <a className='link' href='about:blank' target="_blank"><li className='footer__links-column-title'>Help</li></a>
          <a className='link' href='about:blank' target="_blank"><li className='footer__links-column-item'>Store Finder</li></a>
          <a className='link' href='about:blank' target="_blank"><li className='footer__links-column-item'>Site Map</li></a>
          <a className='link' href='about:blank' target="_blank"><li className='footer__links-column-item'>Zero Contact Delivery</li></a>
        </ul>
        <ul className='footer__links-column'>
          <a className='link' href='about:blank' target="_blank"><li className='footer__links-column-title'>Corporate</li></a>
          <a className='link' href='about:blank' target="_blank"><li className='footer__links-column-item'>About Us</li></a>
          <a className='link' href='about:blank' target="_blank"><li className='footer__links-column-item'>Jobs</li></a>
          <a className='link' href='about:blank' target="_blank"><li className='footer__links-column-item'>Franchising</li></a>
          <a className='link' href='about:blank' target="_blank"><li className='footer__links-column-item'>Investors Site</li></a>
        </ul>
      </div>
      <p>&nbsp;</p>
      <div className='footer__social'>
        <span className='footer__social-item'>
          <a className='link' href='about:blank' target="_blank"><FaFacebookSquare size='2rem' /></a>
        </span>
        <span className='footer__social-item'>
          <a className='link' href='about:blank' target="_blank"><FaYoutubeSquare size='2rem' /></a>
        </span>
        <span className='footer__social-item'>
          <a className='link' href='about:blank' target="_blank"><FaTwitterSquare size='2rem' /></a>
        </span>
        <span className='footer__social-item'>
          <a className='link' href='about:blank' target="_blank"><FaInstagramSquare size='2rem' /></a>
        </span>

      </div>
      <div className='footer__privacy'>
        <a className='link' href='about:blank' target="_blank"><span className='footer__privacy-item'>
          PRIVACY&nbsp;&nbsp;
                  </span></a>
        <span className='footer_privacy_item'>
          |
                  </span>
        <a className='link' href='about:blank' target="_blank"><span className='footer__privacy-item'>
          &nbsp;&nbsp;ONLINE&nbsp;TERMS&nbsp;AND&nbsp;CONDITIONS
                  </span></a>
      </div>
    </div>
  );

}
export default Footer;