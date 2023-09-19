const ProductCard = ({ id, name, image }) => {
  return (
    <div className="rounded overflow-hidden text-center bg-white shadow relative transition-transform cursor-pointer hover:scale-105">
      <img src={image} alt="" />
      <p className="absolute top-2 left-2 bg-orange-400 rounded-md px-2">
        {name}
      </p>
    </div>
  );
};

export default ProductCard;
