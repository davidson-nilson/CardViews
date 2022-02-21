import Card from "../card_element";
import style from "./cards_container_style.module.css";
var data = [
    {"image": "https://cdn.fstatic.com/media/articles/main/2019/04/22/poster_nacional_-midsommar-350836113.png",
    "description": "Após vivenciar uma tragédia pessoal, Dani vai com o namorado Christian e um grupo de amigos até a Suécia para participar de um festival local de verão. Mas, ao invés das férias tranquilas com a qual todos sonhavam, o grupo se depara com rituais bizarros de uma adoração pagã."},
    
    {"image": "https://m.media-amazon.com/images/I/51+0-h9k91L.jpg",
    "description": "Apesar da proibição da música por gerações de sua família, o jovem Miguel sonha em se tornar um músico talentoso como seu ídolo Ernesto de la Cruz. Desesperado para provar seu talento, Miguel se encontra na deslumbrante e colorida Terra dos Mortos."},
    
    {"image": "https://moviesense.files.wordpress.com/2017/05/getout1.jpg",
    "description": "O filme conta a história de Chris, um jovem rapaz negro que namora Rose, uma jovem branca. O casal está se programando para visitar os pais de Rose, que não sabem que a filha está namorando um negro e Chris teme que isso seja um empecilho na relação de ambos."}

]
export default function CardsContainer(){
   
    return(
        <div className={style.container}>
            <Card image={data[0].image} description={data[0].description}/>
            <Card image={data[1].image} description={data[1].description}/>
            <Card image={data[2].image} description={data[2].description}/>
        </div>
    );
}
