import { motion, AnimatePresence } from "framer-motion";
import Image1 from "../../assets/autocomplete-images/img1.jpeg";
import Image2 from "../../assets/autocomplete-images/img2.jpeg";
import Image3 from "../../assets/autocomplete-images/img3.jpeg";
import Image4 from "../../assets/autocomplete-images/img4.jpeg";
import Image5 from "../../assets/autocomplete-images/img5.jpeg";
import { Link } from "react-router-dom";

interface AutocompleteTypes {
  isOpen: boolean
}

const SearchAutocompleteBox = ({ isOpen }: AutocompleteTypes) => {

  return (
    <>
      <AnimatePresence>
        {
          isOpen && <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="autocomplete-container"
          >
            <div style={{ width: "100%" }}>
              <h4>Latest Trends</h4>
              <div className="images-container">

                <Link to="/search" className="">
                  <img src={Image1} className="autocomplete-images" alt="fashion-image" />
                  <p>Shirt with puffed sleeves</p>
                </Link>

                <Link to="/search" className="">
                  <img src={Image2} className="autocomplete-images" alt="fashion-image" />
                  <p>Linen jumpsuit</p>
                </Link>

                <Link to="/search" className="">
                  <img src={Image3} className="autocomplete-images" alt="fashion-image" />
                  <p>White formal suit</p>
                </Link>

                <Link to="/search" className="">
                  <img src={Image4} className="autocomplete-images" alt="fashion-image" />
                  <p>Patterns dresses</p>
                </Link>

                <Link to="/search" className="">
                  <img src={Image5} className="autocomplete-images" alt="fashion-image" />
                  <p>Leather shirt dress</p>
                </Link>

              </div>

              <div className="popular-suggestion-container" style={{ paddingBottom: "20px" }}>
                <h3>Popular suggestions</h3>
                <ul>
                  <li><Link to="/search">Striped shirt dress</Link></li>
                  <li><Link to="/search">Satin shirts</Link></li>
                  <li><Link to="/search">Denim jumpsuit</Link></li>
                  <li><Link to="/search">Leather dresses</Link></li>
                  <li><Link to="/search">Solid tshirts</Link></li>
                </ul>
              </div>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </>
  )
}

export default SearchAutocompleteBox