import { motion } from 'framer-motion';
import { FaWhatsapp, FaStar } from 'react-icons/fa';
import { HiOutlineSparkles } from 'react-icons/hi2';
import Button from '../common/Button';
import { useWhatsApp } from '../../hooks/useWhatsApp';
import { placeholderImage } from '../../assets/placeholders/placeholderImage';
import styles from './Hero.module.css';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] as const },
});

const heroImage = placeholderImage('Foto da Sophia ou resultado em destaque');

const Hero = () => {
  const { getLink } = useWhatsApp();

  return (
    <section id="topo" className={styles.hero}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.content}>
          <motion.span className={styles.eyebrow} {...fadeUp(0)}>
            <HiOutlineSparkles />
            Lash Designer
          </motion.span>

          <motion.h1 className={styles.headline} {...fadeUp(0.1)}>
            Tenha um olhar marcante e elegante <em>todos os dias</em>, sem perder tempo com maquiagem
          </motion.h1>

          <motion.p className={styles.subheadline} {...fadeUp(0.2)}>
            Atendimento personalizado, técnicas modernas e resultados naturais
            que valorizam a sua beleza — do Volume Brasileiro ao Mega Fox.
          </motion.p>

          <motion.div className={styles.trustRow} {...fadeUp(0.3)}>
            <div className={styles.trustItem}>
              <strong>500+</strong>
              <span>clientes atendidas</span>
            </div>
            <div className={styles.divider} />
            <div className={styles.trustItem}>
              <div className={styles.stars}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <span>avaliação 5.0</span>
            </div>
            <div className={styles.divider} />
            <div className={styles.trustItem}>
              <strong>9 técnicas</strong>
              <span>à disposição</span>
            </div>
          </motion.div>

          <motion.div className={styles.ctaRow} {...fadeUp(0.4)}>
            <Button href="#contato" variant="primary" size="lg">
              Agendar Horário
            </Button>
            <Button href={getLink()} variant="secondary" size="lg" icon={<FaWhatsapp />}>
              Falar no WhatsApp
            </Button>
          </motion.div>
        </div>

        <motion.div
          className={styles.imageWrap}
          initial={{ opacity: 0, scale: 0.94, x: 24 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.imageFrame}>
            <img src={heroImage} alt="Foto de destaque a ser inserida pela Sophia Ellen" className={styles.image} />
          </div>

          <motion.div
            className={styles.floatCard}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.floatIconCircle}>
              <HiOutlineSparkles />
            </div>
            <div>
              <strong>Atendimento com hora marcada</strong>
              <span>Conforto e exclusividade no seu horário</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
