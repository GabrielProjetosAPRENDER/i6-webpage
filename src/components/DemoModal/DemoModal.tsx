import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2 } from 'lucide-react';
import styles from './DemoModal.module.css';
import { useContactForm } from '../../hooks/useContactForm';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DemoModal: React.FC<DemoModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState('');
  const [municipality, setMunicipality] = useState('');
  const [websiteHoneypot, setWebsiteHoneypot] = useState('');

  const {
    isSending,
    isSubmitted,
    errorMsg,
    submitForm,
    resetForm
  } = useContactForm('Solicitação de Demonstração');

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitForm({
      name,
      email,
      phone,
      role,
      city: municipality,
      company: municipality, // Envia o nome do município como empresa/entidade
      message: 'Solicitação de demonstração do sistema GESTOR efetuada através do modal interativo.',
      websiteHoneypot
    });
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setPhone('');
    setRole('');
    setMunicipality('');
    setWebsiteHoneypot('');
    resetForm();
    onClose();
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { type: 'spring', duration: 0.5, bounce: 0.2 } as const
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className={styles.backdrop}
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={handleReset}
        >
          <motion.div 
            className={styles.modal}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {!isSubmitted ? (
              <>
                <div className={styles.modalHeader}>
                  <h3 id="modal-title" className={styles.title}>Solicitar Demonstração</h3>
                  <p className={styles.subtitle}>Preencha os dados abaixo e veja as soluções da i6 Systems funcionando ao vivo no seu município.</p>
                  <button 
                    className={styles.closeButton} 
                    onClick={handleReset}
                    aria-label="Fechar modal"
                  >
                    <X size={20} />
                  </button>
                </div>
                
                <div className={styles.modalBody}>
                  <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.formGroup}>
                      <label htmlFor="modal-name" className={styles.label}>Seu Nome *</label>
                      <input 
                        type="text" 
                        id="modal-name" 
                        className={styles.input} 
                        placeholder="Ex: João Silva" 
                        required 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    
                    <div className={styles.formGroup}>
                      <label htmlFor="modal-email" className={styles.label}>E-mail Corporativo *</label>
                      <input 
                        type="email" 
                        id="modal-email" 
                        className={styles.input} 
                        placeholder="Ex: joao@municipio.gov.br" 
                        required 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    
                    <div className={styles.formGroup}>
                      <label htmlFor="modal-phone" className={styles.label}>WhatsApp / Celular *</label>
                      <input 
                        type="tel" 
                        id="modal-phone" 
                        className={styles.input} 
                        placeholder="Ex: (11) 98123-4567" 
                        required 
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="modal-municipality" className={styles.label}>Município / UF *</label>
                      <input 
                        type="text" 
                        id="modal-municipality" 
                        className={styles.input} 
                        placeholder="Ex: Campinas / SP" 
                        required 
                        value={municipality}
                        onChange={(e) => setMunicipality(e.target.value)}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="modal-role" className={styles.label}>Seu Cargo</label>
                      <select 
                        id="modal-role" 
                        className={styles.select}
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                      >
                        <option value="">Selecione seu cargo...</option>
                        <option value="prefeito">Prefeito / Vice-Prefeito</option>
                        <option value="secretario">Secretário Municipal</option>
                        <option value="diretor">Diretor / Coordenador</option>
                        <option value="ti">TI / Administração de Sistemas</option>
                        <option value="outros">Outros</option>
                      </select>
                    </div>

                    {/* Honeypot field invisible to users */}
                    <div style={{ display: 'none' }}>
                      <label htmlFor="modal-website">Website</label>
                      <input 
                        type="text" 
                        id="modal-website" 
                        value={websiteHoneypot} 
                        onChange={(e) => setWebsiteHoneypot(e.target.value)} 
                        tabIndex={-1} 
                        autoComplete="off" 
                      />
                    </div>

                    {errorMsg && (
                      <div style={{ color: '#ef4444', backgroundColor: 'rgba(239, 68, 68, 0.08)', padding: '0.75rem', borderRadius: '6px', textAlign: 'center', fontSize: '0.85rem', marginBottom: '1rem', border: '1px solid rgba(239, 68, 68, 0.15)' }}>
                        {errorMsg}
                      </div>
                    )}

                    <motion.button 
                      type="submit" 
                      className={styles.submitBtn}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      disabled={isSending}
                    >
                      <Send size={15} />
                      {isSending ? 'Enviando...' : 'Enviar Solicitação'}
                    </motion.button>
                  </form>
                </div>
              </>
            ) : (
              <div className={styles.successMessage}>
                <div className={styles.successIcon}>
                  <CheckCircle2 size={40} />
                </div>
                <h3 className={styles.successTitle}>Solicitação Enviada!</h3>
                <p className={styles.successDesc}>
                  Sua mensagem foi enviada com sucesso. Em breve nossa equipe entrará em contato.
                </p>
                <button 
                  className={styles.successCloseBtn} 
                  onClick={handleReset}
                >
                  Fechar Janela
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DemoModal;
