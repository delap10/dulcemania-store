import React from 'react';

import './../../styles/footerbar.css';

const FooterBar = (): JSX.Element => {
    const year = new Date().getFullYear();
    return (
        <footer className='footer'>
            <div className='footer-content'>
                <div className='footer-section'>
                    <p>Categories</p>
                    <ul>
                        <li>Romance</li>
                        <li>Action</li>
                        <li>Fantasy</li>
                        <li>Slice of Life</li>
                        <li>Mystery</li>
                    </ul>
                </div>
                <div className='footer-section'>
                    <p>About Us</p>
                    <ul>
                        <li>Privacy Policy</li>
                        <li>Terms and Conditions</li>
                    </ul>
                </div>
                <div className='footer-section'>
                    <p>Support</p>
                    <ul>
                        <li>FAQs</li>
                        <li>Online Support</li>
                        <a href="https://github.com/delap10/dulcemania-store" target='_blank' rel='noreferrer noopener'>GitHub</a>
                    </ul>
                </div>
            </div>
            <div className='footer-end'>
                <p>Developed by Ricardo de la Parra &copy; {year}</p>
            </div>
        </footer>
    );
}

export default FooterBar;