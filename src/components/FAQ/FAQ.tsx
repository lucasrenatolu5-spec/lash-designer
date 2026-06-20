import { useState } from 'react';
import { motion } from 'framer-motion';
import { HiOutlineExclamationCircle } from 'react-icons/hi2';
import SectionHeading from '../common/SectionHeading';
import AccordionItem from './AccordionItem';
import { FAQS, POLICIES } from '../../data/content';
import styles from './FAQ.module.css';

const FAQ = () => {
  const [openId, setOpenId] = useState<string | null>(FAQS[0]?.id ?? null);

  return (
    <section id="faq" className={styles.section}>
      <div className="container">
        <SectionHeading
          eyebrow="Perguntas frequentes"
          title={
            <>
              Tire suas <em>dúvidas</em>
            </>
          }
        />

        <div className={styles.list}>
          {FAQS.map((item) => (
            <AccordionItem
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={() => setOpenId(openId === item.id ? null : item.id)}
            />
          ))}
        </div>

        <motion.div
          className={styles.policiesBox}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.policiesHeader}>
            <HiOutlineExclamationCircle />
            <h3>Avisos importantes</h3>
          </div>
          <p className={styles.policiesIntro}>
            Para garantir um bom atendimento e organização, pedimos que leiam com atenção:
          </p>
          <ul className={styles.policiesList}>
            {POLICIES.map((policy) => (
              <li key={policy}>{policy}</li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
