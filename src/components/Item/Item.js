import { Link } from "react-router-dom"


const Item = ({ item }) => {

    return (
        <div className=' text-center col-lg-4 g-3 '>
            <h2>{item.name}</h2>
            <img src={item.img} alt="img" />
            <p>Precio: ${item.price}</p>
            <p><small>Categoría: {item.category}</small></p>
            <Link to={`/detail/${item.id}`} className='btn btn-primary'>Ver más</Link>
        </div>
    )
}

export default Item