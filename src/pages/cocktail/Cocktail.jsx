import { useParams } from "react-router-dom";

const Cocktail = () => {
  const { id } = useParams();

  return (
    <div>
      <p>{id}</p>
    </div>
  );
};

export default Cocktail;
