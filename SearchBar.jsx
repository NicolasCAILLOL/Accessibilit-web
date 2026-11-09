import { useId } from 'react';

import './SearchBar.css';

function SearchBar({ onSearch }) {
  const inputId = useId();

  return (
    <div className="search">
      <label htmlFor={inputId} className="visually-hidden">Rechercher</label>
      <input id={inputId} type="text" placeholder="Rechercher..." />
      <button type="button" aria-label="Lancer la recherche" onClick={onSearch}>
        <span aria-hidden="true">🔍</span>
      </button>
    </div>
  );
}

export default SearchBar;