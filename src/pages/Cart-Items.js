import { useContext } from "react";
import { DataShare } from "../NavigationStack/Allnavigations";

const CardItemss = () => {
  const { carditems ,setcardItems} = useContext(DataShare);
  console.log("CardItems: ", carditems);

  const HandleDelete=(id)=>{
   const Delete=carditems.filter(item=>(item.idCategory!==id))
   setcardItems(Delete)
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
                    <button onClick={()=>HandleDelete(idCategory)}>Delete</button>
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
