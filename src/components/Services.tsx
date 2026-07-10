"use client";

import styles from "./Services.module.css";
import { motion } from "framer-motion";
import { Code2, BrainCircuit, Database, Lightbulb } from "lucide-react";

const services = [
  {
    id: "01",
    title: "Machine Learning",
    desc: "Building and deploying machine learning models to predict outcomes, classify data, and enable data-driven decision-making.",
    icon: <BrainCircuit size={20} />
  },
  {
    id: "02",
    title: "Full Stack Development",
    desc: "Developing and improving web applications with strong frontend and backend architecture, applying practical coding skills.",
    icon: <Code2 size={20} />
  },
  {
    id: "03",
    title: "Data Analysis",
    desc: "Applying data preprocessing, feature extraction, and analytical algorithms using tools like Python, Pandas, and Scikit-Learn.",
    icon: <Database size={20} />
  },
  {
    id: "04",
    title: "Problem Solving",
    desc: "Demonstrating strong work ethic, punctuality, and leadership in executing complex technical projects and internships.",
    icon: <Lightbulb size={20} />
  }
];

export default function Services() {
  return (
    <section id="skills" className={styles.servicesSection}>
      <motion.h2 
        className={styles.sectionTitle}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        How Can I<br/>Assist You?
      </motion.h2>

      <div className={styles.cardsGrid}>
        {services.map((service, index) => (
          <motion.div 
            key={service.id}
            className={styles.serviceCard}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className={styles.cardHeader}>
              <div className={styles.iconWrapper}>
                {service.icon}
              </div>
              <p className={styles.cardDesc}>{service.desc}</p>
            </div>
            
            <div className={styles.cardFooter}>
              <h3>{service.title}</h3>
              <span className={styles.cardNumber}>{service.id}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
