"use client";

import styles from "./Contact.module.css";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

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
    </section>
  );
}
