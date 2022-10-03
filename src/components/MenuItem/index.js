

const MenuItem = ({ item }) => {

    return (
        <li className="menuItem" style={{border: '1px solid black'}}>
            {`${item}`}
        </li>
    );
};

export default MenuItem;
