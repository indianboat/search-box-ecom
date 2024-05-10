import { useState } from "react";
import { ProductData } from "../../types/productData"
import { HeartIcon } from "../svgs/SvgIcons";
import ProductRating from "../ProductRating/ProductRating";

interface ProductCardProps {
  data: ProductData;
}

const ProductCard = ({ data }: ProductCardProps) => {

  const [wishlistAdded, setWishlistAdded] = useState<boolean>(false);

  return (
    <>
      <div className="product-card">
        <img src={data.image} alt={data.title} />

        <button className="wishlist-btn" onClick={() => setWishlistAdded(!wishlistAdded)}>
          <HeartIcon color={wishlistAdded ? "#a10000" : "none"} stroke={wishlistAdded ? "#a10000" : "#aaaaaa"} />
        </button>

        <p className="product-title" title={data.title}>
          {data.title}
        </p>
        <p className="product-price">
          Rs.{data.price}
        </p>
        <div className="user-ratings">
          <ProductRating value={data.rating.rate} />
          <span>({data.rating.count})</span>
        </div>

        <div className="view-product">
          <a href="#!">
            View Product
          </a>
        </div>

      </div>
    </>
  )
}

export default ProductCard;