import React from 'react';
import styles from './footer.module.css';  // Importing the CSS module

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.footerCol}>
            <h4>Amaravati Essentials </h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Story</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>
          <div className={styles.footerCol}>
            <h4>Customer Help</h4>
            <ul>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Shipping & Delivery</a></li>
              <li><a href="#">Returns & Exchanges</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          <div className={styles.footerCol}>
            <h4>Shop Categories</h4>
            <ul>
              <li><a href="#">Fresh Produce</a></li>
              <li><a href="#">Dairy & Eggs</a></li>
              <li><a href="#">Beverages</a></li>
              <li><a href="#">Snacks & Sweets</a></li>
              <li><a href="#">Pantry Essentials</a></li>
            </ul>
          </div>
          {/* <div className={styles.footerCol}>
            <h4>Follow Us</h4>
            <div className={styles.socialLinks}>
              <a href="#"><i className="fa fa-facebook"></i></a>
              <a href="#"><i className="fa fa-twitter"></i></a>
              <a href="#"><i className="fa fa-instagram"></i></a>
              <a href="#"><i className="fa fa-linkedin"></i></a>
            </div>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

