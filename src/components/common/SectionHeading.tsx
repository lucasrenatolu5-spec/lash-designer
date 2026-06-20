import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import styles from './SectionHeading.module.css';

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: 'center' | 'left';
  light?: boolean;
}

const LashDivider = () => (
  <svg
    className={styles.lashDivider}
    viewBox="0 0 120 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M2 12 Q30 -4 60 9 Q90 -4 118 12"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
    <circle cx="60" cy="11" r="2.2" fill="currentColor" />
  </svg>
);

const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = 'center',
  light = false,
}: SectionHeadingProps) => {
  return (
    <motion.div
      className={`${styles.wrap} ${styles[align]} ${light ? styles.light : ''}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
      <h2 className={styles.title}>{title}</h2>
      <LashDivider />
      {description && <p className={styles.description}>{description}</p>}
    </motion.div>
  );
};

export default SectionHeading;
