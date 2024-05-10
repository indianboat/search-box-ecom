import { motion, AnimatePresence } from "framer-motion";
import Image1 from "../../assets/autocomplete-images/img1.jpeg";
import Image2 from "../../assets/autocomplete-images/img2.jpeg";
import Image3 from "../../assets/autocomplete-images/img3.jpeg";
import Image4 from "../../assets/autocomplete-images/img4.jpeg";
import Image5 from "../../assets/autocomplete-images/img5.jpeg";

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

                <a href="/" className="">
                  <img src={Image1} className="autocomplete-images" alt="fashion-image" />
                  <p>Shirt with puffed sleeves</p>
                </a>

                <a href="/" className="">
                  <img src={Image2} className="autocomplete-images" alt="fashion-image" />
                  <p>Linen jumpsuit</p>
                </a>

                <a href="/" className="">
                  <img src={Image3} className="autocomplete-images" alt="fashion-image" />
                  <p>White formal suit</p>
                </a>

                <a href="/" className="">
                  <img src={Image4} className="autocomplete-images" alt="fashion-image" />
                  <p>Patterns dresses</p>
                </a>

                <a href="/" className="">
                  <img src={Image5} className="autocomplete-images" alt="fashion-image" />
                  <p>Leather shirt dress</p>
                </a>

              </div>

              <div className="popular-suggestion-container" style={{paddingBottom:"20px"}}>
                <h3>Popular suggestions</h3>
                <ul>
                  <li><a href="/search?query=hello">Striped shirt dress</a></li>
                  <li><a href="/search?query=hello">Satin shirts</a></li>
                  <li><a href="/search?query=hello">Denim jumpsuit</a></li>
                  <li><a href="/search?query=hello">Leather dresses</a></li>
                  <li><a href="/search?query=hello">Solid tshirts</a></li>
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