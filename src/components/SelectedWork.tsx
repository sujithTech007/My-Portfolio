"use client";

import styles from "./SelectedWork.module.css";
import { motion } from "framer-motion";
import Image from "next/image";

export default function SelectedWork() {
  return (
    <section id="projects" className={styles.workSection}>
      <motion.div 
        className={styles.sectionHeader}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className={styles.sectionTitle}>
          Selected<br/>Projects
        </h2>
        <button className={styles.seeAllBtn}>See All</button>
      </motion.div>

      <div className={styles.workGrid}>
        <motion.div 
          className={styles.workCard}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={styles.imageContainer}>
            <Image src="/churn.png" alt="Churn Prediction Project" fill priority />
          </div>
          
          <div className={styles.workInfo}>
            <div className={styles.workHeader}>
              <h3>Customer Churn Prediction</h3>
            </div>
            <div className={styles.tags}>
              <span className={styles.tag}>Machine Learning</span>
              <span className={styles.tag}>Python</span>
              <span className={styles.tag}>Data Analysis</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className={styles.workCard}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className={styles.imageContainer}>
            <Image src="/skin.png" alt="Skin Disease Classification" fill />
          </div>
          
          <div className={styles.workInfo}>
            <div className={styles.workHeader}>
              <h3>Skin Disease Classification</h3>
            </div>
            <div className={styles.tags}>
              <span className={styles.tag}>Machine Learning</span>
              <span className={styles.tag}>Computer Vision</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className={styles.workCard}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className={styles.imageContainer}>
            <Image src="/prop_firm.png" alt="Prop Firm Challenge Analyzer" fill />
          </div>
          
          <div className={styles.workInfo}>
            <div className={styles.workHeader}>
              <h3>Prop Firm Challenge Analyzer</h3>
            </div>
            <div className={styles.tags}>
              <span className={styles.tag}>Full-Stack</span>
              <span className={styles.tag}>Web Dev</span>
              <span className={styles.tag}>Analytics</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
