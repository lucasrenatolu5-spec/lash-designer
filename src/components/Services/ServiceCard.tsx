import { motion } from 'framer-motion';
import { HiCheck, HiOutlineClock } from 'react-icons/hi2';
import { FaWhatsapp } from 'react-icons/fa';
import type { LashService } from '../../data/types';
import Button from '../common/Button';
import { useWhatsApp } from '../../hooks/useWhatsApp';
import styles from './ServiceCard.module.css';

interface ServiceCardProps {
  service: LashService;
  index: number;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  const { getLink } = useWhatsApp();

  return (
    <motion.article
      className={`${styles.card} ${service.featured ? styles.featured : ''}`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8 }}
    >
      {service.featured && <span className={styles.badge}>Mais procurado</span>}

      <div className={styles.imageWrap}>
        <img src={service.image} alt={service.name} loading="lazy" />
      </div>

      <div className={styles.body}>
        <div className={styles.headRow}>
          <h3 className={styles.name}>{service.name}</h3>
          <span className={styles.duration}>
            <HiOutlineClock /> {service.durationLabel}
          </span>
        </div>

        <p className={styles.description}>{service.description}</p>

        <ul className={styles.benefits}>
          {service.benefits.map((b) => (
            <li key={b}>
              <HiCheck />
              <span>{b}</span>
            </li>
          ))}
        </ul>

        <div className={styles.priceRow}>
          <div className={styles.priceTag}>
            <span>Aplicação</span>
            <strong>R$ {service.applicationPrice}</strong>
          </div>
          <div className={styles.priceTag}>
            <span>Manutenção</span>
            <strong>R$ {service.maintenancePrice}</strong>
          </div>
        </div>

        <Button
          href={getLink(`Olá! Gostaria de agendar o serviço: ${service.name}`)}
          variant="whatsapp"
          size="sm"
          icon={<FaWhatsapp />}
          className={styles.cardCta}
        >
          Agendar esse serviço
        </Button>
      </div>
    </motion.article>
  );
};

export default ServiceCard;
