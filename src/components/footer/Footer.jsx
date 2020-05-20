import React from 'react';
import { render } from '@testing-library/react';
import '../style/Footer.css';
import { FaFacebookSquare } from 'react-icons/fa';
import {FaYoutubeSquare} from 'react-icons/fa';
import {FaTwitterSquare} from 'react-icons/fa';
import {FaInstagramSquare} from 'react-icons/fa';


function Footer(props) {

    return (
        <div className='footerContainer'>
            <div className='footer_links'>
                <ul className='footer_links_column'>
                    <a className='link' href='about:blank' target="_blank"><li className='footer_links_column_title'>Pizza</li></a>
                    <a className='link' href='about:blank' target="_blank"> <li className='footer_links_column_item'>Order Online</li></a>
                    <a className='link' href='about:blank' target="_blank"><li className='footer_links_column_item'>Our Menu</li></a>
                    <a className='link' href='about:blank' target="_blank"><li className='footer_links_column_item'>Nutritional Information</li></a>
                    <a className='link' href='about:blank' target="_blank"><li className='footer_links_column_item'>Student Discounts</li></a>
                    <a className='link' href='about:blank' target="_blank"><li className='footer_links_column_item'>InstaGift</li></a>
                    <a className='link' href='about:blank' target="_blank"><li className='footer_links_column_item'>Join the VIP Club</li></a>
                </ul>
                <ul className='footer_links_column'>
                <a className='link' href='about:blank' target="_blank"><li className='footer_links_column_title'>Contact Us</li></a>
                <a className='link' href='about:blank' target="_blank"><li className='footer_links_column_item'>Call 131 888</li></a>
                <a className='link' href='about:blank' target="_blank"><li className='footer_links_column_item'>Contact Details</li></a>
                <a className='link' href='about:blank' target="_blank"><li className='footer_links_column_item'>Feedback</li></a>
                </ul>
                <ul className='footer_links_column'>
                <a className='link' href='about:blank' target="_blank"><li className='footer_links_column_title'>Help</li></a>
                <a className='link' href='about:blank' target="_blank"><li className='footer_links_column_item'>Store Finder</li></a>
                <a className='link' href='about:blank' target="_blank"><li className='footer_links_column_item'>Site Map</li></a>
                <a className='link' href='about:blank' target="_blank"><li className='footer_links_column_item'>Zero Contact Delivery</li></a>
                </ul>
                <ul className='footer_links_column'>
                <a className='link' href='about:blank' target="_blank"><li className='footer_links_column_title'>Corporate</li></a>
                <a className='link' href='about:blank' target="_blank"><li className='footer_links_column_item'>About Us</li></a>
                <a className='link' href='about:blank' target="_blank"><li className='footer_links_column_item'>Domino’s Jobs</li></a>
                <a className='link' href='about:blank' target="_blank"><li className='footer_links_column_item'>Franchising</li></a>
                <a className='link' href='about:blank' target="_blank"><li className='footer_links_column_item'>Investors Site</li></a>
                </ul>
            </div>
            <p>&nbsp;</p>
            <div className='footer_social'> 
                <span className='footer_social_item'>
                <a className='link' href='about:blank' target="_blank"><FaFacebookSquare  size='2rem'/></a>
                </span>
                <span className='footer_social_item'>
                <a className='link' href='about:blank' target="_blank"><FaYoutubeSquare size='2rem'/></a>
                </span>
                <span className='footer_social_item'>
                <a className='link' href='about:blank' target="_blank"><FaTwitterSquare size='2rem'/></a>
                </span>
                <span className='footer_social_item'>
                <a className='link' href='about:blank' target="_blank"><FaInstagramSquare size='2rem'/></a>
                </span>

            </div>
            <div className='footer_privacy'>
            <a className='link' href='about:blank' target="_blank"><span className='footer_privacy_item'>
                    PRIVACY&nbsp;&nbsp;
                  </span></a>
                <span className='footer_privacy_item'>
                    |
                  </span>
                  <a className='link' href='about:blank' target="_blank"><span className='footer_privacy_item'>
                &nbsp;&nbsp;ONLINE&nbsp;TERMS&nbsp;AND&nbsp;CONDITIONS
                  </span></a>
            </div>
        </div>
    );

}
export default Footer;