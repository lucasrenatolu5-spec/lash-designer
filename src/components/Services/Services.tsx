import SectionHeading from '../common/SectionHeading';
import ServiceCard from './ServiceCard';
import { SERVICES } from '../../data/content';
import styles from './Services.module.css';

const Services = () => {
  return (
    <section id="servicos" className={styles.section}>
      <div className="container">
        <SectionHeading
          eyebrow="Serviços"
          title={
            <>
              Técnicas para <em>cada estilo de olhar</em>
            </>
          }
          description="Do clássico ao mais intenso — cada técnica é escolhida para valorizar a sua beleza natural."
        />

        <div className={styles.grid}>
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
