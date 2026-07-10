"use client";

import styles from "./Mission.module.css";
import { motion } from "framer-motion";
import { Code2, Cpu, BrainCircuit, Layout, Terminal } from "lucide-react";

export default function Mission() {
  return (
    <section className={styles.missionSection}>
      <motion.div 
        className={styles.missionBanner}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className={styles.missionText}>
          My mission is to apply Artificial Intelligence and Machine Learning to build innovative, efficient, and scalable solutions that solve real-world problems.
        </h2>
        
        <div className={styles.logos}>
          <div className={styles.logoItem}><Terminal size={24} /> Python</div>
          <div className={styles.logoItem}><Code2 size={24} /> Java & C</div>
          <div className={styles.logoItem}><BrainCircuit size={24} /> Machine Learning</div>
          <div className={styles.logoItem}><Layout size={24} /> Full Stack Web Dev</div>
          <div className={styles.logoItem}><Cpu size={24} /> Problem Solving</div>
        </div>
      </motion.div>
    </section>
  );
}
