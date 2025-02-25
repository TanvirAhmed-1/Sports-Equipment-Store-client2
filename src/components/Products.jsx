import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import ProductCard from './ProductCard';
import { NavLink } from 'react-router-dom';

const Products = () => {
    const data=useLoaderData();
    console.log(data)
    const [product, setProduct]=useState(data)
    
    const category=( category)=>{
        if(category === "all"){
            setProduct(data)
            return
        }
        const filterProduct=data.filter(p=>p.categoryName === category)
        setProduct(filterProduct)
    }
    return (
        <div className='py-20 w-11/12 mx-auto'>
           <h1 className='text-4xl font-semibold text-center text-black'>Shop Now</h1> 
           <p className='text-2xl font-semibold text-center text-gray-600 pt-4 pb-16'>Find Your Products</p>

           <div className='grid grid-cols-2 gap-6 md:grid-cols-3 lg:flex lg:gap-12 w-10/12 mx-auto justify-center items-center'>
            <NavLink onClick={()=>category("all")} className="md:text-xl leading-normal font-semibold btn rounded-xl bg-gray-400 text-white border-none" >All Product </NavLink>
            <NavLink onClick={()=>category("Cricket")} className="md:text-xl leading-normal font-semibold btn rounded-xl bg-gray-400 text-white border-none" > Cricket </NavLink>
            <NavLink onClick={()=>category("Football")} className="md:text-xl leading-normal font-semibold btn rounded-xl bg-gray-400 text-white border-none" > Football </NavLink>
            <NavLink onClick={()=>category("Fitness")} className="md:text-xl leading-normal font-semibold btn rounded-xl bg-gray-400 text-white border-none" > Fitness </NavLink>
            <NavLink onClick={()=>category("Shoes $ Boot")} className="md:text-xl leading-normal font-semibold btn rounded-xl bg-gray-400 text-white border-none" > Shoes_Boot </NavLink>
            <NavLink onClick={()=>category("Volleyball")} className="md:text-xl leading-normal font-semibold btn rounded-xl bg-gray-400 text-white border-none" > Volleyball </NavLink>
            <NavLink onClick={()=>category("More")} className="md:text-xl leading-normal font-semibold btn rounded-xl bg-gray-400 text-white border-none" > More </NavLink>
           </div>

           <div className=' lg:w-11/12 mx-auto grid  gap-5 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:py-20 py-4'>
            {
                product.map(value=><ProductCard key={value._id}
                   Products={value}
                ></ProductCard>)
            }
           </div>
        </div>
    );
};

export default Products;