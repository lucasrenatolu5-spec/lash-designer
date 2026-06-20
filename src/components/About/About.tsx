import { motion } from 'framer-motion';
import { HiOutlineHeart, HiOutlineShieldCheck, HiOutlineSparkles } from 'react-icons/hi2';
import SectionHeading from '../common/SectionHeading';
import logo from '../../assets/images/foto-profi-sentada.jpeg';
import styles from './About.module.css';

const aboutImage = logo;

const PILLARS = [
  {
    icon: <HiOutlineHeart />,
    title: 'Proximidade',
    text: 'Cada cliente é recebida com atenção, do agendamento ao resultado final.',
  },
  {
    icon: <HiOutlineShieldCheck />,
    title: 'Higiene rigorosa',
    text: 'Materiais esterilizados e protocolos de segurança em cada atendimento.',
  },
  {
    icon: <HiOutlineSparkles />,
    title: 'Técnica refinada',
    text: 'Do fio a fio ao Mega Volume, cada aplicação é pensada para o seu olhar.',
  },
];

const About = () => {
  return (
    <section id="sobre" className={styles.section}>
      <div className={`container ${styles.grid}`}>
        <motion.div
          className={styles.imageCol}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.imageFrame}>
            <img src={aboutImage} alt="Foto da Sophia a ser inserida" />
          </div>
        </motion.div>

        <div className={styles.textCol}>
          <SectionHeading
            align="left"
            eyebrow="Sobre a profissional"
            title={
              <>
                Sophia Ellen, <em>Lash Designer</em>
              </>
            }
          />

          <p className={styles.paragraph}>
            Especialista em extensão de cílios, a Sophia atende com hora marcada
            para garantir exclusividade, conforto e atenção total em cada
            atendimento. Do Volume Brasileiro clássico ao Mega Fox mais
            intenso, cada técnica é escolhida para valorizar o seu olhar
            natural.
          </p>
          <p className={styles.paragraph}>
            [Espaço reservado para história, formação e certificações da
            Sophia — substitua este texto pelas informações reais.]
          </p>

          <div className={styles.pillars}>
            {PILLARS.map((p, i) => (
              <motion.div
                key={p.title}
                className={styles.pillar}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className={styles.pillarIcon}>{p.icon}</span>
                <div>
                  <strong>{p.title}</strong>
                  <p>{p.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
