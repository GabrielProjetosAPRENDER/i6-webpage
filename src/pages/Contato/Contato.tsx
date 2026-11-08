import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, Linkedin, Instagram, FileText } from 'lucide-react';
import styles from './Contato.module.css';
import { useContactForm } from '../../hooks/useContactForm';

export const Contato: React.FC = () => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [websiteHoneypot, setWebsiteHoneypot] = useState('');

  const {
    isSending,
    isSubmitted,
    errorMsg,
    submitForm,
    resetForm
  } = useContactForm('Contato');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitForm({
      name,
      company,
      city,
      phone,
      email,
      message,
      websiteHoneypot
    });
  };

  const handleReset = () => {
    setName('');
    setCompany('');
    setCity('');
    setPhone('');
    setEmail('');
    setMessage('');
    setWebsiteHoneypot('');
    resetForm();
  };

  return (
    <div className={styles.contatoPage}>
      {/* Hero Header */}
      <section className={styles.hero}>
        <div className={styles.gridOverlay} />
        <div className={styles.glow} />
        <div className="container">
          <motion.div 
            className={styles.heroContent}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className={styles.heroBadge}>Fale Conosco</span>
            <h1 className={styles.heroTitle}>Entre em contato com nossa equipe</h1>
            <p className={styles.heroSubtitle}>
              Tire dúvidas, solicite orçamentos ou agende reuniões. Estamos prontos para responder você.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Grid */}
      <section className={styles.formSection}>
        <div className="container">
          <div className={styles.mainGrid}>
            {/* Form Column */}
            <motion.div 
              className={styles.formCard}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="contact-name">Seu Nome *</label>
                      <input 
                        type="text" 
                        id="contact-name" 
                        required 
                        placeholder="Ex: Ana Souza"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="contact-company">Prefeitura ou Empresa</label>
                      <input 
                        type="text" 
                        id="contact-company" 
                        placeholder="Ex: Prefeitura de Gonçalves Dias"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="contact-city">Cidade / UF *</label>
                      <input 
                        type="text" 
                        id="contact-city" 
                        required
                        placeholder="Ex: Gonçalves Dias / MA"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="contact-phone">Telefone / WhatsApp</label>
                      <input 
                        type="tel" 
                        id="contact-phone" 
                        placeholder="Ex: (99) 98765-4321"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="contact-email">E-mail *</label>
                    <input 
                      type="email" 
                      id="contact-email" 
                      required 
                      placeholder="Ex: contato@municipio.gov.br"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="contact-message">Sua Mensagem *</label>
                    <textarea 
                      id="contact-message" 
                      rows={5} 
                      required 
                      placeholder="Descreva brevemente os desafios da sua gestão ou sua dúvida..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>

                  {/* Honeypot field invisible to users */}
                  <div style={{ display: 'none' }}>
                    <label htmlFor="website-honeypot">Website</label>
                    <input 
                      type="text" 
                      id="website-honeypot" 
                      value={websiteHoneypot} 
                      onChange={(e) => setWebsiteHoneypot(e.target.value)} 
                      tabIndex={-1} 
                      autoComplete="off" 
                    />
                  </div>

                  {errorMsg && (
                    <div className={styles.errorBanner}>
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <button type="submit" className={styles.submitBtn} disabled={isSending}>
                    {isSending ? 'Enviando...' : 'Enviar Mensagem'}
                    <Send size={16} />
                  </button>
                </form>
              ) : (
                <div className={styles.successCard}>
                  <CheckCircle size={48} className={styles.successIcon} />
                  <h3>Mensagem Enviada!</h3>
                  <p>
                    Sua mensagem foi enviada com sucesso. Em breve nossa equipe entrará em contato.
                  </p>
                  <button onClick={handleReset} className={styles.backBtn}>
                    Enviar outra mensagem
                  </button>
                </div>
              )}
            </motion.div>

            {/* Info and Map Column */}
            <motion.div 
              className={styles.infoCol}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className={styles.infoBox}>
                <h3>Informações de Contato</h3>
                
                <ul className={styles.infoList}>
                  <li>
                    <MapPin className={styles.icon} />
                    <div>
                      <strong>Endereço da Sede</strong>
                      <span>Travessa Primeiro de Maio, 211, Centro</span>
                      <span style={{ display: 'block', fontSize: '0.8rem', color: '#64748B' }}>Gonçalves Dias - MA • CEP: 65775-000</span>
                    </div>
                  </li>
                  <li>
                    <Phone className={styles.icon} />
                    <div>
                      <strong>Telefones Institucionais</strong>
                      <span style={{ display: 'block' }}>(99) 98400-8982 (Geral)</span>
                      <span style={{ display: 'block' }}>(99) 98139-4306 (Jurídico & Contratos)</span>
                      <span style={{ display: 'block' }}>(99) 98214-6865 (Suporte Técnico)</span>
                    </div>
                  </li>
                  <li>
                    <Mail className={styles.icon} />
                    <div>
                      <strong>E-mail</strong>
                      <span>contato@i6systems.com.br</span>
                    </div>
                  </li>
                  <li>
                    <FileText className={styles.icon} />
                    <div>
                      <strong>CNPJ</strong>
                      <span>50.542.946/0001-58</span>
                    </div>
                  </li>
                  <li>
                    <Clock className={styles.icon} />
                    <div>
                      <strong>Horário de Atendimento</strong>
                      <span>Segunda a Sexta, das 08h às 18h</span>
                    </div>
                  </li>
                </ul>

                <div className={styles.socials}>
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                    <Linkedin size={20} />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                    <Instagram size={20} />
                  </a>
                </div>
              </div>

              {/* Styled Placeholder Map */}
              <div className={styles.mapPlaceholder}>
                <div className={styles.mapOverlay}>
                  <MapPin size={24} className={styles.mapPinIcon} />
                  <span>Sede da i6 Systems — Gonçalves Dias - MA</span>
                </div>
                {/* Abstrac background grid mimicking a map */}
                <div className={styles.mapLines} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contato;
