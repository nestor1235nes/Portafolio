import { useEffect } from 'react';
import './ImageModal.css';

const ImageModal = ({ imageSrc, title, onClose }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <div className="image-modal" onClick={onClose}>
      <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="image-close-button" onClick={onClose}>×</button>
        <img 
          src={imageSrc}
          alt={title}
          className="modal-image"
        />
      </div>
    </div>
  );
};

export default ImageModal;
