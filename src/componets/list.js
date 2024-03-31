import Items from "./listItems";

const ListItems = [
  {
    name: "animal",
    type: "bollywood",
    rate: 4,
    imgUrl:"https://www.hindustantimes.com/ht-img/img/2023/12/01/900x1600/animal_1701423358862_1701423359058.webp"
  },
  {
    name: "salaar",
    type: "Tollywood",
    rate: 5,
    imgUrl:"https://deadline.com/wp-content/uploads/2023/07/Salaar-poster.jpg?w=959"
  },
  {
    name: "Kingkong",
    type: "Hollywood",
    rate: 3,
    imgUrl:"https://i.pinimg.com/736x/3e/f7/7d/3ef77d3b0d7f56028166022f3c98b43c.jpg"
  },
];
const List = () => {
  return (
    <div>
      <ol>
        {
            ListItems.map((eachObject)=>{
                return(
                    <Items  names={eachObject.type}/>
                    // <Image  imgg={eachObject.imgUrl}/>
                )
            })
        }
      </ol>
    </div>
  );
};
export default List;
