import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const LeftSidebar = () => {

    const [categories, setCategories] = useState([]);
    useEffect (()=>{
        fetch(`http://localhost:5000/categories`)
        .then(res=>res.json())
        .then((data)=>setCategories(data));
    },[]);

    console.log(categories);

    return (
        <div>
            <h2>All Categories: {categories.length}</h2>

            {
                categories.map(category=>
                <NavLink to={`/category/${category.id}`} className="block p-2" key={category.id}>
                    <button className='btn btn-outline btn-accent text-lg w-full'>{category.name}</button>
                </NavLink>)
            }
        </div>
    );
}

export default LeftSidebar;
