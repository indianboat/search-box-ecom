import { StarIcon } from "../svgs/SvgIcons";

const ProductRating = ({ value }: { value: number }) => {
  const renderStars = () => {

    const fullStars = Math.ceil(value);

    const stars = Array.from({ length: 5 }, (_, index) => {
      const color = index < fullStars ? "#edb703" : "#bababa";
      return (
        <StarIcon key={index} color={color} width={14} height={14} />
      );
    });

    return stars;
  };

  return <div>{renderStars()}</div>;
};

export default ProductRating;
