import { useNavigate, useParams } from "react-router-dom";
import fillerData from "../../FillerData/FillerStoreData";
import ItemCard from "../Utility/ItemCard";

export default function StoreCat() {
  const { itemCategory } = useParams();
  const navigate = useNavigate()
  const categorizedItems = fillerData
    .filter((item) => item.cat === itemCategory)
    .map((item) => <ItemCard item={item} />);

  return <div>
    <button onClick={() => navigate(-1)}>Go Back</button>
    {categorizedItems.length ? <>{categorizedItems}</> : <p>no items</p>}
  </div> 
}
