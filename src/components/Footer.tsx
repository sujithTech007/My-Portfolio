"use client";

import styles from "./Footer.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLeft}>
          <p className={styles.copyright}>
            &copy; {currentYear} Sujith Suresh. All rights reserved.
          </p>
          <p className={styles.subtitle}>
            B.Tech in Artificial Intelligence & Machine Learning
          </p>
        </div>
        <div className={styles.footerRight}>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://github.com/sujithTech007"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <FaGithub size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
