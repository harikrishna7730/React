import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//import Header from "./header-navbar";
import "./recipes.css"

const FetchData = () => {
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    Fetching();
  }, []);

  const Fetching = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/recipes");
      console.log(response.data.recipes);
      if (response.status === 200) {
        setRecipe(response.data.recipes);
      } else {
        console.log("helloworld");
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    
    <div className="border" id="borderbox">
      
      {/* <Header /> */}
    
      {recipe.length > 0 ? (
        recipe.map((eachItem) => {
          const { image, name, rating, id } = eachItem;
          return (
            <div className="card">
              <h2>Name:{name}</h2>
              <img src={image} alt="helloworld" width={300} />
              <h2>Rating:{rating}</h2>
              <button>
                <Link to={`${name}/${id}`}>Click here to see more</Link>
              </button>
            </div>
          );
        })
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};
export default FetchData;
