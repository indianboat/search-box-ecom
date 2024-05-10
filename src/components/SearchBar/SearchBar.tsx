import { useEffect, useRef, useState } from 'react'
import { SearchIcon } from '../svgs/SvgIcons'
import SearchAutocompleteBox from '../searchAutocompleteBox/SearchAutocompleteBox';
import { useNavigate } from "react-router-dom";

const SearchBar = () => {

  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isAutocompleteOpen, setIsAutocompleteOpen] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const autocompleteRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {

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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate(`/search?query=${searchQuery}`)
  }

  return (
    <>
      <div className="main-container">
        <form className="search-bar" onSubmit={handleSubmit}>
          <input
            ref={inputRef}
            type="text"
            placeholder='Search'
            className='search-input'
            value={searchQuery}
            onChange={handleSearchQuery}
            onFocus={handleInputFocus}
          />
          <button type="submit" className='search-btn'>
            <SearchIcon />
          </button>

          <div ref={autocompleteRef}>
            <SearchAutocompleteBox isOpen={isAutocompleteOpen} />
          </div>
        </form>
      </div>
    </>
  )
}

export default SearchBar
