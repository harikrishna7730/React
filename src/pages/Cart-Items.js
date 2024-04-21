import { useContext } from "react";
import { DataShare } from "../NavigationStack/Allnavigations";

const CardItemss = () => {
  const { carditems } = useContext(DataShare);
  console.log("CardItems: ", carditems);

  const HandleDelete=(id)=>{
   
  }

  return (
    <div>
     {
        carditems.length>0
        ?
        <div className="main">
         {
            carditems.map(eachcard=>{
                const{strCategory, idCategory, strCategoryThumb}=eachcard

                return(
                    <div key={idCategory} className="card">
                    <h2>Name: {strCategory}</h2>
                    <img src={strCategoryThumb} alt="title" width={250}/>
                    <button onClick={()=>HandleDelete}>Delete</button>
                    </div>
                )
            })
         }
        
        </div>
        :
        <h1>card is empty</h1>
     }
    </div>
  );
};
export default CardItemss;
