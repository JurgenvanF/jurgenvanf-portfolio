import "./Accordion.scss";

export default function Accordion({
  sectionTitle,
  color,
  isOpen,
  onToggle,
  children,
}) {
  return (
    <div
      className={`accordion__item ${isOpen ? "accordion__item--open" : ""}`}
      onClick={onToggle}
    >
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
      <div className="accordion__content">{children}</div>
    </div>
  );
}
