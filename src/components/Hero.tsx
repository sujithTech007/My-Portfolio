"use client";

import styles from "./Hero.module.css";
import { motion } from "framer-motion";
import Image from "next/image";
import { PenTool, Briefcase, MessageCircle, Globe, Camera, Code, Hexagon, Triangle, Circle, Award, Github, Linkedin } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <motion.div
        className={styles.leftContent}
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        <div className={styles.availabilityBadge}>
          <div className={styles.dot}></div>
          B.TECH CSE 2027
        </div>

        <h1 className={styles.heading}>
          Hi, I&apos;m an AI<br />
          &amp; ML<br />
          Student<span className={styles.copyright}>©</span>
        </h1>

        <p className={styles.description}>
          I am a B.Tech student specializing in Artificial Intelligence and Machine Learning, with a passion for problem-solving and full-stack web development.
        </p>

        <button className={styles.contactBtn}>Contact Me</button>
      </motion.div>

      <motion.div
        className={styles.rightContent}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
      >
        <div className={styles.framerCard}>
          <div className={styles.framerText}>
            <h3>Sujith Suresh</h3>
            <p>Tamil Nadu, India</p>
          </div>
          <div className={styles.framerImageContainer}>
            <Image src="/ml-model.png" alt="Machine Learning Model Visualization" fill />
          </div>
          <div className={styles.badges}>
            <div className={styles.expertBadge}>
              <Hexagon size={16} fill="black" />
              MACHINE LEARNING
            </div>
            <div className={styles.rateBadge}>
              Class of 2027
            </div>
          </div>
        </div>

        <div className={styles.profileImageContainer}>
          <Image src="/profile.png" alt="Profile" fill />
        </div>

        <div className={styles.brandsCard}>
          <p>Recent Certifications<br />&amp; Key Coursework</p>
          <div className={styles.brandLogos}>
            <Award size={24} fill="rgba(255,255,255,0.5)" />
            <span style={{ fontWeight: 500 }}>MongoDB</span>
            <span style={{ fontWeight: 500 }}>Google AIML</span>
          </div>
        </div>

        <div className={styles.socialLinks}>
          <motion.a 
            href="https://linkedin.com/" 
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialBtn}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Linkedin color="#0A66C2" size={28} />
          </motion.a>
          
          <motion.a 
            href="https://github.com/" 
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialBtn}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Github color="var(--foreground)" size={28} />
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
