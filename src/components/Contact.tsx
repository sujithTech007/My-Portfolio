"use client";

import styles from "./Contact.module.css";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className={styles.contactSection}>
      <motion.h2 
        className={styles.title}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Let&apos;s Work Together
      </motion.h2>
      
      <motion.p 
        className={styles.desc}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        I am currently available for new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
      </motion.p>

      <motion.div 
        className={styles.contactInfo}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className={styles.infoItem}>
          <Mail size={20} />
          <a href="mailto:ss2733@srmist.edu.in">ss2733@srmist.edu.in</a>
        </div>
        <div className={styles.infoItem}>
          <Phone size={20} />
          <a href="tel:+918610662526">+91 8610662526</a>
        </div>
        <div className={styles.infoItem}>
          <MapPin size={20} />
          <span>Thanjavur, Tamil Nadu</span>
        </div>
      </motion.div>

      <motion.div
        className={styles.socialInfo}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <motion.a 
          href="https://www.linkedin.com/in/sujith-suresh-b995373aa?utm_source=share_via&utm_content=profile&utm_medium=member_android" 
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialContactBtn}
          whileHover={{ scale: 1.1, rotate: -5 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <FaLinkedin size={24} />
        </motion.a>
        <motion.a 
          href="https://github.com/sujithTech007" 
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialContactBtn}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <FaGithub size={24} />
        </motion.a>
      </motion.div>
    </section>
  );
}
