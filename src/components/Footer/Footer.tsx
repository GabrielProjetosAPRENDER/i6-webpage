import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Instagram } from 'lucide-react';
import styles from './Footer.module.css';
import Logo from '../Logo/Logo';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className="container">
        <div className={styles.grid}>
          {/* Column 1: About */}
          <div className={styles.column}>
            <div className={styles.logoContainer}>
              <Logo lightText={true} size={32} />
            </div>
            <p className={styles.desc}>
              Desenvolvemos softwares modernos que simplificam processos, aumentam a eficiência e ajudam municípios a oferecerem serviços melhores para seus cidadãos.
            </p>
            <div className={styles.socials}>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Instagram">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className={styles.column}>
            <h3 className={styles.colTitle}>Empresa</h3>
            <ul className={styles.linkList}>
              <li className={styles.linkItem}><a href="#/">Home</a></li>
              <li className={styles.linkItem}><a href="#/sobre">Sobre Nós</a></li>
              <li className={styles.linkItem}><a href="#/solucoes">Nossas Soluções</a></li>
              <li className={styles.linkItem}><a href="#/contato">Contato</a></li>
            </ul>
          </div>

          {/* Column 3: Products */}
          <div className={styles.column}>
            <h3 className={styles.colTitle}>Produtos</h3>
            <ul className={styles.linkList}>
              <li className={styles.linkItem}><a href="#/gestor">Gestor Educ (Educação Regular)</a></li>
              <li className={styles.linkItem}><a href="#/avaee">AVAEE GD (Educação Especial)</a></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className={styles.column}>
            <h3 className={styles.colTitle}>Contato</h3>
            <div className={styles.contactList}>
              <div className={styles.contactItem}>
                <Mail size={15} className={styles.contactIcon} />
                <a href="mailto:contato@i6systems.com.br">contato@i6systems.com.br</a>
              </div>
              <div className={styles.contactItem}>
                <Phone size={15} className={styles.contactIcon} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <a href="tel:+5599982146865">(99) 98214-6865</a>
                  <a href="tel:+5599981394306">(99) 98139-4306</a>
                </div>
              </div>
              <div className={styles.contactItem}>
                <MapPin size={15} className={styles.contactIcon} />
                <span>São Luís - MA</span>
              </div>
            </div>
          </div>
        </div>

        <hr className={styles.divider} />

        <div className={styles.bottomBar}>
          <span>&copy; {currentYear} i6 Systems. Todos os direitos reservados.</span>
          <span>CNPJ: 50.542.946/0001-58</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
