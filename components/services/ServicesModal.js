import { useEffect, useState } from 'react';
import Modal from '../Modal';
import ServicesOverview from './ServicesOverview';
import EndToEndService from './EndToEndService';
import EcommerceService from './EcommerceService';
import MarketingService from './MarketingService';

const VIEWS = {
  OVERVIEW: 'overview',
  END_TO_END: 'endToEnd',
  ECOMMERCE: 'ecommerce',
  MARKETING: 'marketing',
};

export default function ServicesModal({ isOpen, onClose }) {
  const [activeView, setActiveView] = useState(VIEWS.OVERVIEW);

  useEffect(() => {
    if (!isOpen) {
      setActiveView(VIEWS.OVERVIEW);
    }
  }, [isOpen]);

  let content = null;

  if (activeView === VIEWS.OVERVIEW) {
    content = (
      <ServicesOverview
        onSelect={(view) => setActiveView(view)}
        viewKeys={VIEWS}
      />
    );
  } else if (activeView === VIEWS.END_TO_END) {
    content = <EndToEndService onBack={() => setActiveView(VIEWS.OVERVIEW)} />;
  } else if (activeView === VIEWS.ECOMMERCE) {
    content = <EcommerceService onBack={() => setActiveView(VIEWS.OVERVIEW)} />;
  } else if (activeView === VIEWS.MARKETING) {
    content = <MarketingService onBack={() => setActiveView(VIEWS.OVERVIEW)} />;
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Services">
      {content}
    </Modal>
  );
}
