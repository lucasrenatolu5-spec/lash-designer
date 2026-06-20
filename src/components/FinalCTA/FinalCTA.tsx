import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { HiOutlineSparkles } from 'react-icons/hi2';
import Button from '../common/Button';
import ContactForm from './ContactForm';
import { useWhatsApp } from '../../hooks/useWhatsApp';
import styles from './FinalCTA.module.css';

const FinalCTA = () => {
  const { getLink } = useWhatsApp();

  return (
    <section id="contato" className={styles.section}>
      <div className="container">
        <motion.div
          className={styles.textCol}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className={styles.eyebrow}>
            <HiOutlineSparkles />
            Agende seu horário
          </span>
          <h2 className={styles.headline}>
            Agende agora e descubra como um olhar bem valorizado pode{' '}
            <em>transformar sua autoestima</em>
          </h2>
          <p className={styles.description}>
            Atendimento exclusivo com hora marcada. Escolha a técnica ideal
            para você e garanta seu horário com a Sophia.
          </p>

          <div className={styles.ctaRow}>
            <Button href={getLink()} variant="whatsapp" size="lg" icon={<FaWhatsapp />}>
              Agendar pelo WhatsApp
            </Button>
          </div>

          <ul className={styles.reassurance}>
            <li>Atendimento somente com hora marcada</li>
            <li>Confirmação com 30% de entrada</li>
            <li>Materiais higienizados e protocolo de segurança</li>
          </ul>
        </motion.div>

        <motion.div
          className={styles.formCol}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
