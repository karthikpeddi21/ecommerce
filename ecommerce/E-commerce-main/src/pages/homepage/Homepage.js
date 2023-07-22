import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Cartcontext } from "../../context/Context";
import "./Homepage.css";

const Homepage = () => {
  const [data, setData] = useState([]);
  const { dispatch } = useContext(Cartcontext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setData(response.data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  const handleAddToCart = (item) => {
    dispatch({ type: "ADD", payload: item });
  };

  return (
    <div className="home">
      {data.map((item, index) => {
        item.quantity = 1;
        return (
          <div className="card" key={index}>
            <img src={item.image} alt="" />
            <p>{item.title}</p>
            <h3>$. {item.price}</h3>
            <button onClick={() => handleAddToCart(item)}>
              Add to cart
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Homepage;
