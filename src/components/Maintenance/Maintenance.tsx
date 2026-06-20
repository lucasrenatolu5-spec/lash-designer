import { motion } from 'framer-motion';
import { HiOutlineCalendarDays, HiOutlineSparkles, HiOutlineHandRaised } from 'react-icons/hi2';
import SectionHeading from '../common/SectionHeading';
import styles from './Maintenance.module.css';

const STEPS = [
  {
    icon: <HiOutlineCalendarDays />,
    title: 'A cada 15 a 21 dias',
    text: 'Prazo recomendado para realizar a manutenção, repondo os fios que caíram naturalmente.',
  },
  {
    icon: <HiOutlineSparkles />,
    title: 'A partir de R$ 50',
    text: 'Valor da manutenção varia de acordo com a técnica escolhida na aplicação original.',
  },
  {
    icon: <HiOutlineHandRaised />,
    title: 'Cuidados diários',
    text: 'Evite produtos oleosos próximos aos olhos e escove os fios delicadamente todos os dias.',
  },
];

const Maintenance = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHeading
          eyebrow="Manutenção"
          title={
            <>
              Como manter seu olhar <em>sempre impecável</em>
            </>
          }
          description="A manutenção regular é o segredo para manter o volume, o design e a saúde dos seus cílios."
        />

        <div className={styles.grid}>
          {STEPS.map((step, i) => (
            <motion.div
              key={step.title}
              className={styles.card}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className={styles.icon}>{step.icon}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className={styles.note}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <strong>Importante:</strong> não é realizada manutenção em cima do
          serviço de outra profissional. A remoção tem valor de R$ 45,00.
        </motion.div>
      </div>
    </section>
  );
};

export default Maintenance;
