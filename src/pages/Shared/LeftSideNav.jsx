import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('/categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className="px-4 space-y-6">
            <h2 className="text-2xl">All Categories: {categories.length}</h2>
            {
                categories?.map(category => <Link to={`/category/${category.id}`} className="block text-xl font-semibold font-poppins" key={category.id}>{category.name}</Link>
                )
            }
        </div>
    );
};

export default LeftSideNav;