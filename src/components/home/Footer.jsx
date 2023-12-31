import React from "react";

export default function Footer() {
  return (
    <>
      <footer id="footer" className="section footer">
        <div className="container">
          <div className="footer__top">
            <div className="footer-top__box">
              <h3>EXTRAS</h3>
              <a href="/">Brands</a>
              <a href="/">Gift Certificates</a>
              <a href="/">Affiliate</a>
              <a href="/">Specials</a>
              <a href="/">Site Map</a>
            </div>
            <div className="footer-top__box">
              <h3>INFORMATION</h3>
              <a href="/">About Us</a>
              <a href="/">Privacy Policy</a>
              <a href="/">Terms & Conditions</a>
              <a href="/">Contact Us</a>
              <a href="/">Site Map</a>
            </div>
            <div className="footer-top__box">
              <h3>MY ACCOUNT</h3>
              <a href="/">My Account</a>
              <a href="/">Order History</a>
              <a href="/">Wish List</a>
              <a href="/">Newsletter</a>
              <a href="/">Returns</a>
            </div>
            <div className="footer-top__box">
              <h3>CONTACT US</h3>
              <div>
                <span>
                  <svg>
                    <use href="./images/sprite.svg#icon-location"></use>
                  </svg>
                </span>
                42 Dream House, Dreammy street, 7131 Dreamville, USA
              </div>
              <div>
                <span>
                  <svg>
                    <use href="./images/sprite.svg#icon-envelop"></use>
                  </svg>
                </span>
                company@gmail.com
              </div>
              <div>
                <span>
                  <svg>
                    <use href="./images/sprite.svg#icon-phone"></use>
                  </svg>
                </span>
                456-456-4512
              </div>
              <div>
                <span>
                  <svg>
                    <use href="./images/sprite.svg#icon-paperplane"></use>
                  </svg>
                </span>
                Dream City, USA
              </div>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="footer-bottom__box"></div>
          <div className="footer-bottom__box"></div>
        </div>
      </footer>
    </>
  );
}
