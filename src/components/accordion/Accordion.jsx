import { useRef, useEffect, useState } from "react";
import "./Accordion.scss";

export default function Accordion({ sectionTitle, color, isOpen, onToggle, children }) {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  // Update height when isOpen changes
  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen, children]);

  return (
    <div className={`accordion__item ${isOpen ? "accordion__item--open" : ""}`} onClick={onToggle}>
      {/* Header */}
      <div className="accordion__header">
        <span className="accordion__header-title">{sectionTitle}</span>
        <svg
          className={`accordion__header-triangle accordion__header-triangle__${color} ${isOpen ? "accordion__header-triangle--rotated" : ""}`}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M8 5l8 7-8 7z" />
        </svg>
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        className="accordion__content"
        style={{ maxHeight: `${height}px` }}
      >
        {children}
      </div>
    </div>
  );
}
