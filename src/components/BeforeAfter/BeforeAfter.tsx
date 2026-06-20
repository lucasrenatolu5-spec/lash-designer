import SectionHeading from '../common/SectionHeading';
import BeforeAfterSlider from './BeforeAfterSlider';
import { BEFORE_AFTER } from '../../data/beforeAfter';
import styles from './BeforeAfter.module.css';

/*ESSE COMPONENTE NAO ESTÀ SENDO USADO, MAS TA AQ PARA CASO MUDE DE IDEIA*/
 

const BeforeAfter = () => {
  return (
    <section id="resultados" className={styles.section}>
      <div className="container">
        <SectionHeading
          eyebrow="Resultados reais"
          title={
            <>
              Arraste e veja a <em>transformação</em>
            </>
          }
          description="Arraste o controle deslizante para comparar o antes e depois de cada técnica."
        />

        <div className={styles.grid}>
          {BEFORE_AFTER.map((item) => (
            <BeforeAfterSlider
              key={item.id}
              title={item.title}
              procedure={item.procedure}
              beforeImage={item.beforeImage}
              afterImage={item.afterImage}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
