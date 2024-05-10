import './App.scss';
import { SearchIcon } from './components/svgs/SvgIcons';

function App() {

  return (
    <>
      <div className="main-container">
        <div className="search-box">
          <input type="text" placeholder='Search' className='search-input' />
          <button className='search-btn'>
            <SearchIcon />
          </button>
        </div>
      </div>
    </>
  )
}

export default App
