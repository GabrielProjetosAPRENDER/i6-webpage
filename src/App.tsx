import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import DemoModal from './components/DemoModal/DemoModal';

// Pages
import Home from './pages/Home/Home';
import Sobre from './pages/Sobre/Sobre';
import Solucoes from './pages/Solucoes/Solucoes';
import Gestor from './pages/Gestor/Gestor';
import Avaee from './pages/Avaee/Avaee';
import Contato from './pages/Contato/Contato';

import './styles/global.css';
import CustomCursor from './components/CustomCursor/CustomCursor';
import BackgroundGrid from './components/BackgroundGrid/BackgroundGrid';

const App: React.FC = () => {
  const [route, setRoute] = useState(window.location.hash || '#/');
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const openDemoModal = () => setIsDemoModalOpen(true);
  const closeDemoModal = () => setIsDemoModalOpen(false);

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash || '#/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderPage = () => {
    switch (route) {
      case '#/':
      case '#':
      case '':
        return <Home onOpenDemoModal={openDemoModal} />;
      case '#/sobre':
        return <Sobre onOpenDemoModal={openDemoModal} />;
      case '#/solucoes':
        return <Solucoes />;
      case '#/gestor':
        return <Gestor onOpenDemoModal={openDemoModal} />;
      case '#/avaee':
      case '#/avaee-gd':
        return <Avaee onOpenDemoModal={openDemoModal} />;
      case '#/contato':
        return <Contato />;
      default:
        return <Home onOpenDemoModal={openDemoModal} />;
    }
  };

  return (
    <>
      <CustomCursor />
      <BackgroundGrid />
      <Navbar onOpenDemoModal={openDemoModal} activeRoute={route} />
      <main style={{ minHeight: 'calc(100vh - 80px)' }}>
        {renderPage()}
      </main>
      <Footer />
      <DemoModal isOpen={isDemoModalOpen} onClose={closeDemoModal} />
    </>
  );
};

export default App;
