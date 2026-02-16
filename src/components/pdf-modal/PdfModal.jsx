import { useEffect } from "react";
import "./PdfModal.scss";

export default function PdfModal({ isOpen, onClose, pdfUrl }) {
  // Disable scrolling on mount, restore on unmount
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = ""; // restore on unmount
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="pdf-modal">
      <div className="pdf-modal__overlay" onClick={onClose}></div>
      <div className="pdf-modal__content">
        <button className="pdf-modal__close" onClick={onClose}>
          ✕
        </button>
        <iframe className="pdf-modal__iframe" src={pdfUrl} title="PDF Viewer" />
      </div>
    </div>
  );
}
