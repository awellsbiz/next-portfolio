import Modal from '../Modal';
import CaseStudyContent from './CaseStudyContent';

export default function CaseStudyModal({ isOpen, onClose, caseStudy }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Case study">
      <CaseStudyContent caseStudy={caseStudy} />
    </Modal>
  );
}
