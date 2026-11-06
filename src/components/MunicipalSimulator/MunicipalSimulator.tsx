import React, { useState } from 'react';
import { Calculator, ArrowRight } from 'lucide-react';
import styles from './MunicipalSimulator.module.css';

interface SimulatorProps {
  onOpenDemoModal: () => void;
}

export const MunicipalSimulator: React.FC<SimulatorProps> = ({ onOpenDemoModal }) => {
  const [studentCount, setStudentCount] = useState<number>(6500);

  // Projeções calculadas com base em benchmarks de secretarias municipais:
  const hoursSaved = Math.round(studentCount * 0.38);
  const aeeCasesEstimated = Math.round(studentCount * 0.05);

  return (
    <section className={styles.simulatorSection}>
      <div className="container">
        <div className={styles.simulatorContainer}>
          <div className={styles.header}>
            <div className={styles.badge}>
              <Calculator size={14} />
              Simulador de Eficiência Pública
            </div>
            <h2 className={styles.title}>Projete o impacto dos softwares no seu município</h2>
            <p className={styles.subtitle}>
              Arraste o número de estudantes matriculados na sua rede pública e veja o ganho imediato de eficiência com o Gestor Educ e o AVAEE GD.
            </p>
          </div>

          <div className={styles.calculatorCard}>
            <div className={styles.sliderGroup}>
              <div className={styles.sliderHeader}>
                <span className={styles.sliderLabel}>Porte da Rede Escolar Municipal:</span>
                <span className={styles.sliderValueDisplay}>
                  {studentCount.toLocaleString('pt-BR')} Alunos
                </span>
              </div>
              <input 
                type="range"
                min="1000"
                max="40000"
                step="500"
                value={studentCount}
                onChange={(e) => setStudentCount(Number(e.target.value))}
                className={styles.sliderInput}
                aria-label="Número de alunos da rede municipal"
              />
            </div>

            <div className={styles.resultsGrid}>
              <div className={`${styles.resultCard} ${styles.cardHighlight1}`}>
                <div className={styles.resultValue}>
                  {hoursSaved.toLocaleString('pt-BR')}h
                </div>
                <div className={styles.resultLabel}>
                  Horas de digitação manual e burocracia eliminadas por ano
                </div>
              </div>

              <div className={`${styles.resultCard} ${styles.cardHighlight2}`}>
                <div className={styles.resultValue}>
                  ~{aeeCasesEstimated.toLocaleString('pt-BR')} Alunos
                </div>
                <div className={styles.resultLabel}>
                  Estudantes acolhidos precocemente com o Semáforo do AVAEE
                </div>
              </div>

              <div className={`${styles.resultCard} ${styles.cardHighlight3}`}>
                <div className={styles.resultValue}>
                  12 Dias
                </div>
                <div className={styles.resultLabel}>
                  Tempo médio de regulação no CAEE (reduzido de 90 dias)
                </div>
              </div>
            </div>

            <div className={styles.footerCta}>
              <button 
                onClick={onOpenDemoModal}
                className="btn-primary"
                style={{ padding: '0.85rem 2rem' }}
              >
                Solicitar Estudo de Viabilidade para Meu Município
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MunicipalSimulator;
