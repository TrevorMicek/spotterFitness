import React from 'react';
import { Link } from 'gatsby';

import styles from './footerStyles.css'
import FooterComp from '../tailwindComponents/Footer'
const Footer = () => {
  var year = new Date()


return (
<footer className={styles.footer}>
        <div className={styles.waveContainer}>
        <div className={styles.wave}></div>
        </div>

      <div className={styles.footerContainer}>

        <div className={styles.footerTop}>

        </div>
<FooterComp />


    </div>
    </footer>
    )
      }
    export default Footer;