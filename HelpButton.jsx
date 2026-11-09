import { useState, useId } from 'react';

function HelpButton() {
  const [isOpen, setIsOpen] = useState(false);
  const tooltipId = useId();

  return (
    <div>
      <button
        type="button"
        aria-label="Aide sur le format"
        aria-expanded={isOpen}
        aria-controls={tooltipId}
        onClick={() => setIsOpen((open) => !open)}
      >
        ?
      </button>
      <div id={tooltipId} role="status" className="tooltip">
        {isOpen ? 'Ce champ accepte les formats JPG et PNG.' : ''}
      </div>
    </div>
  );
}