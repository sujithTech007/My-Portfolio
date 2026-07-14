"use client";

import styles from "./EducationExperience.module.css";
import { motion } from "framer-motion";

export default function EducationExperience() {
  return (
    <section id="experience" className={styles.eduSection}>
      <motion.h2 
        className={styles.sectionTitle}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        Education &amp;<br/>Experience
      </motion.h2>

      <div className={styles.timelineGrid}>
        
        <motion.div 
          className={styles.timelineBlock}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3 className={styles.blockTitle}>Experience</h3>
          
          <div className={styles.item}>
            <div className={styles.itemHeader}>
              <h3>Reccsar Pvt Ltd</h3>
              <span className={styles.year}>Mar 2025 - Mar 2025</span>
            </div>
            <span className={styles.subtitle}>Full Stack Web Development Intern</span>
            <p className={styles.desc}>
              Completed a Full Stack Web Development internship, working on building and improving web applications. Gained hands-on experience in frontend and backend development while applying practical coding skills. Demonstrated strong work ethic, punctuality, and commitment during the training.
            </p>
          </div>
        </motion.div>

        <motion.div 
          className={styles.timelineBlock}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className={styles.blockTitle}>Education</h3>
          
          <div className={styles.item}>
            <div className={styles.itemHeader}>
              <h3>SRM IST-Trichy</h3>
              <span className={styles.year}>2027</span>
            </div>
            <span className={styles.subtitle}>B.Tech Computer Science and Engineering - AI and ML</span>
            <p className={styles.desc}>CGPA - 8.1/10</p>
          </div>

          <div className={styles.item}>
            <div className={styles.itemHeader}>
              <h3>Sri Nachammal Vidyavani</h3>
              <span className={styles.year}>2023</span>
            </div>
            <span className={styles.subtitle}>Class XII - CBSE</span>
            <p className={styles.desc}>Percentage - 65.2%</p>
          </div>

          <div className={styles.item}>
            <div className={styles.itemHeader}>
              <h3>Maharishi Vidya Mandir</h3>
              <span className={styles.year}>2021</span>
            </div>
            <span className={styles.subtitle}>Class X - CBSE</span>
            <p className={styles.desc}>Percentage - 77%</p>
          </div>
        </motion.div>



      </div>
    </section>
  );
}
