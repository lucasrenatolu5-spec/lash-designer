import { motion } from 'framer-motion';
import { HiCheck } from 'react-icons/hi2';
import SectionHeading from '../common/SectionHeading';
import { SERVICES } from '../../data/content';
import styles from './PriceTable.module.css';

const PriceTable = () => {
  return (
    <section id="precos" className={styles.section}>
      <div className="container">
        <SectionHeading
          eyebrow="Tabela de preços"
          title={
            <>
              Valores <em>claros</em>, sem surpresas
            </>
          }
          description="Cada técnica já inclui aplicação fio a fio com materiais de qualidade. A manutenção é cobrada separadamente."
        />

        <div className={styles.tableWrap}>
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.id}
              className={`${styles.row} ${service.featured ? styles.featuredRow : ''}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className={styles.rowInfo}>
                <div className={styles.rowName}>
                  {service.name}
                  {service.featured && <span className={styles.tag}>Mais procurado</span>}
                </div>
                <ul className={styles.rowBenefits}>
                  {service.benefits.map((b) => (
                    <li key={b}>
                      <HiCheck /> {b}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.rowPrices}>
                <div className={styles.priceBlock}>
                  <span>Aplicação</span>
                  <strong>R$ {service.applicationPrice}</strong>
                </div>
                <div className={styles.priceBlock}>
                  <span>Manutenção</span>
                  <strong>R$ {service.maintenancePrice}</strong>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PriceTable;
