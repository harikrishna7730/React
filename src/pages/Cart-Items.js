import { useContext } from "react";
import { DataShare } from "../NavigationStack/Allnavigations";
import NavbarSection from "../components/nav-bar";

const CardItemss = () => {
  const { carditems ,setcardItems} = useContext(DataShare);
  console.log("CardItems: ", carditems);

  const HandleDelete=(id)=>{
   const Delete=carditems.filter(item=>(item.id!==id))
   setcardItems(Delete)
  }
  return (
    <div>
      <NavbarSection/>
     {
        carditems.length>0
        ?
        <div className="main">
         {
            carditems.map(eachcard=>{
                const {name,id,image,rating}=eachcard

                return(
                    <div key={id} className="card">
                    <h2>Name: {name}</h2>
                    <img src={image} alt="title" width={250}/>
                    <h2>{rating}</h2>
                    <button onClick={()=>HandleDelete(id)}>Delete</button>
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
