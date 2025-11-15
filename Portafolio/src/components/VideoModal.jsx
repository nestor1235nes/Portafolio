import { useEffect, useRef } from 'react';
import './VideoModal.css';

const VideoModal = ({ videoSrc, onClose }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <div className="video-modal" onClick={onClose}>
      <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="video-close-button" onClick={onClose}>×</button>
        <video 
          ref={videoRef}
          controls 
          autoPlay
          className="video-player"
        >
          <source src={videoSrc} type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>
      </div>
    </div>
  );
};

export default VideoModal;
