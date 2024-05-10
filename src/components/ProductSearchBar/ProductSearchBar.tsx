import { useEffect, useState } from "react";
import "../../App.scss";
import { Filter, RatingFilter } from "../Filter/Filter";
import { SearchIcon, } from "../svgs/SvgIcons";
import { ProductData } from "../../types/productData";
import ProductCard from "../ProductsList/ProductCard";

const ProductSearchBar = () => {

  const [productData, setProductData] = useState<ProductData[]>([]);
  const [loadingData, setLoadingData] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      setLoadingData(false);
      if (response.ok) {
        const data = await response.json();
        setProductData(data.splice(0, 10))
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="" style={{ margin: "0 auto", width: "100%" }}>
        <div className="product-container">
          <input type="text" placeholder="Search" className="product-search-input" />
          <button className="product-search-button">
            <SearchIcon width={20} height={20} />
          </button>
        </div>
        <h4 style={{ marginTop: "40px", fontSize: "28px", fontWeight: "500" }}>Search Results</h4>
        <div className="search-result-container">

          <div className="filter-sidebar">

            <div className="" style={{ borderBottom: "1px solid #e7e7e7", paddingBottom: "8px" }}>
              <Filter title="brand" data={[{ title: "mango" }, { title: "h&m" }]} />
            </div>

            <div className="" style={{ borderBottom: "1px solid #e7e7e7", padding: "0 0 10px 0" }}>
              <Filter title="Price Range" data={[{ title: "Under 500" }, { title: "1000 - 3000" }]} />
            </div>

            <div className="">
              <RatingFilter title="Ratings" />
            </div>

          </div>

          <div className="product-list">
            <div className="card-container">
              {
                loadingData
                  ? <span>Loading</span>
                  : productData.length === 0
                    ? <span>No Product found</span>
                    : productData.map((product, index) => (
                      <ProductCard data={product} key={index} />
                    ))
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductSearchBar