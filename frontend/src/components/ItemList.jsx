import SingleItem from "./SingleItem.jsx";
import {  Link, useLocation  } from 'react-router-dom';

function ItemList({ title, items, itemsArray, path, idPath }) {
    const pathname = useLocation().pathname;
    const isHome = pathname === '/';
    let finalItems;

    finalItems = isHome ? items : Infinity;

    return (
            <div className="item-list">
                <div className="item-list__header">
                    <h2>{title} populares</h2>
                    {isHome ? (<Link to={path} className="item-list__link">
                        Mostrar tudo
                    </Link>): (<></>)}
                </div>
                <div className="item-list__container">
                    {itemsArray
                    .filter((currentValue, index) => index < finalItems)
                    .map((currObj, index) => (
                    <SingleItem
                        idPath={idPath}
                        {...currObj}
                    />
                    ))}
                </div>
            </div>
    )
}

export default ItemList;