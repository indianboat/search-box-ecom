import { useEffect, useRef, useState } from 'react'
import { SearchIcon } from '../svgs/SvgIcons'
import SearchAutocompleteBox from '../searchAutocompleteBox/SearchAutocompleteBox';

const SearchBar = () => {

  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isAutocompleteOpen, setIsAutocompleteOpen] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const autocompleteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.body.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSearchQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value)
  }

  const handleInputFocus = () => {
    setIsAutocompleteOpen(true);
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (
      autocompleteRef.current &&
      !autocompleteRef.current.contains(event.target as Node) &&
      inputRef.current &&
      !inputRef.current.contains(event.target as Node)
    ) {
      setIsAutocompleteOpen(false);
    }
  };

  return (
    <>
      <div className="main-container">
        <div className="search-bar">
          <input
            ref={inputRef}
            type="text"
            placeholder='Search'
            className='search-input'
            value={searchQuery}
            onChange={handleSearchQuery}
            onFocus={handleInputFocus}
          />
          <button className='search-btn'>
            <SearchIcon />
          </button>

          <div ref={autocompleteRef}>
            <SearchAutocompleteBox isOpen={isAutocompleteOpen} />
          </div>
        </div>
      </div>
    </>
  )
}

export default SearchBar
