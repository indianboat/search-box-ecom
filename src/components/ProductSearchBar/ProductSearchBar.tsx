import { useEffect, useState } from "react";
import "../../App.scss";
import { Filter, RatingFilter } from "../Filter/Filter";
import { SearchIcon } from "../svgs/SvgIcons";
import { ProductData } from "../../types/productData";
import ProductCard from "../ProductsList/ProductCard";

const ProductSearchBar = () => {

  const [productData, setProductData] = useState<ProductData[]>([]);
  const [loadingData, setLoadingData] = useState<boolean>(true);

  const [searchInput, setSearchInput] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState<string[]>([]);
  const [selectedRatings, setSelectedRatings] = useState<number[]>([]);

  // search filter
  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  // Category Filtering value
  const handleCategoryFilterChange = (category: string) => {
    setSelectedCategory(prevSelected => {
      if (prevSelected.includes(category)) {
        return prevSelected.filter(b => b !== category);
      } else {
        return [...prevSelected, category];
      }
    });
  };

  // Price range Filtering value
  const handlePriceRangeFilterChange = (priceRange: string) => {
    setSelectedPriceRange(prevSelected => {
      if (prevSelected.includes(priceRange)) {
        return prevSelected.filter(p => p !== priceRange);
      } else {
        return [...prevSelected, priceRange];
      }
    });
  };

  // Rating Filtering value
  const handleRatingFilterChange = (rating: number) => {
    setSelectedRatings(prevSelected => {
      if (prevSelected.includes(rating)) {
        return prevSelected.filter(r => r !== rating);
      } else {
        return [...prevSelected, rating];
      }
    });
  };

  // Fetch product data
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      setLoadingData(false);
      if (response.ok) {
        const data = await response.json();
        setProductData(data)
      }
    }
    fetchData();
  }, []);


  //filtering product data

  const filteredData = productData.filter(product => {
    // Category filter
    if (selectedCategory.length > 0 && !selectedCategory.includes(product.category)) {
      return false;
    }

    // Price range filter
    if (selectedPriceRange.length > 0) {
      const price = parseFloat(product.price.toString());
      for (const range of selectedPriceRange) {
        if (range === "Under 100" && price >= 100) {
          return false;
        }
        if (range === "200 - 500" && (price < 200 || price >= 500)) {
          return false;
        }
        if (range === "Above 500" && price < 500) {
          return false;
        }
      }
    }
    // Ratings filter
    if (selectedRatings.length > 0) {
      const productRating = Math.ceil(product.rating.rate); // Round up the product's rating
      if (!selectedRatings.includes(productRating)) {
        return false;
      }
    }

    if (searchInput.trim() !== "") {
      const searchTerm = searchInput.toLowerCase();
      const productTitle = product.title.toLowerCase();
      if (!productTitle.includes(searchTerm)) {
        return false;
      }
    }
    return true;
  });

  return (
    <>
      <div className="" style={{ margin: "0 auto", width: "100%" }}>
        <div className="">
          <a href="/">Home</a>
        </div>
        <div className="product-container">
          <input type="text" placeholder="Search" className="product-search-input" value={searchInput} onChange={handleSearchInputChange} />
          <button className="product-search-button">
            <SearchIcon width={20} height={20} />
          </button>
        </div>
        <h4 style={{ marginTop: "40px", fontSize: "28px", fontWeight: "500" }}>Search Results</h4>
        <div className="search-result-container">

          <div className="filter-sidebar">

            <div className="" style={{ borderBottom: "1px solid #e7e7e7", paddingBottom: "8px" }}>
              <Filter title="Category" data={[{ title: "men's clothing" }, { title: "jewelery" }, { title: "electronics" }, { title: "women's clothing" }]} onSelect={handleCategoryFilterChange} />
            </div>

            <div className="" style={{ borderBottom: "1px solid #e7e7e7", padding: "0 0 10px 0" }}>
              <Filter title="Price Range" data={[{ title: "Under 100" }, { title: "200 - 500" }, { title: "Above 500" }]} onSelect={handlePriceRangeFilterChange} />
            </div>

            <div className="">
              <RatingFilter title="Ratings" onSelect={handleRatingFilterChange} />
            </div>

          </div>

          <div className="product-list">
            <div className="card-container">
              {
                loadingData
                  ? <span>Loading</span>
                  : filteredData.length === 0
                    ? <span>No Product found</span>
                    : filteredData.map((product, index) => (
                      <ProductCard data={product} key={index} />
                    ))
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductSearchBar;
