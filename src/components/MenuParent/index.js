import { useState } from 'react'
import MenuItem from '../MenuItem';
const MenuParent = ({ items = [], dimention = ['10vw', '5vh'] }) => {
    const [currentMenu, setCurrentMenu] = useState(0);
    const updateSelection = () => {

    }
    return (
        <ul className='menuParent' style={{ listStyleType: "none", width: `${dimention[0]}` }}>
            {
                items.map((item, i) => {
                    (i === currentMenu) ? (<MenuItem id={i} item={item} />) : (<MenuItem id={i} item={item} />)
                })
            }



        </ul>
    );
};

export default MenuParent;
