import { motion } from 'framer-motion';
import SectionHeading from '../common/SectionHeading';
import { placeholderImage } from '../../assets/placeholders/placeholderImage';
import styles from './Studio.module.css';

const STUDIO_IMAGES = [
  { id: 's1', label: 'Espaço de atendimento', image: placeholderImage('Espaço de atendimento') },
  { id: 's2', label: 'Materiais e higienização', image: placeholderImage('Materiais e higienização') },
  { id: 's3', label: 'Ambiente e organização', image: placeholderImage('Ambiente e organização') },
];

const Studio = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHeading
          eyebrow="Ambiente e estrutura"
          title={
            <>
              Um espaço pensado para o seu <em>conforto</em>
            </>
          }
          description="Organização, higiene e atenção aos detalhes em cada canto do atendimento."
        />

        <div className={styles.grid}>
          {STUDIO_IMAGES.map((item, i) => (
            <motion.div
              key={item.id}
              className={styles.imageCard}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <img src={item.image} alt={item.label} loading="lazy" />
              <span className={styles.caption}>{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Studio;
